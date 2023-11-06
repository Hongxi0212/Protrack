document.addEventListener('DOMContentLoaded', (event) => {
    let id = window.location.pathname.split('/')[4];

    fetch('/project/stu/' + encodeURIComponent(id) + '/all')
        .then(
            response => response.json()
        )
        .then(allProjects => {
            const container = document.getElementById('projects-container');

            allProjects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.className = 'col-4';
                projectElement.innerHTML = `
                    <div class="card info-card sales-card">
                        <div class="card-body">
                            <h5 class="card-title">${project.title}</h5>
                            <img src="/images/sql.png" style="max-width: 100%; height: auto"/>
                            <div>
                                <ul class="nav" style="padding-top: 20px">
                                    <li id="project_view_link" class="nav-item ms-3"><a href="/protrack/${project.title}/view">View</a></li>
                                    <li id="project_edit_link" class="nav-item ms-3"><a href="/protrack/${project.title}/edit">Edit</a></li>
                                    <li class="nav-item ms-3"><a href="#">Validate</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `;

                container.appendChild(projectElement);
            });

            container.appendChild(generateProjectJoinImg());

            listenProjectJoinImg();
            listenProjectJoinBtn(id);
        })
        .catch(error => console.error('Error:', error));
});

function generateProjectJoinImg() {
    const addProjectElement = document.createElement('div');
    addProjectElement.className = 'col-4';
    addProjectElement.innerHTML = `
        <div class="card info-card revenue-card">
            <div class="card-body">
                <h5 class="card-title">Join Project</h5>
                <img id="project_join_image" src="/images/plus.png" width="100px" height="100px">
            </div>
        </div>
        
        <div class="modal fade" id="project_join_modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Join Project</h5>
                    </div>
                    <div class="modal-body">
                        <div class="row mb-3">
                            <label for="project_join_code" class="col-4 col-form-label">Project Code</label>
                            <div class="col-8">
                                <input id="project_join_code" name="project_join_code" type="text" class="form-control" value="Code">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-9">
                            </div>
                            <div class="col-2 text-center">
                                <button id="project_join_btn" class="btn btn-primary">Join</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

    return addProjectElement;
}

function listenProjectJoinImg() {
    let joinImage = document.getElementById('project_join_image');
    let joinModel = document.getElementById('project_join_modal');

    let myModal = new bootstrap.Modal(joinModel);
    joinImage.addEventListener('click', function () {
        myModal.show();
    });
}

function listenProjectJoinBtn(id) {
    let joinBtn = document.getElementById('project_join_btn');
    if (joinBtn) {
        joinBtn.addEventListener('click', async function () {
            let code = document.getElementById('project_join_code').value.trim();

            fetch("/project/join", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: id,
                    code: code
                })
            })
                .then(function (response) {
                    alert(response.status);
                    window.location.href = "/protrack/projects/stu/" + id;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });
    } else {
        console.error('The project join button was not found.');
    }
}