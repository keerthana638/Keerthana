const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const confirmPasswordValue = confirmPasswordInput.value.trim();

  // Validate Name
  if (nameValue === "") {
    setError(nameInput, "Name cannot be blank");
  } else if (nameValue.length < 3) {
    setError(nameInput, "Name must be at least 3 characters");
  } else {
    setSuccess(nameInput);
  }

  // Validate Email
  if (emailValue === "") {
    setError(emailInput, "Email cannot be blank");
  } else if (!isValidEmail(emailValue)) {
    setError(emailInput, "Enter a valid email");
  } else {
    setSuccess(emailInput);
  }

  // Validate Password
  if (passwordValue === "") {
    setError(passwordInput, "Password cannot be blank");
  } else if (passwordValue.length < 6) {
    setError(passwordInput, "Password must be at least 6 characters");
  } else {
    setSuccess(passwordInput);
  }

  // Validate Confirm Password
  if (confirmPasswordValue === "") {
    setError(confirmPasswordInput, "Please confirm your password");
  } else if (confirmPasswordValue !== passwordValue) {
    setError(confirmPasswordInput, "Passwords do not match");
  } else {
    setSuccess(confirmPasswordInput);
  }
}

function setError(input, message) {
  const inputGroup = input.parentElement;
  const small = inputGroup.querySelector("small");
  small.innerText = message;
  inputGroup.className = "input-group error";
}

function setSuccess(input) {
  const inputGroup = input.parentElement;
  inputGroup.className = "input-group success";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
