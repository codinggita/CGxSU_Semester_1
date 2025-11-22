const button = document.getElementById("loadProductsBtn");
const productsContainer = document.getElementById("productsContainer");

button.addEventListener("click", () => {
  // Show loading message
  productsContainer.textContent = "Loading products...";

  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
      console.log("All products array:", products);

      // Clear loading text
      productsContainer.textContent = "";

      // Loop through products and create elements
      for (let i = 0; i < products.length; i++) {
        const product = products[i];

        const productDiv = document.createElement("div");

        const titleEl = document.createElement("h3");
        titleEl.textContent = product.title;

        const imageEl = document.createElement("img");
        imageEl.src = product.image;
        imageEl.alt = product.title;
        imageEl.width = 100; 

        const priceEl = document.createElement("p");
        priceEl.textContent = "Price: $" + product.price;

        const categoryEl = document.createElement("p");
        categoryEl.textContent = "Category: " + product.category;

        const descriptionEl = document.createElement("p");
        descriptionEl.textContent = product.description;

        const line = document.createElement("hr");

        productDiv.appendChild(titleEl);
        productDiv.appendChild(imageEl);
        productDiv.appendChild(priceEl);
        productDiv.appendChild(categoryEl);
        productDiv.appendChild(descriptionEl);
        productDiv.appendChild(line);

        productsContainer.appendChild(productDiv);
      }
    })
    .catch((error) => {
      console.log("Error:", error);
      productsContainer.textContent = "Error loading products.";
    });
});
