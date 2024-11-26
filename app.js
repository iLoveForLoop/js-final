const alertPop = document.getElementById("alert");

let usersList = JSON.parse(localStorage.getItem("users")) || [];

// Function to store users in localStorage
const storeToStorage = () => {
  localStorage.setItem("users", JSON.stringify(usersList));
};

// Function to display alert messages

// Store logged-in user
const storeLoggedInUser = (username) => {
  localStorage.setItem("loggedInUser", username);
};

// Get logged-in user
const getLoggedInUser = () => {
  return localStorage.getItem("loggedInUser");
};

// Event listener for login and signup
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const errorMessage = document.getElementById("error-message");

      try {
        if (username === "" || password === "") {
          throw new Error("Please fill in both fields.");
        }

        const user = usersList.find(
          (data) => data.username === username && data.password === password
        );

        if (user) {
          storeLoggedInUser(username); // Save the logged-in user
          alert("alert-success", "Log in successful.");
          document.getElementById("username").value = "";
          document.getElementById("password").value = "";
          alert("log in successful");
          window.location.href = "home.html";
        } else {
          alert("alert-danger", "Invalid username or password.");
        }
      } catch (error) {
        alert("alert-danger", error.message);
      }
    });
  }

  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const sUsername = document.getElementById("s-username").value.trim();
      const sPassword = document.getElementById("s-password").value.trim();
      const csPassword = document.getElementById("cs-password").value.trim();
      let message = "Account created successfully.";

      const checker = () => {
        if (sPassword !== csPassword) {
          message = "Password doesn't match.";
          return false;
        } else if (usersList.some((obj) => obj.username === sUsername)) {
          message = "Username already exists!";
          return false;
        }

        return true;
      };

      if (checker()) {
        let newUser = { username: sUsername, password: sPassword };
        usersList.push(newUser);
        storeToStorage();
        alert("alert-success", message);
        document.getElementById("s-username").value = "";
        document.getElementById("s-password").value = "";
        document.getElementById("cs-password").value = "";
        window.location.href = "login.html";
      } else {
        alert("alert-danger", message);
      }
    });
  }
});
