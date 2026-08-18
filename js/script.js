document.addEventListener("DOMContentLoaded", function () {
  var emailField = document.getElementById("email");
  var emailWrapper = emailField.closest(".field");
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateEmail() {
    var value = emailField.value.trim();
    if (value.length === 0) {
      emailWrapper.classList.remove("invalid");
      return;
    }
    if (emailPattern.test(value)) {
      emailWrapper.classList.remove("invalid");
    } else {
      emailWrapper.classList.add("invalid");
    }
  }

  emailField.addEventListener("input", validateEmail);
  emailField.addEventListener("blur", validateEmail);

  var passwordField = document.getElementById("password");
  var toggleButton = document.getElementById("toggleVisibility");
  var eyeIcon = document.getElementById("eyeIcon");

  var eyeOpenPath =
    '<path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<circle cx="12" cy="12" r="3.2" stroke="currentColor" stroke-width="1.6"/>';

  var eyeClosedPath =
    '<path d="M3 3L21 21" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>' +
    '<path d="M10.6 5.2C11.05 5.1 11.52 5 12 5C19 5 23 12 23 12C22.5 12.9 21.6 14.2 20.3 15.4M6.7 6.7C3.7 8.5 1 12 1 12C1 12 5 19 12 19C13.7 19 15.2 18.6 16.4 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<path d="M9.9 10C9.35 10.55 9 11.24 9 12C9 13.66 10.34 15 12 15C12.76 15 13.45 14.65 14 14.1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>';

  toggleButton.addEventListener("click", function () {
    var isPassword = passwordField.type === "password";
    passwordField.type = isPassword ? "text" : "password";
    eyeIcon.innerHTML = isPassword ? eyeClosedPath : eyeOpenPath;
    toggleButton.setAttribute(
      "aria-label",
      isPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"
    );
  });

  var loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    validateEmail();
  });
});
