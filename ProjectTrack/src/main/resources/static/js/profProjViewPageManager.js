document.addEventListener('DOMContentLoaded', function () {
    let title = window.location.pathname.split('/')[2];

    fetch('/project/' + encodeURIComponent(title) + '/view')
        .then(response => {
            return response.json();
        })
        .then(project => {
            const titleContainer=document.getElementById('container_title');

            titleContainer.insertBefore(generateProjectTitle(project),titleContainer.firstChild);

            const tabContainer = document.getElementById('container_tab');

            tabContainer.appendChild(generatePlanTab(project));
            tabContainer.appendChild(generateOverviewTab(project));
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
    overviewTab.id = 'tab_overview';
    overviewTab.innerHTML = `
        <div class="tab-pane fade show active profile-overview">
            <h5 class="card-title">Project Code</h5>
            <p class="small fst-italic">${project.code}</p>

            <h5 class="card-title">Syllabus</h5>
            <p class="small fst-italic">${project.link}</p>
        </div>
    `;

    return overviewTab;
}

function generatePlanTab(project){
    let planTab=document.createElement('div');
    planTab.className='tab-pane fade pt-3';
    planTab.id='tab_plan';
    planTab.innerHTML=`
        <form>
            <div class="row mb-3">
                <label for="projectTitle_plan" class="col-md-3 col-form-label">Project
                    Title</label>
                <div class="col-md-8 col-lg-9">
                    <input name="projectTitle_plan" type="text" class="form-control"
                           id="projectTitle_plan" value="Gamified Network">
                </div>
            </div>

            <div class="row mb-3">
                <label for="teamNumbers_plan"
                       class="col-md-3 col-form-label">Team Numbers</label>
                <div class="col-md-8 col-lg-9">
                    <input name="teamNumbers_plan" type="text" class="form-control"
                           id="teamNumbers_plan"
                           value="4">
                </div>
            </div>

            <div class="row mb-3">
                <label class="col-md-3 col-form-label">Team
                    Members</label>
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
                                <tbody>
                                <tr>
                                    <td><input type="text" class="form-control"
                                               placeholder="Name"
                                               value="Jane Doe"></td>
                                    <td><input type="text" class="form-control" placeholder="ID"
                                               value="123"></td>
                                    <td><input type="text" class="form-control"
                                               placeholder="Contact"
                                               value="janedoe123@yahoo.com"></td>
                                    <td><input type="text" class="form-control"
                                               placeholder="Designation" value="Leader"></td>
                                </tr>
                                <tr>
                                    <td><input type="text" class="form-control"
                                               placeholder="Name"
                                               value="John Doe"></td>
                                    <td><input type="text" class="form-control" placeholder="ID"
                                               value="256"></td>
                                    <td><input type="text" class="form-control"
                                               placeholder="Contact"
                                               value="johndoe256@yahoo.com"></td>
                                    <td><input type="text" class="form-control"
                                               placeholder="Designation" value="Member"></td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div class="row mb-3">
                <label for="meetingTime" class="col-md-3 col-form-label">Meeting
                    Time</label>
                <div class="col-md-8 col-lg-9">
                    <input name="meetingTime" type="text" class="form-control" id="meetingTime"
                           value="Wed. 4-5pm">
                </div>
            </div>

            <div class="row mb-3">
                <label for="meetingPlace" class="col-md-3 col-form-label">Meeting
                    Place</label>
                <div class="col-md-8 col-lg-9">
                    <input name="meetingPlace" type="text" class="form-control"
                           id="meetingPlace"
                           value="Office">
                </div>
            </div>

            <div class="row mb-3">
                <label class="col-md-3 col-form-label">Deliverables</label>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th style="width:15%;">Task</th>
                                    <th style="width:25%;">Item</th>
                                    <th style="width:15%">Phase</th>
                                    <th style="width:15%">Responsible</th>
                                    <th style="width:15%">Mode</th>
                                    <th style="width:15%">Comment</th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                    <td><input type="text" class="form-control" value="1"></td>
                                    <td><input type="text" class="form-control"
                                               value="User interface">
                                    </td>
                                    <td><input type="text" class="form-control" value="IV"></td>
                                    <td><input type="text" class="form-control"
                                               value="John Doe"></td>
                                    <td><input type="text" class="form-control" value="Link">
                                    </td>
                                    <td><input type="text" class="form-control"
                                               placeholder="Comment">
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="text" class="form-control" value="1.1">
                                    </td>
                                    <td><input type="text" class="form-control"
                                               value="Login screen">
                                    </td>
                                    <td><input type="text" class="form-control" value="IV"></td>
                                    <td><input type="text" class="form-control"
                                               value="John Doe"></td>
                                    <td><input type="text" class="form-control" value="Link">
                                    </td>
                                    <td><input type="text" class="form-control"
                                               placeholder="Comment">
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="text" class="form-control" value="1.2">
                                    </td>
                                    <td><input type="text" class="form-control"
                                               value="Signup screen">
                                    </td>
                                    <td><input type="text" class="form-control" value="IV"></td>
                                    <td><input type="text" class="form-control"
                                               value="John Doe"></td>
                                    <td><input type="text" class="form-control" value="Link">
                                    </td>
                                    <td><input type="text" class="form-control"
                                               placeholder="Comment">
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="text" class="form-control" value="2"></td>
                                    <td><input type="text" class="form-control"
                                               value="ER Diagram"></td>
                                    <td><input type="text" class="form-control" value="I"></td>
                                    <td><input type="text" class="form-control"
                                               value="Jane Doe"></td>
                                    <td><input type="text" class="form-control" value="Image">
                                    </td>
                                    <td><input type="text" class="form-control"
                                               placeholder="Comment">
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="text" class="form-control" value="2.1">
                                    </td>
                                    <td><input type="text" class="form-control"
                                               value="Revise ER Diagram"></td>
                                    <td><input type="text" class="form-control" value="I"></td>
                                    <td><input type="text" class="form-control"
                                               value="Jane Doe"></td>
                                    <td><input type="text" class="form-control" value="Image">
                                    </td>
                                    <td><input type="text" class="form-control"
                                               placeholder="Comment">
                                    </td>
                                </tr>
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