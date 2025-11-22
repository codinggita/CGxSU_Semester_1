var button = document.getElementById("loadPostsBtn");

button.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      console.log("All posts:", posts);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
});
