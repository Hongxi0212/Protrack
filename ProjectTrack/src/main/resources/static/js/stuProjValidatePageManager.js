document.addEventListener('DOMContentLoaded', function () {
    let userId = window.location.pathname.split('/')[3];
    let title = window.location.pathname.split('/')[4];

    listenInstrDashboardNavA(userId);
    listenInstrProjectsNavA(userId);

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

            tabContainer.appendChild(generateValidateTab(project));

            insertPlanDeliverableTable(members);
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

function generateValidateTab(project){
    let validateTab = document.createElement('div');
    validateTab.className = 'tab-pane fade show active';
    validateTab.id = 'validate_tab';
    validateTab.innerHTML = `
    <form>
        <div class="row mb-3">
            <label for="projectTitle_validation" class="col-md-2 col-form-label">Project
                Title</label>
            <div class="col-md-10">
                <input name="projectTitle_validation" type="text" class="form-control"
                       id="projectTitle_validation" value=${project.title} disabled>
            </div>
        </div>
    
        <div class="row mb-3">
            <label for="evaludationDate" class="col-6 col-form-label">Evaluation Date:</label>
            <div class="col-6">
                <input name="evaludationDate" type="text" class="form-control"
                       id="evaludationDate" value=" 10th May 2023">
            </div>
        </div>
    
        <div class="row mb-3">
            <label for="phaseNumber" class="col-md-2 col-form-label">Phase Number:</label>
            <div class="col-md-4">
                <input name="phaseNumber" type="text" class="form-control"
                       id="phaseNumber" value=" 4">
            </div>
    
            <div class="col-md-6">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="all" checked>
                    <label class="form-check-label" for="all">All</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="phase1" checked>
                    <label class="form-check-label" for="phase1">7th Feb, 2023</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="phase2">
                    <label class="form-check-label" for="phase2">5th Mar, 2023</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="phase3" checked>
                    <label class="form-check-label" for="phase3">3rd Apr, 2023</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="phase4" checked>
                    <label class="form-check-label" for="phase4">3rd Apr, 2023</label>
                </div>
            </div>
        </div>
    
        <div class="row mb-3">
                <label class="col-3 col-form-label">Deliverables</label>
            <div class="col-9">
                <table class="table table-bordered">
                    <thead id="deliverables_thead">
                    <tr>
                        <th style="width:40%;text-align: center;font-style: italic;">Item</th>
                        <th style="width:40%;text-align: center;font-style: italic;">Mode</th>
                        <th style="width:20%;text-align: center;font-style: italic;">Points</th>
                    </tr>
                    </thead>
    
                    <tbody id="deliverables_tbody">
                    <!--Dynamic Load Deliverables Info-->
                    </tbody>
                </table>
            </div>
        </div>
    
        <div class="row mb-3">
            <label for="rubric" class="col-md-2 col-form-label">Rubric</label>
            <div class="col-md-10">
                <textarea name="rubric" class="form-control" id="rubric"
                          style="height: 100px">null</textarea>
            </div>
        </div>
    
        <div class="row mb-3">
            <label class="col-md-2 col-form-label">Strengths</label>
            <div class="col-md-4">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th style="width:50%;text-align: center;">Student</th>
                        <th style="width:50%;text-align: center;">Instructor</th>
                    </tr>
                    </thead>
    
                    <tbody>
                    <tr>
                        <td><textarea class="form-control">null</textarea></td>
                        <td><textarea class="form-control">null</textarea></td>
                    </tr>
                    </tbody>
                </table>
            </div>
    
            <label class="col-md-2 col-form-label">Weaknesses</label>
            <div class="col-md-4">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th style="width:50%;text-align: center;">Student</th>
                        <th style="width:50%;text-align: center;">Instructor</th>
                    </tr>
                    </thead>
    
                    <tbody>
                    <tr>
                        <td><textarea class="form-control">null</textarea></td>
                        <td><textarea class="form-control">null</textarea></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <label class="col-md-2 col-form-label">Errors/bugs</label>
            <div class="col-md-4">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th style="width:50%;text-align: center;">Student</th>
                        <th style="width:50%;text-align: center;">Instructor</th>
                    </tr>
                    </thead>
    
                    <tbody>
                    <tr>
                        <td><textarea class="form-control">null</textarea></td>
                        <td><textarea class="form-control">null</textarea></td>
                    </tr>
                    </tbody>
                </table>
            </div>
    
            <label class="col-md-2 col-form-label">Comments</label>
            <div class="col-md-4">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th style="width:50%;text-align: center;">Student</th>
                        <th style="width:50%;text-align: center;">Instructor</th>
                    </tr>
                    </thead>
    
                    <tbody>
                    <tr>
                        <td><textarea class="form-control">null</textarea></td>
                        <td><textarea class="form-control">null</textarea></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </form>
    <div class="text-center">
        <button id="plan_save_btn" class="btn btn-primary">Save</button>
    </div>
    `;

    return validateTab;
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
                <td><input type="text" class="form-control" placeholder="Task Name" value=${deliverable.item} disabled></td>
                <td><input type="text" class="form-control" placeholder="Task Mode" value=${deliverable.mode} disabled></td>
                <td><input type="text" class="form-control" placeholder="Point" value=${deliverable.point}></td>
                `;

                deliverableTbody.appendChild(deliverableRow);
            });
        });

    }
}