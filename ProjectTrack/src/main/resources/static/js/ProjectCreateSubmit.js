document.getElementById('project_create_btn').addEventListener('click', async function () {
    let title = document.getElementById("create_project_title").value.trim();
    let point = document.getElementById("create_project_points").value.trim();
    let outcome = document.getElementById("create_project_outcome").value.trim();
    let earned = document.getElementById("create_project_earned").value.trim();
    let description = document.getElementById("create_project_description").value.trim();
    let mtime = document.getElementById("create_project_mtime").value.trim();
    let mplace = document.getElementById("create_project_mplace").value.trim();
    event.preventDefault();

    fetch("/project/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title:title,
            point:point,
            outcome:outcome,
            earned:earned,
            description:description,
            mtime:mtime,
            mplace:mplace
        })
    })
        .then(function (response) {
            alert(response.status);
            window.location.href = "/protrack/dashboard/prof"
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
