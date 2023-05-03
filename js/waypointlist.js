let URLs = ["../../Mapa/mapMenu.html", "../Waypoints/addwaypoint.html", "../Waypoints/waypoint.html"];


function changeToPrevious() {
    document.location.href = URLs[0];
}

function changeToAddWayPoint() {
    document.location.href = URLs[1];
}

function changeToWaypoint(waypoint) {
    localStorage.setItem("currentWaypoint", JSON.stringify(waypoint));
    document.location.href = URLs[2];
}

function load() {
    const fString = localStorage.getItem("waypoints");

    if (fString !== null) {
        let waypointlist = JSON.parse(fString);
        for (let index = 0; index < waypointlist.length; index++) {
            let id = waypointlist[index].morada;
            if (id == localStorage.getItem("removePoint")) {
                localStorage.setItem("removePoint", "-1");
                waypointlist.splice(index, 1);
                localStorage.setItem("waypoints", JSON.stringify(waypointlist));
                break;
            }
        }
        return waypointlist;
    }
    return [];
}


const caminhos = load();

function actWaypoints() {
    let yes = document.getElementById("waypoints");
    let pf = new Map(JSON.parse(localStorage.getItem("caminhos")));
    for (let i = 0; i < caminhos.length; i++) {

        let aux = caminhos[i];
        let li = document.createElement("li");
        li.onclick = () => changeToWaypoint(aux);

        let p = document.createElement("p");
        p.innerText = aux.name;
        li.appendChild(p);
        li.setAttribute("id", aux.morada)
        yes.appendChild(li);
    }
}

window.addEventListener("load", (e) => {
    actWaypoints();
});