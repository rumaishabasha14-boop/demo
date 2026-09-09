// Show / hide password

function togglePassword(inputId, button) {

    const passwordInput = document.getElementById(inputId);

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        button.textContent = "🙈";

    } else {

        passwordInput.type = "password";

        button.textContent = "👁";
    }
}


// Sign-up form

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;


    // Check passwords

    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        return;
    }


    alert("Account created successfully!");

    // Return to login page

    window.location.href = "login.html";

});