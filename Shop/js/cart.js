function displayCartItems() {
    // Obtener el contenedor de los elementos del carrito y el mensaje de carrito vacío
    const cartItemsList = document.getElementById("cart-items-list");
    const emptyCartMsg = document.getElementById("empty-cart-msg");
    
    // Obtener los elementos del carrito almacenados en localStorage
    const memory = JSON.parse(localStorage.getItem("postres")) || [];

    // Limpiar el contenido actual del contenedor de elementos del carrito
    cartItemsList.innerHTML = '';

    // Verificar si hay elementos en el carrito
    if (memory.length > 0) {
        // Ocultar el mensaje de carrito vacío si hay elementos en el carrito
        emptyCartMsg.style.display = 'none';
        
        // Iterar sobre cada elemento en el carrito y crear un elemento de lista para cada uno
        memory.forEach(item => {
            const cartItem = document.createElement("div");
            cartItem.classList = "cart-container";
            cartItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <div class="attrubutes">
                    <p>${item.name}</p>
                    <p>Cantidad: ${item.quantity}</p>
                    <p>Precio: €${(item.price * item.quantity).toFixed(2)}</p>
                </div>
            `;
            cartItemsList.appendChild(cartItem);
        });
    } else {
        // Mostrar el mensaje de carrito vacío si no hay elementos en el carrito
        emptyCartMsg.style.display = 'block';
    }
}

createProductCards(desserts);
displayCartItems();