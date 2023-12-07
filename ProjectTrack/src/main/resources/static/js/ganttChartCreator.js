google.charts.load('current', {'packages': ['gantt']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    let title = window.location.pathname.split('/')[4];

    var data = new google.visualization.DataTable();

    fetch('/project/' + encodeURIComponent(title) + '/view')
        .then(response => {
            return response.json();
        })
        .then(respObject => {
            const project = respObject.project;
            let phases = project.phases;

            let dlvrbsCount = 0;
            if (phases.length !== 0) {
                phases.forEach(phase => {
                    dlvrbsCount += phase.deliverables.length;
                });
            }

            if (dlvrbsCount === 0) {
                let tabContainer=document.getElementById("tab_container");
                let ganttTab=document.getElementById("gantt_tab");
                ganttTab.innerHTML = `
                <p>Students have not created any Phases and Deliverables.</p>
                `;

                tabContainer.append(ganttTab);

                return;
            }

            phases.sort(function (a, b) {
                return a.number - b.number;
            });

            data.addColumn('string', 'Task ID');
            data.addColumn('string', 'Task Name');
            data.addColumn('string', 'Resource');
            data.addColumn('date', 'Start Date');
            data.addColumn('date', 'End Date');
            data.addColumn('number', 'Duration');
            data.addColumn('number', 'Percent Complete');
            data.addColumn('string', 'Dependencies');

            let lastDue = new Date();
            phases.forEach(phase => {
                const dueDate = new Date(phase.due);
                data.addRow([`Phase ${phase.number}`, `Phase ${phase.number}`, null, lastDue, dueDate, null, phase.hasCompleted ? 100 : 0, null]);
                lastDue = dueDate;
            });

            var options = {
                width: 1000,
                height: 400,
                gantt: {
                    trackHeight: 50
                }
            };

            var chart = new google.visualization.Gantt(document.getElementById('gantt_chart_div'));
            chart.draw(data, options);
        })
        .catch(error => {
            console.error('Error: ', error);
        });

}
