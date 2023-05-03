function main()  {
  //buttons
  const signInButtons = document.querySelectorAll(".signin-button");
  const registerButtons = document.querySelectorAll(".register-button");
  const forgotButtons = document.querySelectorAll(".forgot-button");
  const heroButtons = document.querySelectorAll(".hero-button");

  //sections
  const heroSection = document.querySelector(".hero-section");
  const signInSection = document.querySelector(".signin-section");
  const registerSection = document.querySelector(".register-section");
  const forgotSection = document.querySelector(".forgot-section");

  //forms
  const signInForm = document.querySelector("#signInForm");
  const registerForm = document.querySelector("#registerForm");

  // error divs
  const loginError = document.querySelector(".loginError");
  const registerError = document.querySelector(".registerError");

  // login function
async function handleLoginSubmit(event) {
  event.preventDefault();
  const reqBody = {
    email: event.target.querySelector("input[name='email]").value,
    password: event.target.querySelector("input[name='password]").value,
  };
  try {
    const res = await fetch("/api/user/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });
    const data = await res.json();
    if (data.success === true) {
      console.log(data.user);
      alert("Login successful!");
      signInForm.reset();
    }else {
      loginError.innerText = data.message || "something went wrong!";
    }
  } catch (error) {
    console.error(error);
    loginError.innerText = "Something went wrong!";
  }
}
//register function
async function handleRegisterSubmit(event) {
  event.preventDefault();
  const reqBody = {
    email: event.target.querySelector("input[name='email'").value,
    password: event.target.querySelector("input[name='password'").value,
    firstName: event.target.querySelector("input[name='firstName']").value,
    lastName: event.target.querySelector("input[name='lastname']").value,
    phone: event.target.querySelector("input[name='phone']").value,
  };
  try {
    const res = await fetch("/api/users/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });
    const data = await res.json();
    if (data.success === true) {
      console.log(data.user);
      alert("registration successful!");
      registrationForm.reset();
    } else {
      registerError.innerText = data.message || " Something went wrong!";
    }
  } catch (error) {
    console.log(error);
    registerError.innerText = "Something went wrong";
  }
}

registerForm.addEventListener("submit", handleRegisterSubmit);
signInForm.addEventListener("submit", handleLoginSubmit);

//remove the 'hidden' class from the element
const showSection = (container) => {
  container.classList.remove("hidden");
};

//adds the 'hidden' class to the element
const hideSection = (container) => {
  container.classList.add("hidden");
};

//check if the buttons exist and then loop through all of the buttons
//add an event listener to hide/show sections to each button

signInButtons.forEach((e) => {
  e.addEventListener("click", () => {
    hideSection(heroSection);
    hideSection(registerSection);
    hideSection(forgotSection);
    showSection(signInSection);
  });
});

registerButtons &&
  registerButtons.forEach((s) => {
    e.addEventListener("click", () => {
      hideSection(heroSection);
      hideSection(signInSection);
      hideSection(forgotSection);
      showSection(registerSection);
    });
  });

  forgotButtons &&
    forgotButtons.forEach ((e) => {
      e.addEventListener("click", () => {
        hideSection(heroSection);
        hideSection(signInSection);
        hideSection(registerSection);
        showSection(forgotSection);
      });
    });

    heroButtons &&
    heroButtons.forEach((e) => {
      e.addEventListener("click", () => {
        hideSection(signInSection);
        hideSection(registerSection);
        hideSection(forgotSection);
        showSection(heroSection);
      });
    });
  }

  window.addEventListener("DOMContentLoaded", main);



    
  