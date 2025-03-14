// EJERCICIO 34: Cambiar texto aleatorio
// Enunciado: Al hacer clic en el botón, el texto del párrafo debe cambiar aleatoriamente.

// PASOS:
// 1. Seleccionar el párrafo y el botón con document.getElementById.
// 2. Definir un array con diferentes frases.
// 3. Usar Math.random() para seleccionar una frase al azar y mostrarla en el párrafo.

let frases = ["Hola mundo", "Bienvenido", "JavaScript es genial", "Sigue aprendiendo"];
document.getElementById("cambiarFrase").addEventListener("click", function() {
    let indice = Math.floor(Math.random() * frases.length);
    document.getElementById("frase").textContent = frases[indice];
});
