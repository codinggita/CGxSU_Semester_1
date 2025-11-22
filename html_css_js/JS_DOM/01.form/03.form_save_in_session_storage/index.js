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

  // Save each value as its own key-value pair in sessionStorage
  sessionStorage.setItem("name", nameValue);
  sessionStorage.setItem("email", emailValue);
  sessionStorage.setItem("age", ageValue);

  console.log("Saved to sessionStorage:", {
    name: sessionStorage.getItem("name"),
    email: sessionStorage.getItem("email"),
    age: sessionStorage.getItem("age"),
  });
});
