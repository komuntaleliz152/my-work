
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    alert(`Username: ${username}\nPassword: ${password}\nRemember Me: ${rememberMe}`);
});

