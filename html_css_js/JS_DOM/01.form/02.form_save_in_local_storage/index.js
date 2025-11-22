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

  // Save each value as its own key-value pair in localStorage
  localStorage.setItem("name", nameValue);
  localStorage.setItem("email", emailValue);
  localStorage.setItem("age", ageValue);

  console.log("Saved to localStorage:", {
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
    age: localStorage.getItem("age"),
  });
});
