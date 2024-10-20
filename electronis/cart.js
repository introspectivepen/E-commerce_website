// Start with an empty cart
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to display items in the cart
function displayCart() {
    const cartList = document.getElementById('cartList');
    cartList.innerHTML = ''; // Clear the list before populating

    // Check if there are items in the cart
    if (cart.length === 0) {
        cartList.innerHTML = "<p>Your cart is empty.</p>";
        return; // Exit the function if the cart is empty
    }

    // Loop through each product in the cart and display it
    cart.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button class="remove-button" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartList.appendChild(productDiv);
    });
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove the item from the array
    localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
    displayCart(); // Refresh the displayed cart
}

// Checkout button event listener
document.getElementById('checkoutButton').addEventListener('click', () => {
    const name = prompt("Enter your name:");
    const address = prompt("Enter your shipping address:");
    const contact = prompt("Enter your contact number:");

    if (name && address && contact) {
        alert(`Thank you, ${name}! Your order will be shipped to ${address}. We will contact you at ${contact}.`);
    } else {
        alert("Please fill in all the details.");
    }
});

// Call displayCart when the page loads
window.onload = displayCart;
