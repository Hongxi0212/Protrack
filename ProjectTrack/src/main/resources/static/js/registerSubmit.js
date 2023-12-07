document.getElementById('register-btn').addEventListener('click', async function () {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword=document.getElementById("password-confirm").value;
    let role = document.getElementById("role").value;
    event.preventDefault();

    if(confirmPassword!==password){
        alert("Two Passwords Do Not Match!")
        return;
    }

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
            if(response.status===403){
                alert("Account With Email has Exited!");
            }
            else{
                window.location.href = "/protrack/login"
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
