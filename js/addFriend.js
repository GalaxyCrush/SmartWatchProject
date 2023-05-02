let URLs = ["../Social/friendlist.html"];


function changeToPrevious() {
    document.location.href = URLs[0];
}

function load() {
    const fString = localStorage.getItem("amigos");
    if (fString !== null) {
        return JSON.parse(fString);
    }
    return [];
}

const friends = load();

document.getElementById("info").setAttribute('required', '');
document.getElementById("id").setAttribute('required', '');

document.getElementById("info").addEventListener("beforeinput", (e) => {
    let aux = e.data;
    if (aux >= '0' && aux <= '9' && aux !== null) {
        e.preventDefault();
        alert("Name must be a string");
    }
    if (e.currentTarget.value.length > 20 && aux !== null) {
        e.preventDefault();
        alert("Name too long");
    }
});

document.getElementById("id").addEventListener("beforeinput", (e) => {
    let aux = e.data;
    if (!(aux >= '0' && aux <= '9') && aux !== null) {
        e.preventDefault();
    }
    if (e.currentTarget.value.length > 7 && aux !== null) {
        e.preventDefault();
        alert("Id too long");
    }
});


function addFriend() {
    let frName = document.getElementById("info").value;
    if (frName == null || frName == "") {
        let div = document.createElement("div");
        let p = document.createElement("p");
        p.innerHTML = "Name in mandatory";
        p.style.color = "white";
        div.addEventListener('click', (e) => {
            e.currentTarget.remove();
        })
        div.style.position = "absolute";
        div.style.backgroundColor = "grey";
        div.appendChild(p);
        document.body.appendChild(div);
    }
    let frId = document.getElementById("id").value;

    let val = false;
    let fo = new Map(JSON.parse(localStorage.getItem("fotos")))
    let it = fo.keys();
    for (let i of it) {
        if (i == frId) {
            val = true;
        }
    }
    if (!val) {

        fo.set(frId + "", defaultPhoto[Math.floor((Math.random() * 25))]);
        localStorage.setItem("fotos", JSON.stringify(Array.from(fo.entries())));
    }

    const friend = {
        name: frName,
        id: frId
    };
    friends.push(friend);
    localStorage.setItem("amigos", JSON.stringify(friends));
    changeToPrevious();
}