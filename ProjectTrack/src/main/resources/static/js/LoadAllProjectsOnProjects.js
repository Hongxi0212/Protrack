document.addEventListener('DOMContentLoaded', (event) => {
    fetch('/project/find/all')
        .then(response => response.json())
        .then(projects => {
            const container = document.getElementById('projects-container');

            projects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.className = 'col-4';
                projectElement.innerHTML = `
                <div class="card info-card sales-card">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <img src="/images/sql.png" style="max-width: 100%; height: auto"/>
                        <div>
                            <ul class="nav" style="padding-top: 20px">
                                <li class="nav-item ms-3"><a href="/protrack/project/view">View</a></li>
                                <li class="nav-item ms-3"><a href="/protrack/project/edit">Edit</a></li>
                                <li class="nav-item ms-3"><a href="/protrack/project/view">Validate</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                `;

                container.appendChild(projectElement);
            });

            const addProjectElement = document.createElement('div');
            addProjectElement.className = 'col-4';
            addProjectElement.innerHTML = `
            <div class="card info-card revenue-card">
                <div class="card-body">
                    <h5 class="card-title">New Project</h5>
                    <img src="/images/plus.png" width="100px" height="100px" onclick="openCreateProjectModal()">
                </div>
            </div>
            
            
            <div class="modal fade" id="create_project_modal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal</h5>
                        </div>
                        <div class="modal-body">
                            <div class="row mb-3">
                                <label for="joinCode" class="col-3 col-form-label">Course Code</label>
                                <div class="col-9">
                                    <input name="joinCode" type="text" class="form-control" id="joinCode" value="CS360_JASAN">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-10">
                                </div>
                                <div class="col-2 text-center">
                                    <button type="submit" class="btn btn-primary">Join</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            `;
            container.appendChild(addProjectElement);
        })
        .catch(error => console.error('Error:', error));
});

function openCreateProjectModal() {
    $('create_project_modal').modal('show');
}