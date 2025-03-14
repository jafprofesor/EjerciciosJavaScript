// SOLUCIÓN DEL EJERCICIO 23: Validación de formulario
document.getElementById("formulario").addEventListener("submit", function(event) {
    let nombre = document.getElementById("nombre").value;
    if (nombre.length < 3) {
        event.preventDefault();
        document.getElementById("mensaje").textContent = "El nombre debe tener al menos 3 caracteres.";
    }
});
