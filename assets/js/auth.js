function protectPage(requiredRole) {

    const auth = localStorage.getItem("auth");
    const role = localStorage.getItem("role");

    if (auth !== "1" || role !== requiredRole) {
        window.location.replace("index.html");
    }

}