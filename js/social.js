const map = document.querySelectorAll("#frindList");
const social = document.querySelectorAll("#Profile");
var URLs = ["../Social/friendlist.html", "../Social/profile.html", "../MainMenu/menu.html"];


function changePageTofriendList() {
    document.location.href = URLs[0];
}

function changePageToProfile() {
    document.location.href = URLs[1];
}

function changeToMainMenu() {
    document.location.href = URLs[2];
}
