// SOLUCIÓN DEL EJERCICIO 25: Crear una lista de tareas
document.getElementById("agregar").addEventListener("click", function() {
    let tareaTexto = document.getElementById("tarea").value;
    if (tareaTexto.trim() !== "") {
        let nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = tareaTexto;
        document.getElementById("listaTareas").appendChild(nuevaTarea);
        document.getElementById("tarea").value = "";
    }
});
