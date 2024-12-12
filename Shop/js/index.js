const cardsContainer = document.getElementById("items")

function createProductCards(items){
    items.forEach(item => {
        const newItem = document.createElement("div");
        newItem.classList = "item";
        newItem.innerHTML = `<div class="item__img-container">
            <img src="${item.img}">
        </div>
        <div class="item__details">
            <div class="item__btn-container">
                <button class="btn"><img src="/images/icon-add-to-cart.svg" alt="add to cart"><img src="/images/icon-add-to-cart-white.svg" alt="Add to cart" class="icon-hover">Añadir al carrito</button>
            </div>
                <p class="item__type">${item.type}</p>
                <p class="item__name">${item.name}</p>
                <p class="item__price">${item.price.toFixed(2)}<span> €</span></p>
                </div>
        `
        cardsContainer.appendChild(newItem);
        newItem.getElementsByTagName("button")[0].addEventListener("click", () => addToCart(item));
    });
}

createProductCards(desserts);