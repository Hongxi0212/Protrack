document.getElementById('login-btn').addEventListener('click', async function() {
    const userName = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    event.preventDefault();

    let canLogin = userName && password;

    if (canLogin) {
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: userName,
                encrypted: password
            })
        })
            .then(function (response) {
                alert(response.status);
                window.location.href = "/protrack/dashboard/stu"
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
});