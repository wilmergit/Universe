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

function showUsers() {
  const USERS_LIST = document.getElementById("users-list");

  USERS_LIST.innerHTML = "";

  for (let i = 0; i < users.length; i++) {
    USERS_LIST.innerHTML += `<li>${users[i].username}<button class="bt" onclick="deleteUser(${i})">DELETE</button></li>`;
    USERS_LIST.innerHTML += `<li>${users[i].username}<button class="bt" onclick="modifyUser(${i})">MODIFY</button></li>`;
  }
}

function modifyUser(userId) {
  USERNAME = userId.target.username.value;s
}

function deleteUser(userId) {
  users.splice(userId, 1);
  showUsers();
}

initialize();
