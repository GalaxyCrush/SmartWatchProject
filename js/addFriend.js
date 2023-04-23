let URLs = ["../Social/friendlist.html"];
localStorage.setItem("1000", "../../Images/profile-user.png");


function changeToPrevious() {
    document.location.href = URLs[0];
}

function person(name, id, url) {
    this.name = name;
    this.id = id;
    this.photo = url;
}

function addFriend() {
    let frName = document.getElementById("name").value;
    let frId = document.getElementById("id").value;
    localStorage.setItem(frId + frName, new person(frName, frId, localStorage.getItem(frId)));
    document.getElementById("amigos").innerHTML += "<li>" + "<img src=" + localStorage.getItem(frId) + "alt=" + frName + ">" + "</li>";
    document.location.href("../Social/friendlist.html");
}