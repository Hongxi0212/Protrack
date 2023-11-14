document.addEventListener('DOMContentLoaded', function () {
    let id = window.location.pathname.split('/')[4];

    listenStuDashboardNavA(id);
    listenStuProjectsNavA(id);

    fetch('/project/stu/' + encodeURIComponent(id) + '/all')
        .then(response => {
            return response.json();
        })
        .then(allProjects => {
            console.log(allProjects);
            const container = document.getElementById('projects-container');

            allProjects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.className = 'col-6';
                projectElement.innerHTML = `
                    <div class="card info-card sales-card">
                        <div class="card-body">
                            <h5 class="card-title">${project.title}</h5>
                            <img src="/images/sql.png" style="max-width: 100%; height: auto"/>
                        </div>
                    </div>
                `;

                container.appendChild(projectElement);
            });
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});
