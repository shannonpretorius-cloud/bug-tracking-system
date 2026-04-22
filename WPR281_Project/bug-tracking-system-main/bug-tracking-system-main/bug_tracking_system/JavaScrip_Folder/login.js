//LOGIN LOGIC 
function handleSignIn() {
    const emailInput = document.getElementById('loginEmail').value.trim();
    const passInput = document.getElementById('loginPass').value.trim();
    const savedUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (savedUser && savedUser.email === emailInput && savedUser.password === passInput) {
        // Create active session upon successful login
        localStorage.setItem('sessionUser', JSON.stringify(savedUser));
        window.location.href = 'index.html';
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

//LOGOUT LOGIC
function logout() {
    localStorage.removeItem('sessionUser');
    window.location.href = 'login.html';
}
