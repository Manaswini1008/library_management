// script.js

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (localStorage.getItem(email)) {
        alert('Email already registered.');
    } else {
        const user = {
            username: username,
            email: email,
            password: password
        };
        localStorage.setItem(email, JSON.stringify(user));
        alert('Registration successful. You can now login.');
        window.location.href = 'login.html';
    }
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
        alert('Login successful.');
        // Redirect to the library management dashboard or home page
        window.location.href = 'home.html';
    } else {
        alert('Invalid email or password.');
    }
});
