const gridButtons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ]
const topButtons = ['C', 'CE', '.']
const rightButtons = ['÷', 'x', '-', '+', '=']
const outputBar = document.getElementById("output")

function buildCalcButtons(buttons, containerId){

    // Almacenar el contenedor en una constante
    const div = document.getElementById(containerId)

    // Crear botones dentro del contenedor
    for (let i = 0; i < buttons.length; i++){ 
        const btn = document.createElement('button');
        btn.textContent = buttons[i];
        btn.className = `btn-${buttons[i]}`;
        btn.addEventListener('click', () => handleButtonClick(buttons[i]));
        div.appendChild(btn);
    }
}
function handleButtonClick(char) {
    switch(char){
        case 'C': 
            handleClearLast();
            break;
        case 'CE':
            handleClearAll();
            break;
        case '=':
            handleEqual(char)
            break;
        case '%':
            outputBar.textContent += '/100';
            break;
        case 'x':
            outputBar.textContent += '*';
            break;
        case '÷':
            outputBar.textContent += '/';
            break;
        default: 
            handleNumber(char);
            break;
    }
}

// Función para el botón C
function handleClearLast(){
    if(outputBar.textContent !== '0'){
        outputBar.textContent = outputBar.textContent.slice(0, -1) || '0'
    }
}
function handleClearAll(){
    if(outputBar.textContent !== '0'){
        outputBar.textContent = '0'
    }
}
function handleEqual(char) {
    if(char === '='){
        outputBar.textContent = eval(outputBar.textContent);
    }
}
function handleNumber(char){
    if(char !== '÷' && char !== 'x'){
        outputBar.textContent === '0' ? outputBar.textContent = char : outputBar.textContent += char;
    }
}

buildCalcButtons(topButtons, "top-buttons")
buildCalcButtons(gridButtons, "grid-buttons")
buildCalcButtons(rightButtons, "right-buttons")