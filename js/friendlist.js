let URLs = ["../MainMenu/social.html", "../Social/addFriend.html"];


function changeToPrevious() {
    document.location.href = URLs[0];
}

function changeToAddFriend() {
    document.location.href = URLs[1];
}

function actFriend() {
    const yes = document.getElementById("amigos").innerHTML;
    for (let i = 0; i < localStorage.getItem("amigos").length(); i++) {
        let aux = localStorage.getItem("amigos")[i];
        yes += "<li>" + "<img src=" + localStorage.getItem("photos").get(aux.id) + "alt=" + aux.name + " onclick =" + "changeToFriendProfile()" + "> \n <p>" + aux.name + "</li>";
    }
}

window.onload = actFriend();
