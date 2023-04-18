const list = document.querySelectorAll("#friendList");
const profile = document.querySelectorAll("#Profile");
let URLs = ["../MainMenu/social.html", "../MainMenu/map.html"];


function changePageToSocial() {
    document.location.href = URLs[0];
}

function changePageToMap() {
    document.location.href = URLs[1];
}


for (const element of list) {
    element.addEventListener('click', (e) => {
        console.log(e.currentTarget.id)
    })

    element.addEventListener('mousedown', (e) => {
        e.currentTarget.style.filter = "brightness(85%)"
    })

    element.addEventListener('mouseup', (e) => {
        e.currentTarget.style.filter = "brightness(100%)"
    })
}

for (const element of profile) {
    element.addEventListener('click', (e) => {
        console.log(e.currentTarget.id)
    })

    element.addEventListener('mousedown', (e) => {
        e.currentTarget.style.filter = "brightness(85%)"
    })

    element.addEventListener('mouseup', (e) => {
        e.currentTarget.style.filter = "brightness(100%)"
    })
}