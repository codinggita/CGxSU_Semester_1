// 1. Click Event - Change Text
const clickMessage = document.getElementById("clickMessage");
const clickBtn = document.getElementById("clickBtn");

clickBtn.addEventListener("click", () => {
  clickMessage.textContent = "The text has been changed after click!";
});

// 2. Double Click Event - Change Color
const dblClickBox = document.getElementById("dblClickBox");

dblClickBox.addEventListener("dblclick", () => {
  dblClickBox.style.backgroundColor = "lightblue";
  dblClickBox.textContent = "You double-clicked me!";
});

// 3. Mouse Enter / Leave - Highlight Card
const hoverCard = document.getElementById("hoverCard");

hoverCard.addEventListener("mouseenter", () => {
  hoverCard.style.backgroundColor = "lightyellow";
});

hoverCard.addEventListener("mouseleave", () => {
  hoverCard.style.backgroundColor = "white";
});

// 4. Input Event - Live Preview
const liveInput = document.getElementById("liveInput");
const livePreview = document.getElementById("livePreview");

liveInput.addEventListener("input", () => {
  const text = liveInput.value;

  if (text === "") {
    livePreview.textContent = "Preview: (nothing yet)";
  } else {
    livePreview.textContent = "Preview: " + text;
  }
});

// 5. Change Event - Select City
const citySelect = document.getElementById("citySelect");
const selectedCity = document.getElementById("selectedCity");

citySelect.addEventListener("change", () => {
  if (citySelect.value === "") {
    selectedCity.textContent = "You selected: (none)";
  } else {
    selectedCity.textContent = "You selected: " + citySelect.value;
  }
});
