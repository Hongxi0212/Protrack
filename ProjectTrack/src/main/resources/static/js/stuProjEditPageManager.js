let phaseCount = 0;

document.addEventListener('DOMContentLoaded', function () {
    let id = window.location.pathname.split('/')[3];
    let title = window.location.pathname.split('/')[4];

    listenStuDashboardNavA(id);
    listenStuProjectsNavA(id);
    listenLogoutNavA(id);

    fetch('/project/' + encodeURIComponent(title) + '/view')
        .then(response => {
            return response.json();
        })
        .then(respObject => {
            const project = respObject.project;
            console.log(project);

            const titleContainer = document.getElementById('title_container');

            titleContainer.insertBefore(generateProjectTitle(project), titleContainer.firstChild);

            const tabContainer = document.getElementById('tab_container');

            tabContainer.appendChild(generatePlanTab(project));

            insertPlanDeliverableTable(project);

            phaseCount = document.getElementById("phases_tbody").childElementCount;

            listenAddBtn();
            listenDeleteBtn();
            listenSavePlanBtn();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});

function generateProjectTitle(project) {
    let projectTitle = document.createElement('h1');
    projectTitle.innerHTML = `${project.title}`

    return projectTitle;
}

function generatePlanTab(project) {
    let planTab = document.createElement('div');
    planTab.className = "tab-pane fade show active";
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
            <label class="col-3 col-form-label">Deliverables</label>
            <table class="table table-bordered">
                <thead id="phase_thead">
                    <tr>
                        <th style="width:5%;">Phase</th>
                        <th style="width:70%;">Content</th>
                        <th style="width:20%;">Date</th>
                        <th style="width:5%">Operation</th>
                    </tr>
                </thead>
                <tbody id="phases_tbody">
                <tr>
                <td><input type="text" class="form-control" placeholder="Phase Number" value="I"</td>
                <td>
                    <table class="table table-bordered">
                        <thead class="task_thead">
                        <tr>
                            <th style="width:15%;">Task</th>
                            <th style="width:30%;">Item</th>
                            <th style="width:25%">Responsible</th>
                            <th style="width:20%">Mode</th>
                            <th style="width:10%">Operation</th>
                        </tr>
                        </thead>

                        <tbody class="tasks_tbody">
                        <!--Dynamic Load Deliverables Info-->
                        
                        </tbody>
                    </table>
                </td>
                <td><input type="date" class="form-control" min="2024-01-01" max="2025-12-31" value="2024-01-01"></td>
                <td>
                    <button type="button" class="btn btn-primary phase_add_btn">+</button>
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
    let phases = project.phases
    let members = project.members;

    let dlvrbsCount = 0;

    members.forEach(member => {
        dlvrbsCount += member.deliverables.length;
    });

    const phaseTbody = document.getElementById("phases_tbody");
    const tasksTbody = document.querySelector(".tasks_tbody");

    if (dlvrbsCount === 0) {
        let newDeliverable = document.createElement('tr');
        newDeliverable.innerHTML = `
            <td><input type="text" class="form-control" placeholder="Task Number" value="Assign your Task Number"></td>
            <td><input type="text" class="form-control" placeholder="Task Name" value="Name your Task"></td>
            <td><input type="text" class="form-control" placeholder="Responsible" value="Who will do this Task"></td>
            <td><input type="text" class="form-control" placeholder="Task Mode" value="What is your task submit mode"></td>
            <td>
                <button type="button" class="btn btn-primary task_add_btn">+</button>
            </td>
            `;

        tasksTbody.appendChild(newDeliverable);

    } else {
        phases.forEach(phase => {
            if (phase.number > 1) {
                let newPhase = document.createElement('tr');

                newPhase.innerHTML = `
                <td><input type="text" class="form-control" placeholder="Phase Number" value=${switchIntRoman(phase.number)}></td>
                <td>
                    <table class="table table-bordered">
                        <thead class="task_thead">
                        <tr>
                            <th style="width:15%;">Task</th>
                            <th style="width:30%;">Item</th>
                            <th style="width:25%">Responsible</th>
                            <th style="width:20%">Mode</th>
                            <th style="width:10%">Operation</th>
                        </tr>
                        </thead>
    
                        <tbody class="tasks_tbody">
                        
                        </tbody>
                    </table>
                </td>
                <td><input type="date" class="form-control" min="2024-01-01" max="2025-12-31" value="2024-01-01"></td>
                <td>
                    <button type="button" class="btn btn-primary phase_add_btn">+</button>
                    <button type="button" class="btn btn-danger phase_delete_btn">-</button>
                </td>
           `;

                phaseTbody.appendChild(newPhase);
            }
        });

        phases.forEach(phase=>{
            let currentTaskTbody=phaseTbody.children[phase.number-1].querySelector(".tasks_tbody");
            let responsible="";

            phase.deliverables.forEach(pdeliverable => {
                members.forEach(member=>{
                    member.deliverables.forEach(mdeliverable=>{
                        if(mdeliverable.id===pdeliverable.id){
                            responsible=member.trackUser.name;
                        }
                    })
                });

                let deliverableRow = document.createElement('tr');
                deliverableRow.innerHTML = `
                <td><input type="text" class="form-control" placeholder="Task Number" value=${pdeliverable.number}></td>
                <td><input type="text" class="form-control" placeholder="Task Name" value=${pdeliverable.item}></td>
                <td><input type="text" class="form-control" placeholder="Responsible" value=${responsible}></td>
                <td><input type="text" class="form-control" placeholder="Task Mode" value=${pdeliverable.mode}> </td>
                <td>
                    <button type="button" class="btn btn-primary task_add_btn">+</button>
                    <button type="button" class="btn btn-danger task_delete_btn">-</button>
                </td>
                `;

                currentTaskTbody.appendChild(deliverableRow);
            });
        });
    }
}

function listenAddBtn() {
    const phaseTbody = document.getElementById("phases_tbody");

    phaseTbody.addEventListener('click', function (event) {
        if (event.target.classList.contains("phase_add_btn")) {
            if (phaseCount >= 5) {
                return;
            }

            phaseCount++;

            let newPhase = document.createElement('tr');
            newPhase.innerHTML = `
                <td><input type="text" class="form-control" placeholder="Phase Number" value=${switchIntRoman(phaseCount)}></td>
                <td>
                    <table class="table table-bordered">
                        <thead class="task_thead">
                        <tr>
                            <th style="width:15%;">Task</th>
                            <th style="width:30%;">Item</th>
                            <th style="width:25%">Responsible</th>
                            <th style="width:20%">Mode</th>
                            <th style="width:10%">Operation</th>
                        </tr>
                        </thead>
    
                        <tbody class="tasks_tbody">
                            <td><input type="text" class="form-control" placeholder="Task Number" value="Assign your Task Number"></td>
                            <td><input type="text" class="form-control" placeholder="Task Name" value="Name your Task"></td>
                            <td><input type="text" class="form-control" placeholder="Responsible" value="Who will do this Task"></td>
                            <td><input type="text" class="form-control" placeholder="Task Mode" value="What is your task submit mode"></td>
                            <td>
                                <button type="button" class="btn btn-primary task_add_btn">+</button>
                            </td>
                        </tbody>
                    </table>
                </td>
                <td><input type="date" class="form-control" min="2024-01-01" max="2025-12-31" value="2024-01-01"></td>
                <td>
                    <button type="button" class="btn btn-primary phase_add_btn">+</button>
                    <button type="button" class="btn btn-danger phase_delete_btn">-</button>
                </td>
           `;

            phaseTbody.appendChild(newPhase);
            /*
                        if(phaseCount===5){
                            const lastPhase = phaseTbody.children[4];
                            lastPhase.querySelector('.phase_add_btn').remove();
                        }
                        */
        }


        if (event.target.classList.contains("task_add_btn")) {
            const taskTbody = event.target.closest("tbody");

            if (taskTbody.children.length === 1) {
                if (taskTbody.querySelector("td").innerHTML.trim() === "") {
                    event.target.closest("tr").remove();
                }
            }

            let newTask = document.createElement('tr');
            newTask.innerHTML = `
            <td><input type="text" class="form-control" placeholder="Task Number" value="Assign your Task Number"></td>
            <td><input type="text" class="form-control" placeholder="Task Name" value="Name your Task"></td>
            <td><input type="text" class="form-control" placeholder="Responsible" value="Who will do this Task"></td>
            <td><input type="text" class="form-control" placeholder="Task Mode" value="What is your task submit mode"></td>
            <td>
                <button type="button" class="btn btn-primary task_add_btn">+</button>
                <button type="button" class="btn btn-danger task_delete_btn">-</button>
            </td>
            `;

            taskTbody.appendChild(newTask);
        }
    });
}

function listenDeleteBtn() {
    const phaseTbody = document.getElementById("phases_tbody");

    phaseTbody.addEventListener('click', function (event) {
        if (event.target.classList.contains("phase_delete_btn")) {
            if (phaseTbody.childElementCount === 1) {
                return;
            }

            phaseCount--;

            event.target.closest("tr").remove();
        }

        if (event.target.classList.contains("task_delete_btn")) {
            const taskTbody = event.target.closest("tbody");
            event.target.closest("tr").remove();

            if (taskTbody.children.length === 0) {
                let addRow = document.createElement('tr');
                addRow.innerHTML = `
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <button type="button" class="btn btn-primary task_add_btn">+</button>
                </td>
                `;

                taskTbody.appendChild(addRow);
            }
        }
    });
}

function listenSavePlanBtn() {
    const saveBtn = document.getElementById("plan_save_btn");

    saveBtn.addEventListener('click', function () {
        /*
        const taskTbody = document.getElementById("tasks_tbody");

        if (taskTbody.children[0].querySelector('td').innerHTML === "") {
            taskTbody.removeChild(taskTbody.lastElementChild);
        }
*/
        let mTime = document.getElementById("mTime_input").value;
        let mPlace = document.getElementById("mPlace_input").value;
        let phases = [];

        document.querySelectorAll("#phases_tbody > tr").forEach(row => {
            let tasks = [];

            row.querySelectorAll(".tasks_tbody tr").forEach(innerRow => {
                let task = {
                    taskNumber: innerRow.querySelector("input[placeholder='Task Number']").value,
                    taskName: innerRow.querySelector("input[placeholder='Task Name']").value,
                    responsible: innerRow.querySelector("input[placeholder='Responsible']").value,
                    taskMode: innerRow.querySelector("input[placeholder='Task Mode']").value,
                }

                tasks.push(task);
            })

            let phase = {
                allTask: tasks,
                phaseNum: switchIntRoman(row.querySelector("input[placeholder='Phase Number']").value),
                phaseDate: row.querySelector("input[type='date']").value,
            }

            phases.push(phase);
        });

        let plan = {
            mTime,
            mPlace,
            phases
        }

        console.log(JSON.stringify(plan));

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
                console.error('There has been a problem with your fetch operation:', error);
            });
    });
}

function switchIntRoman(swc) {
    switch (swc) {
        case 1:
            return "I";
        case 2:
            return "II";
        case 3:
            return "III";
        case 4:
            return "IV";
        case 5:
            return "V";
        case "I":
            return 1;
        case "II":
            return 2;
        case "III":
            return 3;
        case "IV":
            return 4;
        case "V":
            return 5;
    }
}