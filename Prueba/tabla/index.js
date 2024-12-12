const tbody = document.querySelector("tbody");

/* Muestra en una tabla de dos columnas los datos de los argumentos */
function escribirEnPagina(texto1, texto2){
    tbody.innerHTML += `<tr>
    <td>${texto1}</td>
    <td>${texto2}</td>
    </tr>`;
}

const a = 10;
const b = 5;
const c = 5;

// If común
if (a > b) {
    escribirEnPagina("If común", "A es mayor que B");
}

// If else
if (a < b){
    escribirEnPagina("If común", "A es menor que B");
}
else{
    escribirEnPagina("If else", "A es mayor que B")
}

// If else if
if (b < c){
    escribirEnPagina("If else if", "B es mayor que C")
}else if (b > c){
    escribirEnPagina("If else if", "B es nenor que C")
}else{
    escribirEnPagina("If else if", "B y C son iguales")
}

// If deep equal
escribirEnPagina("===", 10 === "10");
// If shallow equal
escribirEnPagina("==", 10 == "10");

if (a === b && b === c){
    escribirEnPagina("&&", "Todos son iguales")
}else {
    escribirEnPagina("&&", "No todos son iguales")
}

if (a === b || b === c){
    escribirEnPagina("||", "Almenos uno es igual al otro")
}else {
    escribirEnPagina("||", "Ninguno es igual")
}