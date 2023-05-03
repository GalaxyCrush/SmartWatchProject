const caminhos = new Map()
if (localStorage.getItem("caminhos") === null) {
    localStorage.setItem("caminhos", JSON.stringify(Array.from(caminhos.entries())));
}


let defaultCaminho = [
    "../../../Images/mapa2.png",
    "../../../Images/mapa3.png",
    "../../../Images/mapa4.png",
    "../../../Images/mapa5.png"];
