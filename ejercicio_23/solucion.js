// SOLUCIÓN EJERCICIO 23 - Drag and Drop
const dragElement = document.getElementById("drag");
const dropZone = document.getElementById("drop");

// Implementación completa de la funcionalidad drag and drop
dragElement.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", e.target.id);
  e.target.classList.add("dragging");
});

dragElement.addEventListener("dragend", (e) => {
  e.target.classList.remove("dragging");
});

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZone.classList.add("drag-over");
});

dropZone.addEventListener("dragleave", (e) => {
  dropZone.classList.remove("drag-over");
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  const id = e.dataTransfer.getData("text/plain");
  const draggable = document.getElementById(id);
  dropZone.appendChild(draggable);
  dropZone.classList.remove("drag-over");
});
