document.getElementById('login-btn').addEventListener('click', async function() {
    const email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    event.preventDefault();

    let canLogin = email && password;

    if (canLogin) {
        fetch('/trackuser/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(function (response) {
                alert(response.status);
                if(response.ok){
                    window.location.href = "/protrack/dashboard/stu"
                }
                if(response.status===202){
                    window.location.href = "/protrack/dashboard/prof"
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
});