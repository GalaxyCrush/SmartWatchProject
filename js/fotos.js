const photos = new Map()
photos.set("1000", "../../Images/an.webp");
photos.set("2000", "../../Images/ro.webp");
photos.set("3000", "../../Images/da.webp");
photos.set("4000", "../../Images/dan.webp");
photos.set("5000", "../../Images/jo.webp");
photos.set("6000", "../../Images/g.webp");
photos.set("7000", "../../Images/la.webp");
if (localStorage.getItem("fotos") == null) {
    localStorage.setItem("fotos", JSON.stringify(Array.from(photos.entries())));
}

let defaultPhoto = [
    "../../Images/1.png",
    "../../Images/2.png",
    "../../Images/3.png",
    "../../Images/4.png",
    "../../Images/5.png",
    "../../Images/6.png",
    "../../Images/7.png",
    "../../Images/8.png",
    "../../Images/9.png",
    "../../Images/10.png",
    "../../Images/11.png",
    "../../Images/12.png",
    "../../Images/13.png",
    "../../Images/14.png",
    "../../Images/15.png",
    "../../Images/16.png",
    "../../Images/17.png",
    "../../Images/18.png",
    "../../Images/19.png",
    "../../Images/20.png",
    "../../Images/21.png",
    "../../Images/22.png",
    "../../Images/23.png",
    "../../Images/24.png",
    "../../Images/25.png"];