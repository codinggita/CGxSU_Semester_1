const infoPara = document.getElementById("infoPara");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  if (infoPara.style.display === "none") {
    // currently hidden, so show it
    infoPara.style.display = "block";
    toggleBtn.textContent = "Hide";
  } else {
    // currently visible (or default), so hide it
    infoPara.style.display = "none";
    toggleBtn.textContent = "Show";
  }
});
