let startButton = document.querySelector(".boton1");
startButton.addEventListener("click", start);
const textBox = document.querySelector(".caja");
let counter = 0;

function start() {
    textBox.innerHTML = `<div>
        <button id="boton2">Añadir 1</button>
        <button id="boton3">Reiniciar</button>
        <h2 id="contador">0</h2>
    </div>`
    const addButton = document.querySelector("#boton2");
    const resetButton = document.querySelector("#boton3");
    addButton.addEventListener("click", draw);
    + resetButton.addEventListener("click", reset);
}   

function draw() {  
    counter++;
    document.querySelector('#contador').textContent = counter;
    
}
function reset() {  
    counter = 0;
    document.querySelector('#contador').textContent = counter;
}