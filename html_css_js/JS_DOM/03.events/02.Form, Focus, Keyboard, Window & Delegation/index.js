// 6. Submit Event - Simple Form
const simpleForm = document.getElementById("simpleForm");
const formNameInput = document.getElementById("formNameInput");
const formResult = document.getElementById("formResult");

simpleForm.addEventListener("submit", (event) => {
  event.preventDefault(); // stop page reload
  const nameValue = formNameInput.value;

  if (nameValue === "") {
    formResult.textContent = "Please enter your name before submitting.";
  } else {
    formResult.textContent = "Form submitted. Name: " + nameValue;
  }

  console.log("Form submitted with name:", nameValue);
});

// 7. Focus / Blur - Highlight Input
const focusInput = document.getElementById("focusInput");

focusInput.addEventListener("focus", () => {
  focusInput.style.border = "2px solid blue";
});

focusInput.addEventListener("blur", () => {
  focusInput.style.border = "1px solid #ccc";
});

// 8. Keydown Event - Show Pressed Key
const keyInfo = document.getElementById("keyInfo");

document.addEventListener("keydown", (event) => {
  keyInfo.textContent = "You pressed: " + event.key;
});

// 9. Resize Event - Window Size
const sizeInfo = document.getElementById("sizeInfo");

function updateSizeInfo() {
  sizeInfo.textContent =
    "Width: " + window.innerWidth + ", Height: " + window.innerHeight;
}

window.addEventListener("resize", updateSizeInfo);
updateSizeInfo(); // call once at start

// 10. Event Delegation - Click List Item
const itemList = document.getElementById("itemList");
const itemClickResult = document.getElementById("itemClickResult");

itemList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    const text = event.target.textContent;
    itemClickResult.textContent = "Clicked item: " + text;
    console.log("You clicked list item:", text);
  }
});
