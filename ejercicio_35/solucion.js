// EJERCICIO 35: Verificar edad para acceso
// Enunciado: Al ingresar la edad y hacer clic en el botón, se muestra si puede acceder o no.

// PASOS:
// 1. Seleccionar el input, botón y párrafo con document.getElementById.
// 2. Agregar un event listener al botón para detectar 'click'.
// 3. Obtener el valor del input y verificar si es mayor o menor de edad.

document.getElementById("verificar").addEventListener("click", function() {
    let edad = parseInt(document.getElementById("edad").value);
    let mensaje = edad >= 18 ? "Acceso permitido" : "Acceso denegado";
    document.getElementById("resultado").textContent = mensaje;
});
