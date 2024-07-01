document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous error messages
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(function (element) {
      element.remove();
    });

    // Validate form fields
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const prodi = document.getElementById("prodi").value.trim();
    const alamat = document.getElementById("alamat").value.trim();
    const password = document.getElementById("password").value.trim();
    const repeatPassword = document
      .getElementById("repeat_password")
      .value.trim();

    let isValid = true;

    if (username === "") {
      displayError("username", "Username is required");
      isValid = false;
    }

    if (email === "") {
      displayError("email", "Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      displayError("email", "Enter a valid email");
      isValid = false;
    }

    if (prodi === "") {
      displayError("prodi", "Prodi is required");
      isValid = false;
    }

    if (alamat === "") {
      displayError("alamat", "Alamat is required");
      isValid = false;
    }

    if (password === "") {
      displayError("password", "Password is required");
      isValid = false;
    }

    if (repeatPassword === "") {
      displayError("repeat_password", "Repeat Password is required");
      isValid = false;
    } else if (password !== repeatPassword) {
      displayError("repeat_password", "Passwords do not match");
      isValid = false;
    }

    if (isValid) {
      // Handle form submission
      console.log("Form submitted successfully");
      // You can add your form submission code here, like sending data to a server
    }
  });

  function displayError(elementId, message) {
    const element = document.getElementById(elementId);
    const errorElement = document.createElement("div");
    errorElement.className = "error";
    errorElement.innerText = message;
    element.parentNode.insertBefore(errorElement, element.nextSibling);
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
