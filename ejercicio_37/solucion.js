// EJERCICIO 37: Barra de progreso dinámica
// Enunciado: Al hacer clic en el botón, la barra de progreso debe avanzar hasta llegar al 100%.

// PASOS:
// 1. Seleccionar la barra de progreso y el botón con document.getElementById.
// 2. Agregar un event listener al botón para detectar 'click'.
// 3. Usar setInterval para incrementar el valor de la barra hasta 100.

document.getElementById("incrementar").addEventListener("click", function() {
    let progreso = document.getElementById("progreso");
    let valor = 0;
    let intervalo = setInterval(function() {
        if (valor >= 100) {
            clearInterval(intervalo);
        } else {
            valor += 10;
            progreso.value = valor;
        }
    }, 500);
});
