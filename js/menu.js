const list = document.querySelectorAll("#friendList");
const profile = document.querySelectorAll("#Profile");
let URLs = ["../MainMenu/social.html", "../MainMenu/map.html"];


function changePageToSocial() {
    document.location.href = URLs[0];
}

function changePageToMap() {
    document.location.href = URLs[1];
}

