document.addEventListener('DOMContentLoaded', function () {
    let id = window.location.pathname.split('/')[3];
    let title = window.location.pathname.split('/')[4];

    listenStuDashboardNavA(id);
    listenStuProjectsNavA(id);
    listenLogoutNavA(id);

    fetch('/project/' + encodeURIComponent(title) + '/view')
        .then(response => {
            return response.json();
        })
        .then(respObject => {
            const project = respObject.project;
            console.log(project);

            const titleContainer = document.getElementById('title_container');

            titleContainer.insertBefore(generateProjectTitle(project), titleContainer.firstChild);

            const tabContainer = document.getElementById('tab_container');

            tabContainer.appendChild(generateValidateTab(project));

            insertPhaseDate(project);
            insertPlanDeliverableTable(project);
            insertPointsChart(project);

            listenSaveValidateBtn();
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

function generateValidateTab(project) {
    let phases = project.phases;
    phases.sort(function (a, b) {
        return -(a.number - b.number);
    });

    let validateTab = document.createElement('div');
    validateTab.className = 'tab-pane fade show active';
    validateTab.id = 'validate_tab';
    validateTab.innerHTML = `
    <form>
        <div class="row mb-3">
            <label for="projectTitle_validation" class="col-3 col-form-label">Project
                Title</label>
            <div class="col-9">
                <input name="projectTitle_validation" type="text" class="form-control"
                       id="projectTitle_validation" value=${project.title} disabled>
            </div>
        </div>
    
        <div class="row mb-3">
            <label for="evaludationDate" class="col-3 col-form-label">Evaluation Date:</label>
            <div class="col-9">
                <input name="evaludationDate" type="text" class="form-control"
                       id="evaludationDate" value=${phases[phases.length - 1].due} disabled>
            </div>
        </div>
    
        <div class="row mb-3">
            <label for="phaseNumber" class="col-3 col-form-label">Phase Number:</label>
            <div class="col-1">
                <input name="phaseNumber" type="text" class="form-control"
                       id="phaseNumber" value=${phases.length} disabled>
            </div>
            <div class="col-2"></div>
            <div id="phaseDate_div" class="col-6">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="all" checked>
                    <label class="form-check-label" for="all">All</label>
                </div>
<!--            Dynamic Generated Phases Date-->
            </div>
        </div>
    
        <div class="row mb-3">
            <label class="col-2 col-form-label">Deliverables</label>
            <div class="col-10">
                <table class="table table-bordered">
                    <thead id="deliverables_thead">
                    <tr>
                        <th style="width:40%;text-align: center;">Item</th>
                        <th style="width:40%;text-align: center;">Mode</th>
                        <th style="width:20%;text-align: center;">Points</th>
                    </tr>
                    </thead>
    
                    <tbody id="deliverables_tbody">
                    <!--Dynamic Load Deliverables Info-->
                    </tbody>
                </table>
            </div>
        </div>
        
        <div class="row mb-3">
            <label class="col-2 col-form-label">Chart</label>
            <canvas id="chart_canvas" class="col-10"></canvas>
        </div>
        
        <div class="row mb-3">
            <label for="rubric" class="col-md-2 col-form-label">Rubric</label>
            <div class="col-md-10">
                <textarea id="rubric_textarea" name="rubric" class="form-control" style="height: 100px">${project.rubric}</textarea>
            </div>
        </div>
    
        <div class="row mb-3">
            <label class="col-2 col-form-label">Strengths</label>
            <div class="col-10">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th style="width:50%;text-align: center;">Student</th>
                        <th style="width:50%;text-align: center;">Instructor</th>
                    </tr>
                    </thead>
    
                    <tbody>
                    <tr>
                        <td><textarea id="strength_stu_textarea" class="form-control">${project.strengthStu}</textarea></td>
                        <td><textarea id="strength_instr_textarea" class="form-control" disabled>${project.strengthInstr}</textarea></td>
                    </tr>
                    </tbody>
                </table>
            </div>
    
            <label class="col-2 col-form-label">Weaknesses</label>
            <div class="col-10"> 
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th style="width:50%;text-align: center;">Student</th>
                        <th style="width:50%;text-align: center;">Instructor</th>
                    </tr>
                    </thead>
    
                    <tbody>
                    <tr>
                        <td><textarea id="weakness_stu_textarea" class="form-control">${project.weaknessStu}</textarea></td>
                        <td><textarea id="weakness_instr_textarea" class="form-control" disabled>${project.weaknessInstr}</textarea></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <label class="col-2 col-form-label">Errors/bugs</label>
            <div class="col-10"> 
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th style="width:50%;text-align: center;">Student</th>
                        <th style="width:50%;text-align: center;">Instructor</th>
                    </tr>
                    </thead>
    
                    <tbody>
                    <tr>
                        <td><textarea id="error_stu_textarea" class="form-control">${project.errorStu}</textarea></td>
                        <td><textarea id="error_instr_textarea" class="form-control" disabled>${project.errorInstr}</textarea></td>
                    </tr>
                    </tbody>
                </table>
            </div>
    
            <label class="col-2 col-form-label">Comments</label>
            <div class="col-10"> 
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th style="width:50%;text-align: center;">Student</th>
                        <th style="width:50%;text-align: center;">Instructor</th>
                    </tr>
                    </thead>
    
                    <tbody>
                    <tr>
                        <td><textarea id="comment_stu_textarea" class="form-control"> ${project.commentStu}</textarea></td>
                        <td><textarea id="comment_instr_textarea" class="form-control" disabled>${project.commentInstr}</textarea></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </form>
    <div class="text-center">
        <button id="validate_save_btn" class="btn btn-primary">Save</button>
    </div>
    `;

    return validateTab;
}

function insertPhaseDate(project) {
    const phaseDateContainer = document.getElementById("phaseDate_div");
    let phases = project.phases;
    phases.forEach(phase => {
        let newPhaseDate = document.createElement('div');
        newPhaseDate.className = "form-check";
        newPhaseDate.innerHTML = `
        <input class="form-check-input" type="checkbox" id="phase1_input">
        <label class="form-check-label" for="phase1">${phase.due}</label>
        `

        if (phaseDateContainer.children.length === 1) {
            phaseDateContainer.appendChild(newPhaseDate);
        } else {
            phaseDateContainer.insertBefore(newPhaseDate, phaseDateContainer.firstChild.nextSibling.nextSibling);
        }
    })
}

function insertPlanDeliverableTable(project) {
    let phases = project.phases
    let members = project.members;

    let dlvrbsCount = 0;

    members.forEach(member => {
        dlvrbsCount += member.deliverables.length;
    });

    const phaseTbody = document.getElementById("phases_tbody");
    const tasksTbody = document.querySelector(".tasks_tbody");

    if (dlvrbsCount === 0) {
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
                <td><input type="text" class="form-control" placeholder="Point" value=${deliverable.point} disabled></td>
                `;

                deliverableTbody.appendChild(deliverableRow);
            });
        });

    }
}

function insertPointsChart(project) {
    const phases = project.phases;
    let phasesLabels = [];
    switch (phases.length) {
        case 1:
            phasesLabels = ['Current', '1st', 'Overall'];
            break;
        case 2:
            phasesLabels = ['Current', '1st', '2nd', 'Overall'];
            break;
        case 3:
            phasesLabels = ['Current', '1st', '2nd', '3rd', 'Overall'];
            break;
        case 4:
            phasesLabels = ['Current', '1st', '2nd', '3rd', '4th', 'Overall'];
            break;
        case 5:
            phasesLabels = ['Current', '1st', '2nd', '3rd', '4th', '5th', 'Overall'];
            break;
    }

    let phaseData = [];
    //计算当前已获得和总览分数
    let currentTotalPoint = 0;
    let currentMaxPoint = 0;
    let overallTotalPoint = 0;
    let overallMaxPoint = 0;
    phases.forEach(phase => {
        phase.deliverables.forEach(deliverable => {
            if (!deliverable.point === null) {
                currentTotalPoint += deliverable.point;
                currentMaxPoint++;
                overallTotalPoint += deliverable.point;
            }
            overallMaxPoint++;
        })
    });
    currentMaxPoint *= 10;
    phaseData.push(currentTotalPoint / currentMaxPoint * 100);

    //计算各个阶段分数
    phases.forEach(phase => {
        let phaseTotalPoint = 0;
        let phaseMaxPoint = 0;
        phase.deliverables.forEach(deliverable => {
            phaseTotalPoint += deliverable.point === null ? deliverable.point : 0;
            currentMaxPoint++;
        })
        phaseMaxPoint *= 10;
        phaseData.push(phaseTotalPoint / phaseMaxPoint * 100);
    });

    phaseData.push(overallTotalPoint / overallMaxPoint * 100);

    let phaseBackgroundColor = [];
    let phaseBorderColor = [];
    phaseData.forEach(data => {
        if (data < 60) {
            phaseBackgroundColor.push('#EA8993');
            phaseBorderColor.push('#DC3545')
        } else {
            phaseBackgroundColor.push('#72AAFE');
            phaseBorderColor.push('#0D6EFD');
        }
    });

    const ctx = document.getElementById('chart_canvas').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: phasesLabels,
            datasets: [{
                label: 'Points of Phases',
                data: phaseData,
                backgroundColor: phaseBackgroundColor,
                borderColor: phaseBorderColor,
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function listenSaveValidateBtn() {
    const saveBtn = document.getElementById("validate_save_btn");

    saveBtn.addEventListener('click', function () {
        let rubric = document.getElementById("rubric_textarea").value;
        let strengthStu = document.getElementById("strength_stu_textarea").value;
        //let strengthInstr = document.getElementById("strength_instr_textarea").value;
        let weaknessStu = document.getElementById("weakness_stu_textarea").value;
        //let weaknessInstr = document.getElementById("weakness_instr_textarea").value;
        let errorStu = document.getElementById("error_stu_textarea").value;
        //let errorInstr = document.getElementById("error_instr_textarea").value;
        let commentStu = document.getElementById("comment_stu_textarea").value;
        //let commentInstr = document.getElementById("comment_instr_textarea").value;

        let role = "Student";
        let info = {
            role,
            rubric,
            strengthStu,
            weaknessStu,
            errorStu,
            commentStu,
        }
        let title = window.location.pathname.split('/')[4];

        fetch("/project/" + encodeURIComponent(title) + "/validate/update", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        })
            .then(function (response) {
                alert(response.status);
                window.location.reload();
            })
            .catch(error => {
                console.error("Fetch Error:", error);
            });
    })
}