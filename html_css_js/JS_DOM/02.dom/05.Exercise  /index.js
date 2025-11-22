const picture = document.getElementById("picture");
const img1Btn = document.getElementById("img1Btn");
const img2Btn = document.getElementById("img2Btn");

img1Btn.addEventListener("click", () => {
  picture.src = "https://codinggita.com/assets/logo-DqYDd8j5.svg";
});

img2Btn.addEventListener("click", () => {
  picture.src = "https://www.swaminarayanuniversity.ac.in/assets/img/logo/logo_n.png";
});
