const button = document.getElementById("loadProductsBtn");
const productsContainer = document.getElementById("productsContainer");

button.addEventListener("click", () => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
      console.log("Products", products);
      let all_products = "";

      for (let i = 0; i < products.length; i++) {
        const p = products[i];

        all_products += "<h3>" + p.title + "</h3>";
        all_products += '<img src="' + p.image + '" alt="' + p.title + '" width="100">';
        all_products += "<p>Price: $" + p.price + "</p>";
        all_products += "<p>Category: " + p.category + "</p>";
        all_products += "<p>" + p.description + "</p>";
        all_products += "<hr>";
      }

      productsContainer.innerHTML = all_products;
    })
    .catch((error) => {
      console.log("Error:", error);
      productsContainer.innerHTML = "Error loading products.";
    });
});
