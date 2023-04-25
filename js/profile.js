let URLs = ["../Social/settings.html", "../MainMenu/social.html"];


function changePageToSettings() {
    document.location.href = URLs[0];
}

function changeToPrevious() {
    document.location.href = URLs[1];
}

function load() {
    const fString = localStorage.getItem("current");
    if (fString !== null) {
        return JSON.parse(fString);
    }
    return [];
}

const current = load();

function loadPf() {
    let nome = document.getElementById("nome");
    let id = document.getElementById("id");
    let distancia = document.getElementById("dist");
    let img = document.getElementById("pfp");
    nome.innerText += current.name;
    id.innerText += current.id;
    let dist = Math.floor((Math.random() * 500) + 1);
    distancia.innerText += " " + dist + " m";
    img.src = photos.get(current.id);
}

window.onload = loadPf();