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

    let pf = new Map(JSON.parse(localStorage.getItem("fotos")));
    img.src = pf.get(current.id);
}

window.onload = loadPf();

function removeAlt() {
    const elem = document.getElementById("id").innerHTML;
    const toRemove = elem.split(":");
    localStorage.setItem("remove", toRemove);
}