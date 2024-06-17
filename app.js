// app.js
function login(event) {
    event.preventDefault();
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Validación simple para el ejemplo
    if (username === 'user' && password === 'password') {
        // Establecer una cookie de sesión
        document.cookie = "loggedIn=true; path=/";
        alert("Inicio de sesión exitoso");
        window.location.href = "/iptv/";
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}

function checkLogin() {
    const cookies = document.cookie.split(';');
    let loggedIn = false;
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie === 'loggedIn=true') {
            loggedIn = true;
            break;
        }
    }
    if (!loggedIn) {
        window.location.href = "/login.html";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', login);
    }
});
