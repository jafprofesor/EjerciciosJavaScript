// EJERCICIO 20: Evento de arrastrar y soltar
// Enunciado: Permitir que un div sea arrastrado y soltado en otro div.

// PASOS:
// 1. Seleccionar los elementos de arrastre y destino con document.getElementById.
// 2. Agregar un event listener al elemento de arrastre para detectar 'dragstart'.
// 3. Agregar un event listener al destino para detectar 'dragover' y evitar el comportamiento por defecto.
// 4. Agregar un event listener al destino para detectar 'drop' y mover el elemento.

document.addEventListener("DOMContentLoaded", function () {
  let drag = document.getElementById("drag");
  drag.setAttribute("draggable", "true");
  let drop = document.getElementById("drop");

  drag.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", event.target.id);
  });

  drop.addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  drop.addEventListener("drop", function (event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    drop.appendChild(document.getElementById(data));
  });
});
