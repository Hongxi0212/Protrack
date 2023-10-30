document.getElementById('register-btn').addEventListener('click', async function () {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;
    let timezone = document.getElementById("timezone").value;

    let user = {
        name: name,
        email: email,
        password: password,
        role: role,
        timezone: timezone
    };

    fetch("/trackuser/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(function (response) {
            alert(response.status);
            window.location.href = "/protrack/login"
        })
});
