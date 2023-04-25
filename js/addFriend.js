let URLs = ["friendlist.html"];


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

function addFriend() {
    let frName = document.getElementById("info").value;
    let frId = document.getElementById("id").value;
    const friend = {
        name: frName,
        id: frId
    };
    friends.push(friend);
    localStorage.setItem("amigos", JSON.stringify(friends));
    changeToPrevious();
}