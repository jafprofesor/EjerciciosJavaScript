// SOLUCIÓN DEL EJERCICIO 5: Eliminar elementos de una lista
document.querySelectorAll(".eliminar").forEach((boton) => {
  // Seleccionamos todos los botones con la clase "eliminar"
  boton.addEventListener("click", function () {
    // Añadimos un evento click a cada botón
    this.parentNode.remove(); // Eliminamos el nodo padre del botón
  });
});

// Sin utilizar forEach
// const botones = document.querySelectorAll(".eliminar");
// for (let i = 0; i < botones.length; i++) {
//   botones[i].addEventListener("click", function () {
//     this.parentNode.remove();
//   });
// }
