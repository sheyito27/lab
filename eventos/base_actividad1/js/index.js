/*
-Para MOVER la nave
document.querySelector(".nave").style.bottom="__px";

-Para poder SUSTITUIR una imagen por otra
document.querySelector(".nave").src="img/nave2.png";
*/
const spaceShip = document.querySelector(".nave");
let bottomValue = 0; // Inicializa el valor de bottom
let start = false;

window.addEventListener("keydown", propel);
window.addEventListener("keyup", launch);
window.addEventListener("keyup", land)

function propel(event) {
    if (event.key === "Enter") {
        combustion()
    } else {
        spaceShip.src = "img/nave1.png";
    }
}

function launch(event) {
    console.log(event.key);
    (event.key === "ArrowUp" && start) ? spaceShip.style.bottom = `${bottomValue += 10}px` : console.log("No se movió la nave");
}
function land(event) {
    console.log(event.key);
    (event.key === "ArrowDown") ? spaceShip.style.bottom = `${bottomValue -= 10}px` : console.log("No se movió la nave");
}
function combustion(){
    spaceShip.src = "img/nave2.png";
    start = true;
}