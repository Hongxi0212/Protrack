document.addEventListener('DOMContentLoaded', function () {
    let title = window.location.pathname.split('/')[4];

    fetch('/project/' + encodeURIComponent(title) + '/view')
        .then(response => {
            return response.json();
        })
        .then(project => {
            const titleContainer = document.getElementById('title_container');

            titleContainer.insertBefore(generateProjectTitle(project), titleContainer.firstChild);

            const tabContainer = document.getElementById('tab_container');

            tabContainer.appendChild(generatePlanTab(project));


            insertPlanDeliverableTable(project.deliverables);

            listenAddDeliverableBtn();
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
    let planTab = document.createElement(('div'));
    planTab.className = "tab-pane fade show active profile-overview";
    planTab.id = "plan_tab";
    planTab.innerHTML = `
    <form class="plan_edit_form">
        <div class="row mb-3">
            <label class="col-3 col-form-label">Project Title</label>
            <div class="col-9">
                <p>${project.title}</p>
            </div>
        </div>

        <div class="row mb-3">
            <label for="meeting_time" class="col-3 col-form-label">Meeting Time</label>
            <div class="col-9">
                <input id="meeting_time" name="meeting_time" type="text"
                       class="form-control" value=${project.meetingTime}>
            </div>
        </div>

        <div class="row mb-3">
            <label for="meeting_place" class="col-3 col-form-label">Meeting Place</label>
            <div class="col-9">
                <input id="meeting_place" name="meeting_place" type="text"
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
                                <th style="width:20%;">Task</th>
                                <th style="width:25%;">Item</th>
                                <th style="width:15%">Phase</th>
                                <th style="width:20%">Responsible</th>
                                <th style="width:20%">Mode</th>
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

function insertPlanDeliverableTable(deliverables) {
    const deliverableTbody = document.getElementById("deliverables_tbody");

    if (deliverables.length === 0) {
        let newDeliverable = document.createElement('tr');
        newDeliverable.innerHTML = `
        <td><input type="text" class="form-control" placeholder="Task Number" value="Assign your Task Number"></td>
        <td><input type="text" class="form-control" placeholder="Task Name" value="Name your Task"></td>
        <td><input type="text" class="form-control" placeholder="Phase Number" value="Assign your Task Phase"></td>
        <td><input type="text" class="form-control" placeholder="Responsible" value="Who will do this Task"></td>
        <td><input type="text" class="form-control" placeholder="Task Mode" value="What is your task submit mode"> </td>
        `;

        deliverableTbody.appendChild(newDeliverable);
    } else {
        deliverables.foreach(deliverable => {
            let deliverableRow = document.createElement('tr');
            deliverableRow.innerHTML = `
            <td><input type="text" class="form-control" placeholder="Task Number" value=${deliverable.number}></td>
            <td><input type="text" class="form-control" placeholder="Task Name" value=${deliverable.item}></td>
            <td><input type="text" class="form-control" placeholder="Phase Number" value=${deliverable.phase}></td>
            <td><input type="text" class="form-control" placeholder="Responsible" value=${deliverable.member}></td>
            <td><input type="text" class="form-control" placeholder="Task Mode" value=${deliverable.mode}> </td>
            `;

            deliverableTbody.appendChild(deliverableRow);
        })
    }

    let addRow = document.createElement('tr');
    addRow.innerHTML = `
    <td><p></p></td>
    <td><p></p></td>
    <td><p></p></td>
    <td><p></p></td>
    <td>
        <button id="deliverables_add_btn" type="button" class="btn btn-primary">Add</button>
    </td>
    `;

    deliverableTbody.appendChild(addRow);
}

function listenAddDeliverableBtn() {
    const addBtn = document.getElementById("deliverables_add_btn");

    addBtn.addEventListener('click', function () {
        const deliverableTbody = document.getElementById("deliverables_tbody");
        let lastChild = deliverableTbody.lastChild;

        let newDeliverable = document.createElement('tr');
        newDeliverable.innerHTML = `
        <td><input type="text" class="form-control" placeholder="Task Number" value="Assign your Task Number"></td>
        <td><input type="text" class="form-control" placeholder="Task Name" value="Name your Task"></td>
        <td><input type="text" class="form-control" placeholder="Phase Number" value="Assign your Task Phase"></td>
        <td><input type="text" class="form-control" placeholder="Responsible" value="Who will do this Task"></td>
        <td><input type="text" class="form-control" placeholder="Task Mode" value="What is your task submit mode"> </td>
        `;

        deliverableTbody.insertBefore(newDeliverable, lastChild);
    });
}

function listenSavePlanBtn() {
    const saveBtn = document.getElementById("plan_save_btn");

    saveBtn.addEventListener('click',  function () {

    });
}