// SOLUCIÓN DEL EJERCICIO 22: Cambiar imagen con múltiples opciones
let imagenes = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"];
let indice = 0;
document.getElementById("siguiente").addEventListener("click", function() {
    indice = (indice + 1) % imagenes.length;
    document.getElementById("imagen").src = imagenes[indice];
});
