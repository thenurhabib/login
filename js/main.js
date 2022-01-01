var credentials = [
    {
        username: "habib!user",
        password: "nurhabib!password"
    }

]

function getUserInfo() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    for (var i = 0; i < credentials.length; i++) {
        if (username == credentials[i].username && password == credentials[i].password) {
            alert("Congratulation, You're Logged in.");
            return
        }
    }
    alert("Incorrect username or password");
}
