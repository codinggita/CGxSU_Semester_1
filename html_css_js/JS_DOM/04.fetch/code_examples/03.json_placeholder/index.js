var button = document.getElementById("loadPostsBtn");
var postsContainer = document.getElementById("postsContainer");

button.addEventListener("click", () => {
  // Clear previous posts and show loading
  postsContainer.textContent = "Loading posts...";

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      console.log("All posts:", posts);

      // Clear loading text
      postsContainer.textContent = "";

      // Loop through posts and create elements
      for (var i = 0; i < posts.length; i++) {
        var post = posts[i];

        var postDiv = document.createElement("div");

        var titleEl = document.createElement("h3");
        titleEl.textContent = post.title;

        var bodyEl = document.createElement("p");
        bodyEl.textContent = post.body;

        var line = document.createElement("hr");

        postDiv.appendChild(titleEl);
        postDiv.appendChild(bodyEl);
        postDiv.appendChild(line);

        postsContainer.appendChild(postDiv);
      }
    })
    .catch((error) => {
      console.log("Error:", error);
      postsContainer.textContent = "Error loading posts.";
    });
});
