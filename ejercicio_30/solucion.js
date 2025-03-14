// EJERCICIO 30: Simulador de carrito de compras
// Enunciado: Al hacer clic en un botón de producto, su precio se suma al total.

// PASOS:
// 1. Seleccionar los botones de producto y el total con document.getElementById.
// 2. Agregar un event listener a cada botón para detectar 'click'.
// 3. Usar dataset para obtener el precio del producto y sumarlo al total.

let total = 0;
document.querySelectorAll(".producto").forEach(boton => {
    boton.addEventListener("click", function() {
        let precio = parseInt(this.dataset.precio);
        total += precio;
        document.getElementById("total").textContent = total;
    });
});
