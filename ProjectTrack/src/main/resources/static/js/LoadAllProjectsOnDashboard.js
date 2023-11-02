document.addEventListener('DOMContentLoaded', (event) => {
    fetch('/project/find/all')
        .then(response => response.json())
        .then(projects => {
            const container = document.getElementById('projects-container');
            projects.forEach(project => {
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
        .catch(error => console.error('Error:', error));
});
