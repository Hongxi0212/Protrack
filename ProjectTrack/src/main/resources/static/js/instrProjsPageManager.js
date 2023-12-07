document.addEventListener('DOMContentLoaded', (event) => {
    let id = window.location.pathname.split('/')[4];

    listenInstrDashboardNavA(id);
    listenInstrProjectsNavA(id);
    listenLogoutNavA(id);

    fetch('/project/user/allProjects')
        .then(response => {
            if(!response.ok){
                document.body.innerHTML = '<h1>403 Forbidden</h1><p>Access to this resource on the server is denied!</p>';
            }

            return response.json();
        })
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
                                    <li id="project_view_link" class="nav-item ms-3"><a href="/protrack/instr/${id}/${project.title}/view">View</a></li>
                                    <li id="project_edit_link" class="nav-item ms-3"><a href="/protrack/instr/${id}/${project.title}/edit">Edit</a></li>
                                    <li id="project_validate_link" class="nav-item ms-3"><a href="/protrack/instr/${id}/${project.title}/validate">Validate</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `;

                container.appendChild(projectElement);
            });

            container.appendChild(generateProjectCreateImg());

            listenProjectCreateImg();
            listenProjectCreateBtn(id);
        })
        .catch(error => {
            console.error('Fetch Error:', error);
        });
});

function generateProjectCreateImg() {
    const addProjectElement = document.createElement('div');
    addProjectElement.className = 'col-4';
    addProjectElement.innerHTML = `
        <div class="card info-card revenue-card">
            <div class="card-body">
                <h5 class="card-title">New Project</h5>
                <img id="project_create_image" src="/images/plus.png" width="100px" height="100px">
            </div>
        </div>
        
        <div class="modal fade" id="project_create_modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Create Project</h5>
                    </div>
                    <div class="modal-body">
                        <div class="row mb-3">
                            <label for="project_create_name" class="col-4 col-form-label">Project Name</label>
                            <div class="col-8">
                                <input id="project_create_name" name="project_create_name" type="text" class="form-control" value="Name">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="project_create_syllabus" class="col-4 col-form-label">Syllabus Link</label>
                            <div class="col-8">
                                <input id="project_create_syllabus" name="project_create_syllabus" type="text" class="form-control" value="http://syllabus.link">
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-9">
                            </div>
                            <div class="col-2 text-center">
                                <button id="project_create_btn" class="btn btn-primary">Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

    return addProjectElement;
}

function listenProjectCreateImg() {
    let createImage = document.getElementById('project_create_image');
    let createModel = document.getElementById('project_create_modal');

    let myModal = new bootstrap.Modal(createModel);
    createImage.addEventListener('click', function () {
        myModal.show();
    });
}

function listenProjectCreateBtn(id) {
    let createBtn = document.getElementById('project_create_btn');
    if (createBtn) {
        createBtn.addEventListener('click', async function () {
            let title = document.getElementById('project_create_name').value.trim();
            let link = document.getElementById('project_create_syllabus').value.trim();

            fetch("/project/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: id,
                    title: title,
                    link: link
                })
            })
                .then(function (response) {
                    if(response.status===201){
                        alert("Create Project Successful!")
                    }
                    window.location.href = "/protrack/dashboard/instr/" + id;
                })
                .catch(error => {
                    console.error('Error: ', error);
                });
        });
    } else {
        console.error('The project create button was not found.');
    }
}