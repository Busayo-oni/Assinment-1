function togglePasswordVisibility() {
  var passwordField = document.getElementById("password");
  var eyeIcon = document.getElementById("eye-icon");

  if (passwordField.type === "password") {
      passwordField.type = "text";
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
  } else {
      passwordField.type = "password";
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
  }
}
// Get the button element
const registerButton = document.getElementById('registerButton');

// Add a click event listener to the button
registerButton.addEventListener('click', function() {
    // Functionality when the button is clicked
    alert('Registration completed!');
    // You can replace the alert with any desired action or function
});
