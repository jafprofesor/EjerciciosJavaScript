// EJERCICIO 27: Agregar y eliminar clases dinámicamente
// Enunciado: Al hacer clic en el botón, se debe cambiar el color de un div alternando clases CSS.

// PASOS:
// 1. Seleccionar el div y el botón con document.getElementById.
// 2. Agregar un event listener al botón para detectar 'click'.
// 3. Usar classList.toggle() para alternar una clase en el div.

document.getElementById("cambiarColor").addEventListener("click", function() {
    document.getElementById("caja").classList.toggle("color-azul");
});
