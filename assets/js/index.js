function login(role, page) {

    localStorage.setItem("auth", "1");
    localStorage.setItem("role", role);
    localStorage.setItem("lastPage", page);

    window.location.href = page;
}

function goToMGR() {
    login("mgr", "mgr-dashboard.html");
}

function goToACC() {
    login("acc", "acc-dashboard.html");
}

function goToENG() {
    login("eng", "eng-dashboard.html");
}

function goToGHK() {
    login("ghk", "ghk-dashboard.html");
}

function goToPMO() {
    login("pmo", "pmo-dashboard.html");
}

function goToRRD() {
    login("rrd", "rrd-dashboard.html");
}

function goToSEC() {
    login("sec", "sec-dashboard.html");
}