
let cartItems = [];

function addToCart() {
    const cycleImage = document.getElementById('car-img').src;
    const cycleName = document.getElementById('car-name').textContent;
    const cycleDescription = document.getElementById('car-description').textContent;

    const newItem = {
        image: cycleImage,
        name: cycleName,
        description: cycleDescription
    };

    cartItems.push(newItem);

    // Update the cart count
    document.getElementById('cart-count').textContent = cartItems.length;
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-items');

    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width:100px;">
            <div>
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });
}

