let URLs = ["../Waypoints/waypointlist.html"];


function changeToPrevious() {
    document.location.href = URLs[0];
}

function load() {
    const fString = localStorage.getItem("waypoints");
    if (fString !== null) {
        return JSON.parse(fString);
    }
    return [];
}

const waypoints = load();

document.getElementById("info").addEventListener("beforeinput", (e) => {
    let aux = e.data;
    if (aux >= '0' && aux <= '9' && aux !== null) {
        e.preventDefault();
    }
    if (e.currentTarget.value.length > 20 && aux !== null) {
        e.preventDefault();
    }
});

document.getElementById("id").addEventListener("beforeinput", (e) => {
    let aux = e.data;
    if ((aux >= '0' && aux <= '9') && aux !== null) {
        e.preventDefault();
    }
    if (e.currentTarget.value.length > 20 && aux !== null) {
        e.preventDefault();
    }
});


function addWaypoint() {
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
    let fo = new Map(JSON.parse(localStorage.getItem("caminhos")))
    let it = fo.keys();
    for (let i of it) {
        if (i == frId) {
            val = true;
        }
    }
    if (!val) {

        fo.set(frId + "", defaultCaminho[Math.floor((Math.random() * 4))]);
        localStorage.setItem("caminhos", JSON.stringify(Array.from(fo.entries())));
    }

    if (verifyFriend(frId) === -1) {
        const waypoint = {
            name: frName,
            morada: frId
        };
        waypoints.push(waypoint);
        localStorage.setItem("waypoints", JSON.stringify(waypoints));
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
    return waypoints.findIndex(f => f.morada === verId);
}

function appearAlerDiv() {
    document.getElementById("alertDiv").style.display = "block";
}

function vanishDiv() {
    document.getElementById("alertDiv").style.display = "none";
}