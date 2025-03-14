// EJERCICIO 36: Convertidor de unidades
// Enunciado: Al ingresar un número en metros y hacer clic en el botón, se convierte a kilómetros.

// PASOS:
// 1. Seleccionar el input, botón y párrafo con document.getElementById.
// 2. Agregar un event listener al botón para detectar 'click'.
// 3. Obtener el valor del input y convertirlo a kilómetros (dividir por 1000).

document.getElementById("convertir").addEventListener("click", function() {
    let metros = parseFloat(document.getElementById("valor").value);
    let kilometros = metros / 1000;
    document.getElementById("resultado").textContent = metros + " metros son " + kilometros + " kilómetros.";
});
