// EJERCICIO 33: Reproducir y pausar un audio
// Enunciado: Al hacer clic en los botones, el audio debe reproducirse o pausarse.

// PASOS:
// 1. Seleccionar el elemento audio y los botones con document.getElementById.
// 2. Agregar event listeners a los botones para detectar 'click'.
// 3. Usar los métodos play() y pause() del elemento audio.

let audio = document.getElementById("audio");

document.getElementById("play").addEventListener("click", function() {
    audio.play();
});

document.getElementById("pause").addEventListener("click", function() {
    audio.pause();
});
