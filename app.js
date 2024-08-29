// Function to register a new user
function register(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username]) {
        return 'User already exists';
    }
    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
    return 'User registered successfully';
}

// Function to handle login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username] && users[username] === password) {
        localStorage.setItem('loggedInUser', username);
        messageElement.textContent = 'Login successful!';
        messageElement.style.color = 'green';
        setTimeout(() => {
            window.location.href = 'welcome.html'; // Redirect to another page
        }, 1000);
    } else {
        messageElement.textContent = 'Invalid username or password';
        messageElement.style.color = 'red';
    }
}

// Function to handle logout
function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html'; // Redirect to login page
}

// Check if user is already logged in
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('loggedInUser')) {
        window.location.href = 'welcome.html'; // Redirect to another page if already logged in
    }
});