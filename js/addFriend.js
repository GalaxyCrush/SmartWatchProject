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

document.getElementById("info").setAttribute('required', 'true');
document.getElementById("id").setAttribute('required', 'true');

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
        alert("Id must be a number")
    }
    if (e.currentTarget.value.length > 7 && aux !== null) {
        e.preventDefault();
        alert("Id too long");
    }
});


function addFriend() {
    let frName = document.getElementById("info").value;

    if (frName == null || frName == "") {
        appearAlerDiv();
        return;
    }

    let frId = document.getElementById("id").value;
    if (frId == null || frId == "") {
        appearAlerDiv();
        return;
    }

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

    if (verifyFriend(frId) === -1) {
        const friend = {
            name: frName,
            id: frId
        };
        friends.push(friend);
        localStorage.setItem("amigos", JSON.stringify(friends));
        changeToPrevious();
    }
    else {
        if (document.getElementById("tempDiv") === null) {
            let div = document.createElement("div");
            div.id = "tempDiv";
            let p = document.createElement("p");
            p.innerText = "Friend already added";
            div.addEventListener("transitionend", () => {
                document.getElementById("tempDiv").remove();
            });
            div.appendChild(p);
            document.body.appendChild(div);
            setTimeout(() => document.getElementById("tempDiv").style.opacity = "0", 1000);
        }
    }

}

function verifyFriend(verId) {
    return friends.findIndex(f => f.id === verId);
}

function appearAlerDiv() {
    document.getElementById("alertDiv").style.display = "block";
}

function vanishDiv() {
    document.getElementById("alertDiv").style.display = "none";
}