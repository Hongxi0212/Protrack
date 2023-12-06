document.getElementById('login-btn').addEventListener('click', async function () {
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
            .then(
                response => response.json()
            )
            .then(user => {
                console.log(user);
                if (user.message==="STUDENT") {
                    window.location.href = `/protrack/dashboard/stu/${user.uid}`
                }
                if (user.message==="INSTRUCTOR") {
                    window.location.href = `/protrack/dashboard/instr/${user.uid}`
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
});