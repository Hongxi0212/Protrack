function listenStuDashboardNavA(id) {
    const dashboardA = document.getElementById('sidenav_dashboard_a');

    dashboardA.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = '/protrack/dashboard/stu/' + id;
    });
}

function listenStuProjectsNavA(id) {
    const projectsA = document.getElementById('sidenav_projects_a');

    projectsA.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = '/protrack/projects/stu/' + id;
    });
}

function listenInstrDashboardNavA(id){
    const dashboardA = document.getElementById('sidenav_dashboard_a');

    dashboardA.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = '/protrack/dashboard/instr/' + id;
    });
}

function listenInstrProjectsNavA(id){
    const projectsA = document.getElementById('sidenav_projects_a');

    projectsA.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = '/protrack/projects/instr/' + id;
    });
}

function listenLogoutNavA(id){
    const logoutA=document.getElementById('sidenav_logout_a');

    logoutA.addEventListener('click',function (event){
        window.location.href='/protrack/logout';
    })
}