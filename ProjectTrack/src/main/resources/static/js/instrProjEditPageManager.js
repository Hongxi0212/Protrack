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
            const members=respObject.members;
            console.log(members);


            const titleContainer = document.getElementById('title_container');

            titleContainer.insertBefore(generateProjectTitle(project), titleContainer.firstChild);

            const tabContainer = document.getElementById('tab_container');

            tabContainer.appendChild(generatePlanTab(project));
            tabContainer.appendChild(generateMemberTab());

            insertPlanDeliverableTable(members);
            insertMemberTable(members);

            listenAddDeliverableBtn();
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
                    <input id="projectTitle_plan" name="projectTitle_plan" type="text" class="form-control" value=${project.title}>
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
<!--                                
                                <th style="width:5%">Operation</th>
                                -->
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

function insertPlanDeliverableTable(members) {
    let dlbrbsCount = 0;

    members.forEach(member => {
        dlbrbsCount += member.deliverables.length;
    });

    const deliverableTbody = document.getElementById("deliverables_tbody");

    if (dlbrbsCount === 0) {
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
        members.forEach(member => {
            member.deliverables.forEach(deliverable => {
                let deliverableRow = document.createElement('tr');
                deliverableRow.innerHTML = `
                <td><input type="text" class="form-control" placeholder="Task Number" value=${deliverable.number}></td>
                <td><input type="text" class="form-control" placeholder="Task Name" value=${deliverable.item}></td>
                <td><input type="text" class="form-control" placeholder="Phase Number" value=${deliverable.phase}></td>
                <td><input type="text" class="form-control" placeholder="Responsible" value=${member.trackUser.name}></td>
                <td><input type="text" class="form-control" placeholder="Task Mode" value=${deliverable.mode}> </td>
                <td>
                    <button type="button" class="btn btn-primary deliverable_add_btn">+</button>
                    <button type="button" class="btn btn-danger deliverable_delete_btn">-</button>
                </td>
                `;

                deliverableTbody.appendChild(deliverableRow);
            });
        });
    }
}

function insertMemberTable(members) {
    const membersTbody = document.getElementById("members_tbody");

    members.forEach(member => {
        let memberRow = document.createElement('tr');
        memberRow.innerHTML = `
            <td><input type="text" class="form-control"placeholder="Name" value=${member.trackUser.name} disabled></td>
            <td><input type="text" class="form-control" placeholder="ID" value=${member.id} disabled></td>
            <td><input type="text" class="form-control" placeholder="Contact" value=${member.trackUser.email} disabled></td>
            <td><input type="text" class="form-control" placeholder="Designation" value=${member.designation}></td>
<!--            
            <td>
                <button type="button" class="btn btn-danger deliverable_delete_btn">-</button>
            </td>
            -->
        `;

        membersTbody.appendChild(memberRow);
    })
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

function listenDeleteBtn() {
    const deliverableTbody = document.getElementById("deliverables_tbody");
    const memberTbody=document.getElementById("members_tbody");

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
/*
    memberTbody.addEventListener('click', function (event){
       if(event.target.classList.contains("deliverable_delete_btn")){
           event.target.closest("tr").remove();
       }
    });
    */
}

function listenSavePlanBtn() {
    const saveBtn = document.getElementById("plan_save_btn");

    saveBtn.addEventListener('click', function () {
        const deliverableTbody = document.getElementById("deliverables_tbody");

        if (deliverableTbody.children[0].querySelector('td').innerHTML === "") {
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
                window.location.reload();
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    })
}