// EJERCICIO 40: Crear una tabla dinámica
// Enunciado: Al hacer clic en el botón, se debe agregar una fila con datos a la tabla.

// PASOS:
// 1. Seleccionar la tabla y el botón con document.getElementById.
// 2. Agregar un event listener al botón para detectar 'click'.
// 3. Crear una nueva fila con celdas y agregarla a la tabla.

document.getElementById("agregarFila").addEventListener("click", function() {
    let tabla = document.getElementById("tabla");
    let fila = tabla.insertRow();
    let celda1 = fila.insertCell(0);
    let celda2 = fila.insertCell(1);
    celda1.textContent = "Nombre " + (tabla.rows.length - 1);
    celda2.textContent = Math.floor(Math.random() * 100);
});
