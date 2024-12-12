const colorChanger = document.getElementById("button")
// Cambair a un color de fondo
function changeToRandomBgColor(){
    // String con todos los carácteres válidos
    const hexadecimal = "0123456789ABCDEF";
    // Variable donde se almacenarán los valores obtenidos en el bucle
    let randomHex = "#"
    for (let i = 0; i < 6; i++){
        const randomIndex = Math.floor(Math.random() * (hexadecimal.length));
        randomHex += hexadecimal[randomIndex];
    }
    document.body.style.setProperty('--primary-color', randomHex)
}
// Cambiar el texto del botón
function changeTextOfButton(){
    const colorName = document.body.style.getPropertyValue('--primary-color')
    colorChanger.textContent = colorName
}
// Cambiar el color del texto
function changeTextColorOfButton(){
    // Variables y constantes
    hexadecimal = "0123456789ABCDEF";
    randomHex = "#"
    for (let i = 0; i < 6; i++){
        const randomIndex = Math.floor(Math.random() * (hexadecimal.length));
        randomHex += hexadecimal[randomIndex];
    }
    colorChanger.style.setProperty('--text-color', randomHex)
}
colorChanger.addEventListener("click", changeToRandomBgColor)

colorChanger.addEventListener("click", changeTextOfButton)

colorChanger.addEventListener("click", changeTextColorOfButton)