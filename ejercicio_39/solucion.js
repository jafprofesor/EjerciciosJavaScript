// EJERCICIO 39: Buscar en una lista
// Enunciado: Al escribir en el input, se deben filtrar los elementos de la lista.

// PASOS:
// 1. Seleccionar el input y la lista con document.getElementById.
// 2. Agregar un event listener al input para detectar 'keyup'.
// 3. Filtrar los elementos de la lista y mostrar solo los que coincidan con la búsqueda.

document.getElementById("buscar").addEventListener("keyup", function() {
    let filtro = this.value.toLowerCase();
    let elementos = document.querySelectorAll("#lista li");
    elementos.forEach(elemento => {
        let texto = elemento.textContent.toLowerCase();
        elemento.style.display = texto.includes(filtro) ? "" : "none";
    });
});
