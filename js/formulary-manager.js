let users = [];


function initialize() {
  const USER_FORM = document.getElementById("users-form");
  USER_FORM.addEventListener("submit", addUser);
  showUsers;
}

function addUser(event) {
  event.preventDefault();

  const USERNAME = event.target.username.value;
  const EMAIL = event.target.email.value;
  const PASSWORD = event.target.pswd.value;

  if (USERNAME != "" && EMAIL != "" && PASSWORD != "") {
    users.push({
      username: USERNAME,
    });
    showUsers();
  } else {
    let users = [];
  }
}



initialize();
