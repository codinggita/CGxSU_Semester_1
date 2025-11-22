var button = document.getElementById("loadPostsBtn");
var postsContainer = document.getElementById("postsContainer");

button.addEventListener("click", () => {
  // optional: show loading text
  postsContainer.innerHTML = "Loading posts...";

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      console.log("All posts:", posts); // still log to console

      var all_posts = "";

      // build simple HTML for each post
      for (var i = 0; i < posts.length; i++) {
        all_posts += "<h3>" + posts[i].title + "</h3>";
        all_posts += "<p>" + posts[i].body + "</p>";
        all_posts += "<hr>";
      }

      postsContainer.innerHTML = all_posts;
    })
    .catch((error) => {
      console.log("Error:", error);
      postsContainer.innerHTML = "Error loading posts.";
    });
});
