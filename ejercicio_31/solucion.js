// EJERCICIO 31: Cambiar el tamaño del texto
// Enunciado: Al hacer clic en los botones, el tamaño del texto debe aumentar o disminuir.

// PASOS:
// 1. Seleccionar el párrafo y los botones con document.getElementById.
// 2. Agregar event listeners a los botones para detectar 'click'.
// 3. Modificar la propiedad style.fontSize del párrafo.

let texto = document.getElementById("texto");

document.getElementById("aumentar").addEventListener("click", function() {
    let tamano = parseInt(window.getComputedStyle(texto).fontSize);
    texto.style.fontSize = (tamano + 2) + "px";
});

document.getElementById("disminuir").addEventListener("click", function() {
    let tamano = parseInt(window.getComputedStyle(texto).fontSize);
    texto.style.fontSize = (tamano - 2) + "px";
});
