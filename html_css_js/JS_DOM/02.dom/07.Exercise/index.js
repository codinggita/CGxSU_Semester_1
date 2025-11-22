const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
  const text = itemInput.value;

  if (text === "") {
    return; // do nothing if input is empty
  }

  const li = document.createElement("li");
  li.textContent = text;

  todoList.appendChild(li);

  itemInput.value = ""; // clear input
});

// clear all items from the list
clearBtn.addEventListener("click", () => {
  todoList.innerHTML = "";
});
