document.getElementById('register-btn').addEventListener('click', async function () {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let role = document.getElementById("role").value.trim();
    event.preventDefault();

    let user = {
        name: name,
        email: email,
        password: password,
        role: role,
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
        .catch(error => {
            console.error('Error:', error);
        });
});
