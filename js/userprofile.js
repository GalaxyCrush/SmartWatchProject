const map = document.querySelectorAll("#frindList");
const social = document.querySelectorAll("#Profile");
const view = document.getElementById("view");
let URLs = ["../Social/notes.html", "../Social/settings.html", "../MainMenu/social.html"];
localStorage.setItem("eyeO", "../../Images/view.png");
localStorage.setItem("eyeC", "../../Images/nview.png");

function changePageToNotes() {
    document.location.href = URLs[0];
}

function changePageToSettings() {
    document.location.href = URLs[1];
}

function changeToPrevious() {
    document.location.href = URLs[2];
    localStorage.setItem("currentEye", currentEye);

}

function mudaOlho() {
    const olho = document.getElementById("olho");
    if (olho.src.indexOf("Images/view.png") !== -1) {
        olho.src = "../../Images/nview.png";
        localStorage.setItem("currentEye", localStorage.getItem("eyeC"));
    } else {
        olho.src = "../../Images/view.png";
        localStorage.setItem("currentEye", localStorage.getItem("eyeO"));
    }
}

function saveEye() {
    document.getElementById("olho").src = localStorage.getItem("currentEye");
}

window.onload = saveEye();