// ------------------------------
// Show / Hide Password
// ------------------------------

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.textContent = "🙈";
        togglePassword.setAttribute("aria-label", "Hide password");

    } else {

        passwordInput.type = "password";

        togglePassword.textContent = "👁";
        togglePassword.setAttribute("aria-label", "Show password");

    }

});


// ------------------------------
// Login Form
// ------------------------------

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {

        alert("Please enter your username and password.");

        return;
    }

    loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please enter your username and password.");
        return;
    }

    window.location.href = "dashboard.html";
});

    // Temporary login message
    // Replace this with your real login system later.

    alert("Login successful!");

});