document.addEventListener('DOMContentLoaded', function () {
    let userId=window.location.pathname.split('/')[3];
    let title = window.location.pathname.split('/')[4];

    listenStuDashboardNavA(userId);
    listenStuProjectsNavA(userId);

    fetch('/project/' + encodeURIComponent(title) + '/view')
        .then(response => {
            return response.json();
        })
        .then(project => {
            const titleContainer = document.getElementById('title_container');

            titleContainer.insertBefore(generateProjectTitle(project), titleContainer.firstChild);

            const tabContainer = document.getElementById('tab_container');

            tabContainer.appendChild(generatePlanTab(project));


            insertPlanDeliverableTable(project);

            listenAddDeliverableBtn();
            listenDeleteDeliverableBtn();
            listenSavePlanBtn();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});

function generateProjectTitle(project) {
    let projectTitle = document.createElement(('h1'));
    projectTitle.innerHTML = `${project.title}`

    return projectTitle;
}

function generatePlanTab(project) {
    console.log(project);
    let planTab = document.createElement(('div'));
    planTab.className = "tab-pane fade show active profile-overview";
    planTab.id = "plan_tab";
    planTab.innerHTML = `
    <form class="plan_edit_form">
        <div class="row mb-3">
            <label class="col-3 col-form-label">Project Title</label>
                <div class="col-9">
                    <input id="projectTitle_plan"  name="projectTitle_plan" type="text" class="form-control" value=${project.title} disabled>
                </div>
        </div>

        <div class="row mb-3">
            <label for="mTime_input" class="col-3 col-form-label">Meeting Time</label>
            <div class="col-9">
                <input id="mTime_input" name="mTime_input" type="text"
                       class="form-control" value=${project.meetingTime}>
            </div>
        </div>

        <div class="row mb-3">
            <label for="mPlace_input" class="col-3 col-form-label">Meeting Place</label>
            <div class="col-9">
                <input id="mPlace_input" name="mPlace_input" type="text"
                       class="form-control" value=${project.meetingPlace}>
            </div>
        </div>

        <div class="row mb-3">
            <label class="col-md-3 col-form-label">Deliverables</label>
            <table>
                <tbody>
                <tr>
                    <td>
                        <table class="table table-bordered">
                            <thead id="deliverables_thead">
                            <tr>
                                <th style="width:15%;">Task</th>
                                <th style="width:20%;">Item</th>
                                <th style="width:15%">Phase</th>
                                <th style="width:20%">Responsible</th>
                                <th style="width:20%">Mode</th>
                                <th style="width:10%">Operation</th>
                            </tr>
                            </thead>

                            <tbody id="deliverables_tbody">
                            <!--Dynamic Load Deliverables Info-->
                            
                            </tbody>
                        </table>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </form>
    <div class="text-center">
        <button id="plan_save_btn" class="btn btn-primary">Save</button>
    </div>
    `;

    return planTab;
}

function insertPlanDeliverableTable(project) {
    let deliverables = project.deliverables;
    let members = project.members;

    const deliverableTbody = document.getElementById("deliverables_tbody");

    if (deliverables.length === 0) {
        let newDeliverable = document.createElement('tr');
        newDeliverable.innerHTML = `
        <td><input type="text" class="form-control" placeholder="Task Number" value="Assign your Task Number"></td>
        <td><input type="text" class="form-control" placeholder="Task Name" value="Name your Task"></td>
        <td><input type="text" class="form-control" placeholder="Phase Number" value="Assign your Task Phase"></td>
        <td><input type="text" class="form-control" placeholder="Responsible" value="Who will do this Task"></td>
        <td><input type="text" class="form-control" placeholder="Task Mode" value="What is your task submit mode"></td>
        <td>
            <button type="button" class="btn btn-primary deliverable_add_btn">+</button>
        </td>
        `;

        deliverableTbody.appendChild(newDeliverable);
    } else {
        deliverables.forEach(deliverable => {
            let responsibleMID = deliverable.member;
            let responsibleName = "";

            members.forEach(member => {
                if (member.id === responsibleMID) {
                    responsibleName = member.trackUser.name;
                }
            })

            let deliverableRow = document.createElement('tr');
            deliverableRow.innerHTML = `
            <td><input type="text" class="form-control" placeholder="Task Number" value=${deliverable.number}></td>
            <td><input type="text" class="form-control" placeholder="Task Name" value=${deliverable.item}></td>
            <td><input type="text" class="form-control" placeholder="Phase Number" value=${deliverable.phase}></td>
            <td><input type="text" class="form-control" placeholder="Responsible" value=${responsibleName}></td>
            <td><input type="text" class="form-control" placeholder="Task Mode" value=${deliverable.mode}> </td>
            <td>
                <button type="button" class="btn btn-primary deliverable_add_btn">+</button>
                <button type="button" class="btn btn-danger deliverable_delete_btn">-</button>
            </td>
            `;

            deliverableTbody.appendChild(deliverableRow);
        });
    }
}

function listenAddDeliverableBtn() {
    const deliverableTbody = document.getElementById("deliverables_tbody");

    deliverableTbody.addEventListener('click', function (event) {
        if (event.target.classList.contains("deliverable_add_btn")) {
            if (deliverableTbody.children.length === 1) {
                if (deliverableTbody.querySelector("td").innerHTML.trim() === "") {
                    event.target.closest("tr").remove();
                }
            }

            let newDeliverable = document.createElement('tr');
            newDeliverable.innerHTML = `
            <td><input type="text" class="form-control" placeholder="Task Number" value="Assign your Task Number"></td>
            <td><input type="text" class="form-control" placeholder="Task Name" value="Name your Task"></td>
            <td><input type="text" class="form-control" placeholder="Phase Number" value="Assign your Task Phase"></td>
            <td><input type="text" class="form-control" placeholder="Responsible" value="Who will do this Task"></td>
            <td><input type="text" class="form-control" placeholder="Task Mode" value="What is your task submit mode"></td>
            <td>
                <button type="button" class="btn btn-primary deliverable_add_btn">+</button>
                <button type="button" class="btn btn-danger deliverable_delete_btn">-</button>
            </td>
            `;

            deliverableTbody.appendChild(newDeliverable);
        }
    });
}

function listenDeleteDeliverableBtn() {
    const deliverableTbody = document.getElementById("deliverables_tbody");

    deliverableTbody.addEventListener('click', function (event) {
        if (event.target.classList.contains("deliverable_delete_btn")) {
            event.target.closest("tr").remove();

            if (deliverableTbody.children.length === 0) {
                let addRow = document.createElement('tr');
                addRow.innerHTML = `
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <button type="button" class="btn btn-primary deliverable_add_btn">+</button>
                </td>
                `;

                deliverableTbody.appendChild(addRow);
            }
        }
    });
}

function listenSavePlanBtn() {
    const saveBtn = document.getElementById("plan_save_btn");

    saveBtn.addEventListener('click', function () {
        const deliverableTbody = document.getElementById("deliverables_tbody");

        if (deliverableTbody.children[1].querySelector('td').innerHTML === "") {
            deliverableTbody.removeChild(deliverableTbody.lastElementChild);

        }

        let mTime = document.getElementById("mTime_input").value.trim();
        let mPlace = document.getElementById("mPlace_input").value.trim();
        let deliverables = [];

        document.querySelectorAll("#deliverables_tbody tr").forEach(row => {
            let deliverable = {
                taskNumber: row.querySelector("input[placeholder='Task Number']").value,
                taskName: row.querySelector("input[placeholder='Task Name']").value,
                phase: row.querySelector("input[placeholder='Phase Number']").value,
                responsible: row.querySelector("input[placeholder='Responsible']").value,
                taskMode: row.querySelector("input[placeholder='Task Mode']").value,
            }

            deliverables.push(deliverable);
        });

        let plan = {
            mTime,
            mPlace,
            deliverables
        }

        let title = window.location.pathname.split('/')[4];

        fetch("/project/" + encodeURIComponent(title) + "/plan/update", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plan)
        })
            .then(function (response) {
                alert(response.status);
                window.location.href = window.location.pathname.slice(0, -4) + "view";
            })
            .catch(error => {
                console.error('Error: ', error);
            })
    });
}