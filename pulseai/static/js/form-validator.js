function validate(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get form fields
    let fName = document.querySelector('#f_name').value;
    let lName = document.querySelector('#l_name').value;
    let uName = document.querySelector('#u_name').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let password2 = document.querySelector('#password2').value;

    // Error labels
    let fNameError = document.querySelector('#f_nameError');
    let lNameError = document.querySelector('#l_nameError');
    let uNameError = document.querySelector('#u_nameError');
    let emailError = document.querySelector('#emailError');
    let passwordError = document.querySelector('#passwordError');
    let password2Error = document.querySelector('#password2Error');

    // Reset error messages
    fNameError.innerHTML = "";
    lNameError.innerHTML = "";
    uNameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    password2Error.innerHTML = "";

    let error = false;

    // Validate first name
    if (fName === "" || fName === null) {
        fNameError.innerHTML = "Please enter your first name";
        document.querySelector('#f_name').style.border = "1px solid red";
        error = true;
    } else {
        document.querySelector('#f_name').style.border = "1px solid black";
    }

    // Validate last name
    if (lName === "" || lName === null) {
        lNameError.innerHTML = "Please enter your last name";
        document.querySelector('#l_name').style.border = "1px solid red";
        error = true;
    } else {
        document.querySelector('#l_name').style.border = "1px solid black";
    }

    // Validate username
    if (uName === "" || uName === null) {
        uNameError.innerHTML = "Please enter your username";
        document.querySelector('#u_name').style.border = "1px solid red";
        error = true;
    } else {
        document.querySelector('#u_name').style.border = "1px solid black";
    }

    // Validate email
    let emailPattern = /^[a-z]+[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (email === "" || email === null) {
        emailError.innerHTML = "Please enter your email";
        document.querySelector('#email').style.border = "1px solid red";
        error = true;
    } else if (!email.match(emailPattern)) {
        emailError.innerHTML = "Please enter a valid email";
        document.querySelector('#email').style.border = "1px solid red";
        error = true;
    } else {
        document.querySelector('#email').style.border = "1px solid black";
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

    // Validate confirm password
    if (password2 === "" || password2 === null) {
        password2Error.innerHTML = "Confirm Password is required";
        document.querySelector('#password2').style.border = "1px solid red";
        error = true;
    } else if (password !== password2) {
        password2Error.innerHTML = "Password and Confirm Password do not match";
        document.querySelector('#password2').style.border = "1px solid red";
        error = true;
    } else {
        document.querySelector('#password2').style.border = "1px solid black";
    }

    // If no errors, submit the form
    if (!error) {
        event.target.submit();
    }
}

// Attach validate function to form submit event
document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", validate);
});
