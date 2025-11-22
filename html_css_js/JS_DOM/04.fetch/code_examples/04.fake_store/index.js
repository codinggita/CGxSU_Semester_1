const button = document.getElementById("loadProductsBtn");

button.addEventListener("click", () => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
      console.log("All products array:", products);

      // simple for loop to log each product
      for (let i = 0; i < products.length; i++) {
        console.log("Product #" + (i + 1), products[i]);
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
});
