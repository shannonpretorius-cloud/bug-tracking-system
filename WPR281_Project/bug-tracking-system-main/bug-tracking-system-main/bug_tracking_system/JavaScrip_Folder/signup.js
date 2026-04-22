//SIGN UP LOGIC 
function addUser() {
    const name = document.getElementById('regName').value.trim();
    const surname = document.getElementById('regSurname').value.trim();
    const username = document.getElementById('regUser').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const pass = document.getElementById('regPass').value.trim();

    // Validation: Make sure all fields are filled out
    if (!name || !surname || !username || !email || !pass) {
        alert("All fields (Name, Surname, Username, Email, and Password) are required!");
        return;
    }

    const user = { 
        name, 
        surname, 
        username, 
        email, 
        password: pass, 
        // Generate a circular profile pic using UI-Avatars API
        pic: `https://ui-avatars.com/api/?name=${name}+${surname}&background=0d6efd&color=fff` 
    };
    
    // Save as the permanent registered user
    localStorage.setItem('registeredUser', JSON.stringify(user));

    // AUTO-LOGIN: Set this user as the active session immediately
    localStorage.setItem('sessionUser', JSON.stringify(user));

    alert("Account created successfully! Welcome to the Dashboard.");
    
    // Redirect straight to index.html
    window.location.href = 'index.html';
}