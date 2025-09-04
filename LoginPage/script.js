function store() {
    var data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        password: document.getElementById("password").value,
        address: document.getElementById("address").value
    };
    var sdata = JSON.stringify(data);
    localStorage.setItem("Data", sdata);
    window.location.replace("login.html");
}

function login() {
    var enteredEmail = document.getElementById("email").value.trim();
    var enteredPassword = document.getElementById("password").value.trim();

    var storedData = localStorage.getItem("Data");

    if (!storedData) {
        alert("No user found. Please register first.");
        return false;
    }

    var data = JSON.parse(storedData);

    if (enteredEmail === data.email && enteredPassword === data.password) {
        alert("Login successful!");
        window.location.replace("dashboard.html");
        return true;
    } else {
        alert("Invalid email or password.");
        return false;
    }
}

function logout() {
    localStorage.clear();
    alert("You have been logged out. Local Storage cleared.");
    window.location.replace("Login.html");
}