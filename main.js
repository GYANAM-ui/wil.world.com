function addUser() {
    username = document.getElementById("name").value;
    password = document.getElementById("password").value;

    if (username, password == "") {
        document.getElementById("name").placeholder = "Enter a valid name";
        document.getElementById("ername").innerHTML = "Enter a valid name it is required";
        document.getElementById("password").placeholder = "Enter a valid password";
        document.getElementById("erpass").innerHTML = "Enter a valid paswword it is required";
        console.error("User name is not defined");
    } else {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        window.location = "wil.html";
    }
}

function addCall() {
    location.href = "https://cvugl0ctbjpcs2zz5ji33a-on.drv.tw/Private%20Calls/";
}

function word() {
    location.href = "https://jynyhy9vu5r8xz5zy0utww-on.drv.tw/project_C89_C90_C91_C92.com/game_login.html";
}