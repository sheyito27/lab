let cuenta = 0;
console.log(cuenta)
const numero = document.createElement("p");
numero.textContent = cuenta;
document.body.appendChild(numero);

function actualizarNumero(){
    numero.textContent = cuenta;
}
function agregarBoton(texto){
    const boton = document.createElement("button");
    boton.textContent = texto;
    document.body.appendChild(boton);
}
function triplicar(numero){
    console.log(numero*3);
    return numero*3;
}
const tripleDeCinco = triplicar(5);
console.log(tripleDeCinco);

function agregarBotonConReuturn(texto){
    const boton = document.createElement("button");
    boton.textContent = texto;
    document.body.appendChild(boton);
    return boton;
}

const botonSumar = agregarBotonConReuturn("+");
const botonRestar = agregarBotonConReuturn("-");

const restarDos = function(){
    // restar 1
    // restar 1
}
const sumarTres = () => cuenta += 3;

sumarTres();
actualizarNumero();

function sumarUno(){
    cuenta++;
    actualizarNumero();
}

botonSumar.addEventListener("click", sumarUno);

botonRestar.addEventListener("click", ()=> {
    cuenta--; 
    actualizarNumero();
})