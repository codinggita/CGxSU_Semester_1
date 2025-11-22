// 1. mousedown - Press and Hold
const mouseDownBtn = document.getElementById("mouseDownBtn");
const mouseDownResult = document.getElementById("mouseDownResult");

mouseDownBtn.addEventListener("mousedown", () => {
  mouseDownResult.textContent = "Status: Button is being pressed (mousedown).";
});

// 2. mouseup - Release Button
const mouseUpBtn = document.getElementById("mouseUpBtn");
const mouseUpResult = document.getElementById("mouseUpResult");

mouseUpBtn.addEventListener("mouseup", () => {
  mouseUpResult.textContent = "Status: Button was released (mouseup).";
});

// 3. mousemove - Track Mouse Position
const moveBox = document.getElementById("moveBox");
const mousePosition = document.getElementById("mousePosition");

moveBox.addEventListener("mousemove", (event) => {
  // clientX/clientY = mouse position relative to viewport
  mousePosition.textContent =
    "Mouse position: (x: " + event.clientX + ", y: " + event.clientY + ")";
});

// 4. contextmenu - Right Click
const rightClickArea = document.getElementById("rightClickArea");
const rightClickResult = document.getElementById("rightClickResult");

rightClickArea.addEventListener("contextmenu", (event) => {
  event.preventDefault(); // stop default right-click menu
  rightClickResult.textContent = "Right-click status: You right-clicked here!";
});

// 5. wheel - Mouse Wheel Scroll
const wheelBox = document.getElementById("wheelBox");
const wheelResult = document.getElementById("wheelResult");

wheelBox.addEventListener("wheel", (event) => {
  // event.deltaY > 0 means scrolling down, < 0 means up
  if (event.deltaY > 0) {
    wheelResult.textContent = "Last wheel direction: Scrolled down.";
  } else if (event.deltaY < 0) {
    wheelResult.textContent = "Last wheel direction: Scrolled up.";
  } else {
    wheelResult.textContent = "Last wheel direction: no vertical change.";
  }
});
