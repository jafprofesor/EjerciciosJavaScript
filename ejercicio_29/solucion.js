// EJERCICIO 29: Temporizador de cuenta regresiva
// Enunciado: Al hacer clic en el botón, se inicia una cuenta regresiva de 10 a 0.

// PASOS:
// 1. Seleccionar el botón y el párrafo con document.getElementById.
// 2. Agregar un event listener al botón para detectar 'click'.
// 3. Usar setInterval para reducir el número cada segundo hasta llegar a 0.

document.getElementById("iniciar").addEventListener("click", function() {
    let tiempo = 10;
    let intervalo = setInterval(function() {
        document.getElementById("tiempo").textContent = tiempo;
        tiempo--;
        if (tiempo < 0) {
            clearInterval(intervalo);
        }
    }, 1000);
});
