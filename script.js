//Targeting the form element
const form = document.getElementById("form");
//Targeting the email to check if it's valid
const email = document.getElementById("email");

// We want to do something when we submit
// The form will be submitted when we click the button
// e.preventDefault() prevents default i.e. prevents refreshing the page
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailVal = email.Value;

  // if the submitted value is not a valid email, add a class of error to form

  if (!validateEmail(emailVal)) {
    form.classList.add("error");
  } else {
    form.classList.remove("error");
  }
});
// valid email regex taken from stackoverflow
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
