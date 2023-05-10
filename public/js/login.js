// Login click logic
const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  // If email and password are provided, make call to api/user/login route
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

// Signup click logic
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  // If username, email, and password are provided, make call to api/users route
  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    // route to homepage if sign up is successful
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};
// show the login card and hide other cards 
function showLoginCard() {
  document.querySelector(".login-card").style.display = "block";
  document.querySelector(".hero-section").style.display = "none";
  document.querySelector(".signup-card").style.display = "none";
}

function showSignUpCard() {
  document.querySelector(".login-card").style.display = "none";
  document.querySelector(".hero-section").style.display = "none";
  document.querySelector(".signup-card").style.display = "block";
}
// Set event listeners for Login and Signup buttons
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

// add event listeners for the auth buttons on the homepage 
//to show/hide the cards 
document.querySelectorAll(".login-btn").forEach(btn => btn.addEventListener("click", showLoginCard));
document.querySelectorAll(".signup-btn").forEach(btn => btn.addEventListener("click", showSignUpCard));
