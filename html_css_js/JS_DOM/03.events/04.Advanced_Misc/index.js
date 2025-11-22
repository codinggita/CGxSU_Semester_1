// 1. scroll - Page Scroll Position
const scrollInfo = document.getElementById("scrollInfo");

function updateScrollInfo() {
  // window.scrollY gives vertical scroll in px
  scrollInfo.textContent = "Scroll position: (top: " + window.scrollY + " px)";
}

window.addEventListener("scroll", updateScrollInfo);
updateScrollInfo(); // call once at start

// 2. copy - Detect Copy Action
const copyText = document.getElementById("copyText");
const copyResult = document.getElementById("copyResult");

copyText.addEventListener("copy", () => {
  copyResult.textContent = "Copy status: You copied some text!";
});

// 3. paste - Detect Paste into Input
const pasteInput = document.getElementById("pasteInput");
const pasteResult = document.getElementById("pasteResult");

pasteInput.addEventListener("paste", (event) => {
  // wait a tiny bit before reading the value (or use clipboardData)
  setTimeout(() => {
    pasteResult.textContent =
      "Paste status: You pasted -> " + pasteInput.value;
  }, 0);
});

// 4. DOMContentLoaded and load
const domLoadStatus = document.getElementById("domLoadStatus");

// NOTE: This script runs after HTML elements are loaded (because script is at bottom),
// but we still demonstrate the events for teaching.

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded fired: HTML parsed and DOM built.");
});

window.addEventListener("load", () => {
  console.log("load fired: Page fully loaded (including images).");
  domLoadStatus.textContent =
    "Page load status: DOMContentLoaded and load have fired. Check console.";
});

// 5. touchstart - Mobile Touch (with desktop fallback)
const touchArea = document.getElementById("touchArea");
const touchResult = document.getElementById("touchResult");

// touchstart for mobile / touch devices
touchArea.addEventListener("touchstart", () => {
  touchResult.textContent = "Touch/click status: touchstart detected!";
});

// fallback: click for desktop
touchArea.addEventListener("click", () => {
  touchResult.textContent = "Touch/click status: click detected!";
});
