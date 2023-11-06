function listenSideDashboardNavA(id) {
    const dashboardA = document.getElementById('sidenav_dashboard_a');
    dashboardA.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = '/protrack/dashboard/stu/' + id;
    });
}

function listenSideProjectsNavA(id) {
    const projectsA = document.getElementById('sidenav_projects_a');
    projectsA.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = '/protrack/projects/stu/' + id;
    });
}
