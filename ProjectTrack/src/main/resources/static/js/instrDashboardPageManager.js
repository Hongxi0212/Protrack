document.addEventListener('DOMContentLoaded', function () {
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
                projectElement.className = 'col-6';
                projectElement.innerHTML = `
                <div class="card info-card sales-card">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <img src="/images/sql.png" style="max-width: 100%; height: auto"/>
                    </div>
                </div>
                `;

                container.appendChild(projectElement);
            });
        })
        .catch(error => {
            console.error('Fetch Error:', error);
        });
});
