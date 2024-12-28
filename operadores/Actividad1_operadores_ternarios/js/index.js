// Valor a modificar
let nota=10;

/*
A mostrar en el <div class="resultado">
Si es de 5 a 10: "¡¡Has APROBADO!!"(color "green")
o sinó: "Has suspendido" (color "red")
A mostrar en el <div class="nota">
De 9 en adelante:       "Excelente"
De 7 a menos de 9:      "Notable"
De 5 hasta menos de 7:  "Aprobado"
Menos de 5:             "Suspendido"
Menos de 0 o más de 10: "No te flipes"
*/
/* Usar sólo TERNARIOS
(...) ? :
*/

drawBox()


function drawBox(note){

    const resultado = document.querySelector(".resultado");
    const nota = document.querySelector(".nota")

    resultado.className =  note >= 5 && !(note > 10) ? "aprobado" : "suspendido";


    resultado.innerHTML = note >= 5 && !(note > 10) ? "<h1>Has aprobado</h1>" : "<h1>No has aprobado</h1>";

    nota.innerHTML = note < 5 && note > 0 ? "Suspendido" :
        note >= 5 && note <= 7 && !(note >= 7) ? "Aprobado" :
        note >= 7 && note < 9 ? "Notable" :
        note >= 9 && note <= 10 ? "Excelente" : "No te flipes"
}