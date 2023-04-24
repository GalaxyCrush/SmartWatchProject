let URLs = ["../Social/friendlist.html"];
const photos = new Map()
photos.set("1000", "https://cdn.discordapp.com/avatars/341684723975716864/83d4df0138bde5f7107a1132a8fbbdfd.webp");
photos.set("2000", "https://cdn.discordapp.com/avatars/357903525533188097/5083570d3ebb3d35aaa7639ef322f4aa.webp");
photos.set("3000", "https://cdn.discordapp.com/avatars/343915488562380803/4302214f35d1f0ad7863f6d0f9889466.webp");
photos.set("4000", "https://cdn.discordapp.com/avatars/563677264739303424/370596c751ac0f607e5765f278c7add0.webp");
photos.set("5000", "https://cdn.discordapp.com/avatars/294569950780063745/2b091234b9b8d8650200a58695843e35.webp");
photos.set("6000", "https://cdn.discordapp.com/avatars/527949996109201458/fe9c46697ac140c12ba6b83ee76aa5b9.webp");
photos.set("7000", "https://cdn.discordapp.com/avatars/588831158645686418/5a99f26aca53502495a14761f3e46ed1.webp");
localStorage.setItem("photosId", photos);

localStorage.setItem("Friends",)
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
    localStorage.setItem("amigos", JSON.parse(friends));
}