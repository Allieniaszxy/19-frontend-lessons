const form = document.getElementById("registration-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("click", function (e) {
  e.preventDefault();

  const isRequiredValid = checkRequired([
    username,
    email,
    password,
    confirmPassword,
  ]);

  let isFormValid = isRequiredValid;

  if (isFormValid) {
    const isUsernameValid = checkLength(username, 3, 15);
    const isEmailValid = checkEmail(email);
    const isPasswordValid = checkLength(password, 6, 25);
    const isConfirmPasswordValid = checkPasswordMatch(
      password,
      confirmPassword,
    );

    isFormValid =
      isConfirmPasswordValid &&
      isEmailValid &&
      isPasswordValid &&
      isUsernameValid;
  }

  if (isFormValid) {
    alert("Registration successful");
  }
});
