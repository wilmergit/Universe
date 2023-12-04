window.onload = initialize();

function initialize() {
  const FORM_APPLY = document.getElementById("users-form");
  FORM_APPLY.addEventListener("submit", validateUsersForm);
}

function validateUsersForm(event) {
  const FORM_APPLY = event.target;

  const USERNAME = FORM_APPLY["username"].value;

  if (!USERNAME || USERNAME == "") {
    event.preventDefault();
    console.log("* Este campo es obligatorio");
    document.getElementById("error-username-required").style.display = "block";
  } else {
    document.getElementById("error-username-required").style.display = "none";
  }

  const EMAIL = FORM_APPLY["email"].value;

  if (!EMAIL || EMAIL == "") {
    event.preventDefault();
    console.log("* Este campo es obligatorio");
    document.getElementById("error-email-required").style.display = "block";
  } else {
    document.getElementById("error-email-required").style.display = "none";
  }

  const PASSWORD = FORM_APPLY["pswd"].value;

  if (!PASSWORD || PASSWORD == "") {
    event.preventDefault();
    console.log("* Este campo es obligatorio");
    document.getElementById("error-password-required").style.display = "block";
  } else {
    document.getElementById("error-password-required").style.display = "none";
  }
}
