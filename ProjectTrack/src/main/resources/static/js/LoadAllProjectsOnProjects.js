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

            const addProjectElement=document.createElement('div');
            addProjectElement.className='col-4';
            addProjectElement.innerHTML=`
            <div class="card info-card revenue-card">
                <div class="card-body">
                    <h5 class="card-title">New Project</h5>
                    <a href="/protrack/project/create">
                        <img src="/images/plus.png" width="100px" height="100px">
                    </a>
                </div>
            </div>
            `;

            container.appendChild(addProjectElement);
        })
        .catch(error => console.error('Error:', error));
});
