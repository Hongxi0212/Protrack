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

            const titleContainer=document.getElementById('title_container');

            titleContainer.insertBefore(generateProjectTitle(project),titleContainer.firstChild);

            const tabContainer = document.getElementById('tab_container');

            tabContainer.appendChild(generateOverviewTab(project));

            if (project.meetingTime === null && project.meetingPlace === null) {
                tabContainer.appendChild(generateNoPlanTab());

            } else {
                tabContainer.appendChild(generatePlanTab(members));

                insertPlanMemberTable(members);
                insertPlanDeliverableTable(members);
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});

function generateProjectTitle(project){
    let projectTitle=document.createElement(('h1'));
    projectTitle.innerHTML=`${project.title}`

    return projectTitle;
}

function generateOverviewTab(project) {
    let overviewTab = document.createElement('div');
    overviewTab.className = 'tab-pane fade show active';
    overviewTab.id = 'overview_tab';
    overviewTab.innerHTML = `
    <h5 class="card-title">Project Code</h5>
    <p class="small fst-italic">${project.code}</p>

    <h5 class="card-title">Syllabus</h5>
    <p class="small fst-italic">${project.link}</p>
    `;

    return overviewTab;
}

function generateNoPlanTab() {
    let noPlanTab = document.createElement('div');

    noPlanTab.className = 'tab-pane fade pt-3';
    noPlanTab.id = 'plan_tab';
    noPlanTab.innerHTML = `
    <p>Students have not created any plan.</p>
    `;

    return noPlanTab;
}

function generatePlanTab(members){
    const project=members[0].project;
    let planTab=document.createElement('div');

    planTab.className='tab-pane fade pt-3';
    planTab.id = 'plan_tab';
    planTab.innerHTML=`
        <form>
            <div class="row mb-3">
                <label for="projectTitle_plan" class="col-3 col-form-label">Project Title</label>
                <div class="col-9">
                    <input id="projectTitle_plan"  name="projectTitle_plan" type="text" class="form-control" value=${project.title} disabled>
                </div>
            </div>

            <div class="row mb-3">
                <label for="teamNumbers_plan" class="col-3 col-form-label">Team Numbers</label>
                <div class="col-9">
                    <input id="teamNumbers_plan"  name="teamNumbers_plan" type="text" class="form-control" value=${members.length} disabled>
                </div>
            </div>

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
                                    <th style="width:25%">ID</th>
                                    <th style="width:25%">Contact</th>
                                    <th style="width:25%">Designation</th>
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

            <div class="row mb-3">
                <label for="meeting_time" class="col-3 col-form-label">Meeting Time</label>
                <div class="col-9">
                    <input id="meeting_time" name="meeting_time" type="text" class="form-control" value=${project.meetingTime} disabled>
                </div>
            </div>

            <div class="row mb-3">
                <label for="meeting_place" class="col-3 col-form-label">Meeting Place</label>
                <div class="col-9">
                    <input id="meeting_place" name="meeting_place" type="text" class="form-control" value=${project.meetingPlace} disabled>
                </div>
            </div>

            <div class="row mb-3">
                <label class="col-3 col-form-label">Deliverables</label>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <table class="table table-bordered">
                                <thead id="deliverables_thead">
                                <tr>
                                    <th style="width:15%;">Task</th>
                                    <th style="width:25%;">Item</th>
                                    <th style="width:15%">Phase</th>
                                    <th style="width:15%">Responsible</th>
                                    <th style="width:15%">Mode</th>
                                    <th style="width:15%">Comment</th>
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
    `

    return planTab;
}


function insertPlanMemberTable(members) {
    const membersTbody = document.getElementById("members_tbody");

    members.forEach(member => {
        let memberRow = document.createElement('tr');
        memberRow.innerHTML = `
            <td><input type="text" class="form-control"
                       placeholder="Name"
                       value=${member.trackUser.name} disabled></td>
            <td><input type="text" class="form-control" placeholder="ID"
                       value=${member.id} disabled></td>
            <td><input type="text" class="form-control"
                       placeholder="Contact"
                       value=${member.trackUser.email} disabled></td>
            <td><input type="text" class="form-control"
                       placeholder="Are you leader?" value=${member.designation} disabled></td>
        `;

        membersTbody.appendChild(memberRow);
    })
}

function insertPlanDeliverableTable(members) {
    let dlbrbsCount = 0;

    members.forEach(member => {
        dlbrbsCount += member.deliverables.length;
    });

    if (dlbrbsCount === 0) {
        const deliverableThead = document.getElementById("deliverables_thead");

        deliverableThead.innerHTML = ``;

        let newInner = document.createElement('tr');
        newInner.innerHTML = `
        <th>Deliverables has not been created yet.</th>
        `;

        deliverableThead.appendChild(newInner);

    } else {
        const deliverableTbody = document.getElementById("deliverables_tbody");

        members.forEach(member => {
            member.deliverables.forEach(deliverable => {
                let deliverableRow = document.createElement('tr');
                deliverableRow.innerHTML = `
                <td><input type="text" class="form-control" placeholder="Task Number" value=${deliverable.number} disabled></td>
                <td><input type="text" class="form-control" placeholder="Task Name" value=${deliverable.item} disabled></td>
                <td><input type="text" class="form-control" placeholder="Phase Number" value=${deliverable.phase} disabled></td>
                <td><input type="text" class="form-control" placeholder="Responsible" value=${member.trackUser.name} disabled></td>
                <td><input type="text" class="form-control" placeholder="Task Mode" value=${deliverable.mode} disabled> </td>
                <td><input type="text" class="form-control" placeholder="Comment" value=${deliverable.comment} disabled></td>
                `;

                deliverableTbody.appendChild(deliverableRow);
            });
        });

    }
}