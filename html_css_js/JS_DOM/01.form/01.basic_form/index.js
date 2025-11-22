const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const ageInput = document.getElementById("ageInput");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const ageValue = ageInput.value;

  console.log("Name:", nameValue);
  console.log("Email:", emailValue);
  console.log("Age:", ageValue);
});
