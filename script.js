const circles = document.querySelectorAll("div.circle");

for (const element of circles) {
    element.addEventListener('click', (e) => {
        console.log(e.target.id)
    }) // end click event listener;

    element.addEventListener('mousedown', (e) => {
        e.target.style.filter = "brightness(85%)"
    })

    element.addEventListener('mouseup', (e) => {
        e.target.style.filter = "brightness(100%)"
    })
} // next circle;