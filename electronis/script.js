const products = [
    { id: 1, name: "Smart Speaker", price: 3999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG2w5FSLzyeO0iZfuALiPydHBXtm-ASNeiQQ&s", rating: 4.7 },
    { id: 2, name: "4K Streaming Stick", price: 3499, image: "https://www.ourfriday.co.uk/image/cache/catalog/Amazon/amazon-fire-tc-stick-4k-2023-2-200x200w.png", rating: 4.5 },
    { id: 3, name: "E-Reader", price: 9999, image: "https://cdn.giftstoindia24x7.com/ASP_Img/IMG2000/GTI403661.jpg?imgeng=w_200", rating: 4.6 },
    { id: 4, name: "Laptop Backpack", price: 1999, image: "https://safaribags.com/cdn/shop/files/2_3d6acc65-50a9-4d45-b83c-31bb315d7b05_200x.jpg?v=1707731912", rating: 4.4 },
    { id: 5, name: "Wireless Earbuds", price: 5999, image: "https://img.tatacliq.com/images/i16//437Wx649H/MP000000021763817_437Wx649H_202404050047141.jpeg", rating: 4.8 },
    { id: 6, name: "Smart Watch", price: 12999, image: "https://m.media-amazon.com/images/I/61S70awj8bL.jpg", rating: 4.5 },
    { id: 7, name: "Bluetooth Speaker", price: 2499, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl7nvXj1Xe5v9QjP3exxukf2y_BhvKCFLb7UxhJ0PFGmaTJhQ2zcRbk8BZ5juZaIMSlCs&usqp=CAU", rating: 4.3 },
    { id: 8, name: "Noise-Cancelling Headphones", price: 14999, image: "https://m.media-amazon.com/images/I/61125aDRdSL.jpg", rating: 4.7 },
    { id: 9, name: "Portable Power Bank", price: 1499, image: "https://m.media-amazon.com/images/I/71Linf+GHuL._AC_AA200_.jpg", rating: 4.6 },
    { id: 10, name: "Wireless Mouse", price: 999, image: "https://www.tccq.com/image/cache/catalog/1204309/Porodo-Gaming-Wireless-Mouse-Gaming-Design-DPi-1600-Black-in-Qatar-200x200.jpg", rating: 4.2 },
    { id: 11, name: "Gaming Controller", price: 3999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYL_2EQOQl1RbdgiwniWdyXTNj7yv2KhHpw&s", rating: 4.4 },
    { id: 12, name: "Webcam", price: 2999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeID0xBSZEgS5hIsiV1EgAWjVVvRjqR1qMzw&s", rating: 4.1 },
];

let cart = [];

function displayProducts() {
    const productList = document.getElementById('productList');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <div class="star-rating">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</div>
            <button class="button" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    cartCount.innerText = cart.length;
}

window.onload = () => {
    displayProducts();
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCount();
};
