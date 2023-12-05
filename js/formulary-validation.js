window.preventDefault();

function validateUsersForm(event) {
  var FORM_APPLY = event.target;
  var USERNAME = FORM_APPLY["username"].value;
  var EMAIL = FORM_APPLY["email"].value;
  var PASSWORD = FORM_APPLY["pswd"].value;

  if (USERNAME == "") {
    alert("Username required");
    return false;
  }

  if (EMAIL == "") {
    alert("Email required");
    return false;
  }
  else if (!email.includes("@")) {
    alert("Invalid email address");
    return false;
  }

  if (PASSWORD == "") {
    alert("Password require");
    return false;
  }

  return true;
}

function showUsers() {

  var USERS_LIST;
  if (localStorage.getItem("username") == null) {
    USERS_LIST = [];
  }
  else {
    USERS_LIST = JSON.parse(localStorage.getItem("username"));
  }

  var html = "";

  USERS_LIST.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.username + "</td>";
    html += "<td>" + element.email + "</td>";
    html += "<td>" + element.pswd + "</td>";
    html += '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">DELETE</button><button onclick = "updateData(' + index + ')" class="btn btn-warning m-2">EDIT</button>';
    html += "</tr>";
  });

  document.querySelector("users-form").innerHTML = html;
}

document.onload = showUsers();



function addData() {
  if (validateUsersForm() == true) {
    var USERNAME = document.getElementById("username").value;

    var USERS_LIST;
    
    if (localStorage.getItem("username") == null) {
      USERS_LIST = [];
    }
    else {
      USERS_LIST = JSON.parse(localStorage.getItem("username"));
    }

    USERS_LIST.push({
      username: USERNAME,
    });

    localStorage.setItem("USERS_LIST", JSON.stringify(USERS_LIST));
    showUsers();
    document.getElementById("username").value = "";

  }
}
