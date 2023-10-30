document.getElementById('register-btn').addEventListener('click', async function () {
    event.preventDefault();

    // 获取表单数据
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;
    let timezone = document.getElementById("timezone").value;

    // 创建一个包含用户信息的 JavaScript 对象
    let user = {
        name: name,
        email: email,
        password: password,
        role: role,
        timezone: timezone
    };

    // 将用户信息发送到后端，你可以使用 AJAX 或 Fetch API 来发送 POST 请求

    // 以下是一个使用 Fetch API 发送 POST 请求的示例
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
