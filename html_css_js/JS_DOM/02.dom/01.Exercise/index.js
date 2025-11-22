// select the paragraph and button using their IDs
const message = document.getElementById("message");
const button = document.getElementById("changeTextBtn");

// add a click event on the button
button.addEventListener("click", () => {
  message.textContent = "The text has been changed!";
});
