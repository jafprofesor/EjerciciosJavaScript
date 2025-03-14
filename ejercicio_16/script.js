// EJERCICIO 16: Evento de scroll
// Enunciado: Cuando el usuario haga scroll dentro del div, se debe mostrar un mensaje.

// PASOS:
// 1. Seleccionar el div con document.getElementById.
// 2. Agregar un event listener al div para detectar el evento 'scroll'.
// 3. En el evento, cambiar el contenido del div para mostrar un mensaje.

let scrollBox = document.getElementById("scrollBox");

scrollBox.addEventListener("scroll", function () {
  scrollBox.textContent = "¡Has hecho scroll!";
});
