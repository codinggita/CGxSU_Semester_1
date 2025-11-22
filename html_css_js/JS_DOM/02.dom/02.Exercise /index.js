const textPara = document.getElementById("textPara");
const styleBtn = document.getElementById("styleBtn");

styleBtn.addEventListener("click", () => {
  textPara.style.color = "white";
  textPara.style.backgroundColor = "blue";
  textPara.style.fontSize = "24px";
});
