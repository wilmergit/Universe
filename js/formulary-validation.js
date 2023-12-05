

function validateForm() {

  let USERNAME = document.getElementById('inputUsername').value;
  let EMAIL = document.getElementById('inputEmail').value;
  let PASSWORD = document.getElementById('inputPassword').value;

  if (USERNAME == "") {
    alert('Username required');
    return false;
  }

  if (EMAIL == "") {
    alert('Email required');
    return false;
  }
  else if (!email.includes("@")) {
    alert('Invalid email address');
    return false;
  }

  if (PASSWORD == "") {
    alert('Password required');
    return false;
  }

  return true;
}

document.addEventListener('DOMContentLoaded', function () {
  ReadData();
  }); 

function readData(){
  let USERS_LIST;
  if (localStorage.getItem('USERS_LIST') == null) {
    USERS_LIST = [];
  }
  else {
    USERS_LIST = JSON.parse(localStorage.getItem('USERS_LIST'));
  }

  var html = "";

  USERS_LIST.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>"+ element.email + "</td>"
    html += "<td>"+ element.username + "</td>"
    html += '<td><button onclick="deleteData('+ index +')" class="btn btn-danger">Eliminar</button> <button onclick="editData('+ index +')" class="btn btn-warning">Editar</button><td>';
    html += "</tr>"
  });

  document.getElementById('#tableData').innerHTML = html;
}

document.onload = readData(); 

function addData() {
  if (validateForm() == true) {
    let USERNAME = document.getElementById('inputUsername').value;
    let EMAIL = document.getElementById('inputEmail').value;

    let USERS_LIST;
    
    if (localStorage.getItem('USERS_LIST') == null) {
      USERS_LIST = [];
    }
    else {
      USERS_LIST = JSON.parse(localStorage.getItem('USERS_LIST'));
    }

    USERS_LIST.push({
      email: EMAIL,
      username: USERNAME
    });

    localStorage.setItem('USERS_LIST', JSON.stringify(USERS_LIST));
    
    readData();
    
    document.getElementById('inputEmail').value = "";
    document.getElementById('inputUsername').value = "";

  }
}
