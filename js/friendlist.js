let URLs = ["../MainMenu/social.html", "../Social/addFriend.html", "../Social/profile.html"];


function changeToPrevious() {
    document.location.href = URLs[0];
}

function changeToAddFriend() {
    document.location.href = URLs[1];
}

function changeToFriendProfile(friend) {
    localStorage.setItem("current", JSON.stringify(friend));
    document.location.href = URLs[2];
}

function load() {
    const fString = localStorage.getItem("amigos");
    if (fString !== null) {
        return JSON.parse(fString);
    }
    return [];
}


const friends = load();

function actFriend() {
    let yes = document.getElementById("amigos");
    let pf = new Map(JSON.parse(localStorage.getItem("fotos")));
    console.log(pf);
    for (let i = 0; i < friends.length; i++) {

        let aux = friends[i];
        let li = document.createElement("li");
        li.onclick = () => changeToFriendProfile(aux);


        let img = document.createElement("img");
        img.src = pf.get(aux.id);
        img.alt = aux.name;


        let p = document.createElement("p");
        p.innerText = aux.name;
        li.appendChild(img);
        li.appendChild(p);
        li.setAttribute("id", aux.id)
        yes.appendChild(li);
    }
}

// function remove() {
//     let elem = document.getElementById(localStorage.getItem("remove"))
//     elem.remove;
// }

window.onload = actFriend;


