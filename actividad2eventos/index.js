const button1 = document.querySelector("#boton1");
const button2 = document.querySelector("#boton2");
const button3 = document.querySelector("#boton3");
const button4 = document.querySelector("#boton4");
const container = document.querySelector(".elements-container")

button1.addEventListener("click", addText);
button2.addEventListener("click", addImage);
button3.addEventListener("click", addButton);
button4.addEventListener("click", eraseAll);

function addText(){
    container.innerHTML += `
    <p>Hola mundo</p>`;
}

function addImage(){
    container.innerHTML += `
    <img alt="html" src="html.png">`;
}

function addButton(){
    container.innerHTML += `
    <button>Botón</button>`;
}
function eraseAll(){
    container.innerHTML = "";
}