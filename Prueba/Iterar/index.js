/** Crea un elemento card el cual contiene chips */
class Card {
    element;
    input;
    chipsContainer;

    constructor(nombre) {
        this.element = document.createElement("section");
        this.titulo = document.createElement("h2");
        this.titulo.innerText = nombre;
        // this.input = document.createElement("input");
        // this.input.type = "number";
        this.chipsContainer = document.createElement("div");
        this.chipsContainer.className = "chipsContainer";
        this.element.appendChild(this.titulo);
        // this.element.appendChild(this.input);
        this.element.appendChild(this.chipsContainer);
        document.body.appendChild(this.element);
    }

    /**
  * Crea un chip con el nombre recibido
  * @param {string} chips
  */
    crearChip(contenido = "") {
        const nuevoChip = document.createElement("span");
        nuevoChip.classList = "chip";
        nuevoChip.innerText = contenido;
        this.chipsContainer.appendChild(nuevoChip);
    }

    /**
   * Crea chips según el parámetro recibido 
   * @param {number | number[] | string | string[]} chips
   */
    set chips(chips) {
        this.reset();
        if (!Array.isArray(chips)) return this.crearChip(chips);
        chips.forEach(chip => this.crearChip(chip));
    }

    /** Borra todos los chips existentes */
    reset() {
        Array.from(this.chipsContainer.children).forEach(hijo => this.chipsContainer.removeChild(hijo))
    }
}

//Lista a utilizar
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Objetos cards
const forLoopCard = new Card("for");
const forEachCard = new Card("forEach");
const reduceCard = new Card("reduce");
const mapCard = new Card("map");
const filterCard = new Card("filter");
const findCard = new Card("find");

//Explicación loops

//For
for (let index = 0; index < list.length; index++) {
    forLoopCard.crearChip(list[index]);
    
}

// For loop reverso
for (let index = list.length-1; index >= 0; index--) {
    const element = list[index];
    forLoopCard.crearChip(element);
}

// For Each
list.forEach(element => {
    if(element%2 === 0) forEachCard.crearChip(element);
});

// Map
const listMap = list.map((item,i) => item*2);
mapCard.chips = listMap;

// Filter
const listFilter = list.filter(item => item%2 === 0);
filterCard.chips = listFilter

// Find
const foundElement = list.find(item => item%2 ==! 0 && item > 1)
findCard.chips = foundElement

// Reduce
const reduceElement = list.reduce((acumulado, item) =>{
    return acumulado+item;
},0)

reduceCard.chips = reduceElement;
