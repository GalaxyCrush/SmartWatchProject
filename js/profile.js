const map = document.querySelectorAll("#frindList");
const social = document.querySelectorAll("#Profile");
var URLs = ["../Social/notes.html", "../Social/settings.html", "../MainMenu/social.html"];


function changePageToNotes() {
    document.location.href = URLs[0];
}

function changePageToSettings() {
    document.location.href = URLs[1];
}

function changeToPrevious() {
    document.location.href = URLs[2];
}
