let URLs = ["../Mapa/filter.html", "../Mapa/Waypoints/waypointlist.html", "../MainMenu/map.html"];

function changeToFilterMenu() {
    document.location.href = URLs[0];
}

function changeToWayPointsMenu() {
    document.location.href = URLs[1];
}

function changeToMap() {
    document.location.href = URLs[2];
}