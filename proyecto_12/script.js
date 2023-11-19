document.querySelector(".menuBarra").addEventListener("click", animacionMenu);

function animacionMenu() {
    document.querySelector(".fila1").classList.toggle("fila1Animacion");
    document.querySelector(".fila2").classList.toggle("fila2Animacion");
    document.querySelector(".fila3").classList.toggle("fila3Animacion");
}
