const keyBox = document.querySelector(".caja");
const  input = document.querySelector(".campo");
const pulses = document.querySelector(".pulsaciones")
let counter = 0;

input.addEventListener("keydown", printKey);
input.addEventListener("keydown", pressKey);

function printKey(event){
    (event.key === "." || event.key === ",") ? event.preventDefault() : keyBox.innerHTML += `<p class="tecla">${event.key}</p>`;
}
function pressKey(event){
    (event.key === "." || event.key === ",") ? event.preventDefault() : counter++;
    pulses.innerHTML = `<p><strong class="number">${counter}</strong> teclas pulsadas</p>`
}