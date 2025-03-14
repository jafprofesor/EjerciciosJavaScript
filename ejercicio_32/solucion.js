// EJERCICIO 32: Alternar el modo oscuro
// Enunciado: Al hacer clic en el botón, se debe alternar entre modo claro y oscuro.

// PASOS:
// 1. Seleccionar el botón y el div con document.getElementById.
// 2. Agregar un event listener al botón para detectar 'click'.
// 3. Usar classList.toggle() para cambiar entre clases CSS.

document.getElementById("modoOscuro").addEventListener("click", function() {
    document.body.classList.toggle("modo-oscuro");
});
