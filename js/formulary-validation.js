

function validateForm(event) {

  let username = document.getElementById('input-username').value;
  let email = document.getElementById('input-email').value;
  let password = document.getElementById('input-password').value;

  if (username == "") {
    event.preventDefault();
    document.getElementById("error-username-required").style.display = "block";
  }
  else{
    document.getElementById("error-username-required").style.display = "none";
  }

  if (email == "") {
    event.preventDefault();
    document.getElementById("error-email-required").style.display = "block";
  }
  else{
    document.getElementById("error-email-required").style.display = "none";
  }

  if (password == "") {
    event.preventDefault();
    document.getElementById("error-password-required").style.display = "block";
  }else{
    document.getElementById("error-password-required").style.display = "none";
  }

  return true;
}



function readData() {
  let userList;
  if (localStorage.getItem('userList') == null) {
    userList = [];
  }
  else {
    userList = JSON.parse(localStorage.getItem('userList'));
  }

  let html = "";

  userList.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.email + "</td>";
    html += "<td>" + element.username + "</td>";
    html += '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Eliminar</button> <button onclick="editData(' + index + ')" class="btn btn-warning">Editar</button><td>';
    html += "</tr>";
  });

  document.getElementById('table-data').innerHTML = html;
}

document.onload = readData();

function addData() {
  if (validateForm() == true) {
    let username = document.getElementById('input-username').value;
    let email = document.getElementById('input-email').value;

    let userList;

    if (localStorage.getItem('userList') == null) {
      userList = [];
    }
    else {
      userList = JSON.parse(localStorage.getItem('userList'));
    }

    userList.push({
      email: email,
      username: username
    });

    localStorage.setItem('userList', JSON.stringify(userList));

    readData();

    document.getElementById('input-email').value = "";
    document.getElementById('input-username').value = "";

  }
}

function deleteData(index) {
  let userList;

  if (localStorage.getItem('userList') == null) {
    userList = [];
  } else {
    userList = JSON.parse(localStorage.getItem('userList'));
  }

  userList.splice(index, 1);
  localStorage.setItem('userList', JSON.stringify(userList));

  readData();
}

function editData(index) {
  document.getElementById('btn-add').style.display = 'none';
  document.getElementById('btn-update').style.display = 'block';

  let userList;

  if (localStorage.getItem('userList') == null) {
    userList = [];
  }
  else {
    userList = JSON.parse(localStorage.getItem('userList'));
  }

  document.getElementById('input-email').value = userList[index].email;
  document.getElementById('input-username').value = userList[index].username;

  document.querySelector('#btn-update').onclick = function () {
    if (validateForm() == true) {
      userList[index].email = document.getElementById('input-email').value;
      userList[index].username = document.getElementById('input-username').value;

      localStorage.setItem('userList', JSON.stringify(userList));
      readData();

      document.getElementById('input-email').value = "";
      document.getElementById('input-username').value = "";

      document.getElementById('btn-add').style.display = 'block';
      document.getElementById('btn-update').style.display = 'none';
    }
  }
}

