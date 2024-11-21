const logMe = document.getElementById("signInButton");
const modal = document.getElementById("loginModal");
const submitButton = document.getElementById("submit");


// Show the login modal
function showLoginModal() {
    modal.classList.remove("hidden");
    modal.style.display = "block"; // Ensure it displays
}

// Hide the login modal
function closeLoginModal() {
    modal.classList.add("hidden");
    modal.style.display = "none";
}

// Automatically show the login modal on page load
window.onload = function () {
    showLoginModal();
};

// Event listener for "Sign In" button click
logMe.addEventListener("click", function (event) {
    event.preventDefault();
    showLoginModal();
});

// Event listener for the login form submission
document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();

    // Get user input
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username.trim() === "" || password.trim() === "") {
        alert("Please enter both username and password.");
    } else {
        // If both fields are filled, redirect to another page
        alert("Login successful")
        closeLoginModal();
    }
});

// Optional: Add functionality to close modal when clicking outside of it
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeLoginModal();
    }
});
