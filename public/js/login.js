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
  const registerForm = document.querySelector("#registerfrom");

  // error divs
  const loginError = document.querySelector(".loginError");
  const registerError = document.querySelector(".registerError");

async function handleLoginSubmit(event) {
  event.preventDefault();
  const reqBody = {
    email: event.target.querySelector("input[email]").value,
    password: event.target.querySelector("input[password]").value,
  };
  try {
    const res = await fetch("/api/user/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      }
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



    
  