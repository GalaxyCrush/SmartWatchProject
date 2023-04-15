const map = document.querySelectorAll("#map")
const social = document.querySelectorAll("#social")


for (const element of map) {
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

for (const element of social) {
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