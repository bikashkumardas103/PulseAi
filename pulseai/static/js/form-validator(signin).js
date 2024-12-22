function validate1(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get form fields
    let uName = document.querySelector('#u_name').value;
    let password = document.querySelector('#password').value;

    // Error labels
    let uNameError = document.querySelector('#u_nameError');
    let passwordError = document.querySelector('#passwordError');

    // Reset error messages
    uNameError.innerHTML = "";
    passwordError.innerHTML = "";


    let error = false;

    // Validate username
    if (uName === "" || uName === null) {
        uNameError.innerHTML = "Please enter your username";
        document.querySelector('#u_name').style.border = "1px solid red";
        error = true;
    } else {
        document.querySelector('#u_name').style.border = "1px solid black";
    }
// Validate password
    let validPassword = true;
    let passError = "";
    if (!password.match(/[a-z]/)) {
        passError += "Password should contain at least one lowercase character<br>";
        validPassword = false;
    }
    if (!password.match(/[A-Z]/)) {
        passError += "Password should contain at least one uppercase character<br>";
        validPassword = false;
    }
    if (!password.match(/[0-9]/)) {
        passError += "Password should contain at least one number<br>";
        validPassword = false;
    }
    if (!password.match(/[!@#$%^&*_()]/)) {
        passError += "Password should contain at least one special character<br>";
        validPassword = false;
    }
    if (password.length < 8 || password.length > 16) {
        passError += "Password must be 8-16 characters long<br>";
        validPassword = false;
    }
    if (!validPassword) {
        passwordError.innerHTML = passError;
        document.querySelector('#password').style.border = "1px solid red";
        error = true;
    } else {
        document.querySelector('#password').style.border = "1px solid black";
    }

    // If no errors, submit the form
    if (!error) {
        event.target.submit();
    }
}

// Attach validate function to form submit event
document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", validate1);
});
