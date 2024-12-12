function addToCart(item) {
    const memory = JSON.parse(localStorage.getItem("postres")) || [];
    console.log(memory);

    // Buscar el índice del producto en el carrito
    const productIndex = memory.findIndex(postre => postre.id === item.id);
    console.log(productIndex);

    if (productIndex === -1) {
        // Si el producto no existe en el carrito añadirlo
        const newItem = getNewProductForMemory(item);
        memory.push(newItem);
    } else {
        // Si el producto ya existe aumentar su cantidad
        memory[productIndex].quantity ++;
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem("postres", JSON.stringify(memory));
    updateCartNumber()
}

// Agrega la cantidad del producto al carrito
function getNewProductForMemory(item) {
    const newItem = { ...item, quantity: 1 };
    return newItem;
}

const cartCount = document.getElementById("value")
// Actualizar el númeri del carrito
function updateCartNumber(){
    const memory = JSON.parse(localStorage.getItem("postres"));
    const count = memory.reduce((acum, current) => acum+current.quantity, 0);
    cartCount.innerText = count;
}
updateCartNumber()