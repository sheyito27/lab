const answer = document.getElementById("answer");
const btn_execute = document.getElementById("execute");
let fruits = ["Manzana" , "Naranja" , "Sandía", "Plátano", "Aguacate", "Mango", "Pera", "Coco", "Nactarina", "Ciruela"];
btn_execute.addEventListener("click", init)
function init() {
        fruits.forEach(function(item, index, array){
            answer.innerText = index;
        }); 
}
