let phaseCount = 0;

document.addEventListener('DOMContentLoaded', function () {
    let id = window.location.pathname.split('/')[3];
    let title = window.location.pathname.split('/')[4];

    listenInstrDashboardNavA(id);
    listenInstrProjectsNavA(id);
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
            tabContainer.appendChild(generateMemberTab());

            insertPlanDeliverableTable(project);
            insertMemberTable(project);

            phaseCount = document.getElementById("phases_tbody").childElementCount;

            listenAddBtn();
            listenDeleteBtn();
            listenSavePlanBtn();
            listenSaveMemberBtn();
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

function generateMemberTab() {
    let memberTab = document.createElement('div');
    memberTab.className = "tab-pane fade show";
    memberTab.id = "member_tab"
    memberTab.innerHTML = `
    <form class="member_edit_form">
        <div class="row mb-3">
            <label class="col-3 col-form-label">Team Members</label>
            <table>
                <tbody>
                <tr>
                    <td>
                        <table class="table table-bordered">
                            <thead>
                            <tr>
                                <th style="width:25%;">Name</th>
                                <th style="width:10%">ID</th>
                                <th style="width:35%">Contact</th>
                                <th style="width:25%">Designation</th>
                                <th style="width:5%">Operation</th>
                            </tr>
                            </thead>
                            <tbody id="members_tbody">
                            <!--Dynamic Load Members Info-->
                            
                            </tbody>
                        </table>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </form>
    <div class="text-center">
        <button id="member_save_btn" class="btn btn-primary">Save</button>
    </div>
    `;

    return memberTab;
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
        let newPhase = document.createElement('tr');
        newPhase.innerHTML = `
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
                <tr>
                <td><input type="text" class="form-control" placeholder="Task Number" value="Assign your Task Number"></td>
                <td><input type="text" class="form-control" placeholder="Task Name" value="Name your Task"></td>
                <td><input type="text" class="form-control" placeholder="Responsible" value="Who will do this Task"></td>
                <td><input type="text" class="form-control" placeholder="Task Mode" value="What is your task submit mode"></td>
                <td>
                    <button type="button" class="btn btn-primary task_add_btn">+</button>
                </td>
                </tr>
                </tbody>
            </table>
        </td>
        <td><input type="date" class="form-control" min="2024-01-01" max="2025-12-31" value="2024-01-01"></td>
        <td>
            <button type="button" class="btn btn-primary phase_add_btn">+</button>
        </td>
        </tr>
        `;

        phaseTbody.appendChild(newPhase);

    } else {
        phases.sort(function (a, b) {
            return a.number - b.number;
        });

        phases.forEach(phase => {
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
            <td><input type="date" class="form-control" min="2024-01-01" max="2025-12-31" value=${phase.due}></td>
            <td>
                <button type="button" class="btn btn-primary phase_add_btn">+</button>
                <button type="button" class="btn btn-danger phase_delete_btn">-</button>
            </td>
            `;

            phaseTbody.appendChild(newPhase);
        });

        phases.forEach(phase => {
            let currentTaskTbody = phaseTbody.children[phase.number - 1].querySelector(".tasks_tbody");
            let responsible = "";

            phase.deliverables.sort(function(a, b){
                return a.number-b.number;
            })

            phase.deliverables.forEach(pdeliverable => {
                members.forEach(member => {
                    member.deliverables.forEach(mdeliverable => {
                        if (mdeliverable.id === pdeliverable.id) {
                            responsible = member.trackUser.name;
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

function insertMemberTable(project) {
    let members = project.members;

    const membersTbody = document.getElementById("members_tbody");

    members.forEach(member => {
        let memberRow = document.createElement('tr');
        memberRow.innerHTML = `
            <td><input type="text" class="form-control"placeholder="Name" value=${member.trackUser.name} disabled></td>
            <td><input type="text" class="form-control" placeholder="ID" value=${member.id} disabled></td>
            <td><input type="text" class="form-control" placeholder="Contact" value=${member.trackUser.email} disabled></td>
            <td><input type="text" class="form-control" placeholder="Designation" value=${member.designation}></td>
            <td>
                <button type="button" class="btn btn-danger member_delete_btn">-</button>
            </td>
        `;

        membersTbody.appendChild(memberRow);
    })
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

    const memberTbody=document.getElementById("members_tbody");

    memberTbody.addEventListener('click',function (event){
        if(event.target.classList.contains("member_delete_btn")){
            event.target.closest("tr").remove();
        }
    })
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

        let dates = document.querySelectorAll("#phases_tbody input[type='date']");
        let previousDate = null;
        let phaseDueLegal = true;

        dates.forEach(function(input) {
            let currentDate = new Date(input.value);

            if (previousDate !== null && currentDate <= previousDate) {
                phaseDueLegal = false;
            }
            previousDate = currentDate;
        });

        if(!phaseDueLegal){
            alert("Wrong Phase Due Order!");
            return;
        }

        let mTime = document.getElementById("mTime_input").value;
        let mPlace = document.getElementById("mPlace_input").value;
        let phases = [];
        let allTasks=[];
        let taskNumberLegal=true;
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
                allTasks.push(task);
            });

            let phase = {
                allTask: tasks,
                phaseNum: switchIntRoman(row.querySelector("input[placeholder='Phase Number']").value),
                phaseDate: row.querySelector("input[type='date']").value,
            }

            phases.push(phase);
        });

        for(let i=0;i<allTasks.length;i++){
            for(let j=i+1;j<allTasks.length;j++){
                if(allTasks[i].taskNumber===allTasks[j].taskNumber||allTasks[i].taskName===allTasks[j].taskName){
                    taskNumberLegal=false;
                }
            }
        }

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
                if(response.status===200){
                    alert("Edit Project Plan Successful!");
                    window.location.href = window.location.pathname.slice(0, -4) + "view";
                }
                if(response.status===404){
                    alert("Wrong Responsible For Deliverable. Please Check Name Spelling!")
                }
            })
            .catch(error => {
                console.error('Error: ', error);
            });
    });
}

function listenSaveMemberBtn(){
    const saveBtn=document.getElementById("member_save_btn");

    saveBtn.addEventListener('click',function(){
        let members = [];

        document.querySelectorAll("#members_tbody tr").forEach(row => {
            let member = {
                name: row.querySelector("input[placeholder='Name']").value,
                id: row.querySelector("input[placeholder='ID']").value,
                designation: row.querySelector("input[placeholder='Designation']").value,
            }

            members.push(member);
        });

        let title = window.location.pathname.split('/')[4];

        fetch("/project/"+encodeURIComponent(title)+"/member/update",{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(members)
        })
            .then(function(response){
                alert(response.status);
                if(response.status===202){
                    alert("Remove Project Member Successful!");
                }
                window.location.reload();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    })
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