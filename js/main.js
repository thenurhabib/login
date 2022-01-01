var objPeople = [
    {
        username: "habib!user",
        password: "nurhabib!password"
    }

]

function getUserInfo() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    for (var i = 0; i < objPeople.length; i++) {
        if (username == objPeople[i].username && password == objPeople[i].password) {
            alert("Congratulation, You're Logged in.");
            return
        }
    }
    alert("Incorrect username or password");
}