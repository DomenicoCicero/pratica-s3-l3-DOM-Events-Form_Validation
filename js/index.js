const input = document.querySelector("input");
const buttonAggiungi = document.querySelector(".btn-input");
const divTaskList = document.querySelector(".task-list");
const lista = document.querySelector(".task-list ol");

buttonAggiungi.addEventListener("click", e => {
  const listElement = document.createElement("li");
  listElement.className = "li-list-task";
  listElement.innerText = input.value;
  const buttonElimina = document.createElement("button");
  buttonElimina.type = "button";
  buttonElimina.innerText = "Elimina";
  listElement.appendChild(buttonElimina);
  lista.appendChild(listElement);
  listElement.addEventListener("click", e => {
    e.currentTarget.style = "text-decoration: line-through";
  });
  buttonElimina.addEventListener("click", e => {
    e.target.parentNode.remove();
  });
});

console.log(listElements);
