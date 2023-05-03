let URLs = ["waypointlist.html"];


function changeToPrevious() {
    document.location.href = URLs[0];
}

function load() {
    const fString = localStorage.getItem("currentWaypoint");
    if (fString !== null) {
        return JSON.parse(fString);
    }
    return [];
}

const current = load();

function loadPf() {
    let img = document.getElementById("pfp");
    let pf = new Map(JSON.parse(localStorage.getItem("caminhos")));
    img.src = pf.get(current.morada);
}

window.onload = loadPf();

function removeAlt() {
    const morada = current.morada;
    localStorage.setItem("removePoint", morada);
    changeToPrevious();
}

function appearRemoveDiv() {
    document.getElementById("removeDiv").style.display = "block";
}

function vanishDiv() {
    document.getElementById("removeDiv").style.display = "none";
}