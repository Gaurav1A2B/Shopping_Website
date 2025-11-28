let cart = [];

// Load products
function loadProducts(filter = "all") {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  products
    .filter(p => filter === "all" || p.category === filter)
    .forEach(p => {
      list.innerHTML += `
        <div class="bg-white p-4 shadow rounded-lg">
          <img src="${p.img}" class="w-full h-40 object-cover rounded">
          <h2 class="text-lg font-semibold mt-2">${p.name}</h2>
          <p class="text-gray-600">₹${p.price}</p>
          <button onclick="addToCart(${p.id})"
            class="mt-3 bg-blue-600 text-white px-4 py-1 rounded">
            Add to Cart
          </button>
        </div>
      `;
    });
}

// Add to cart
function addToCart(id) {
  cart.push(id);
  document.getElementById("cartCount").innerText = cart.length;
}

// Filter change
document.getElementById("categoryFilter").addEventListener("change", (e) => {
  loadProducts(e.target.value);
});

// Initial load
loadProducts();
