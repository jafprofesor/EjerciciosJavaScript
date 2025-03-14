// SOLUCIÓN DEL EJERCICIO 21: Contador con límite
let contador = 0;
document.getElementById("incrementar").addEventListener("click", function() {
    if (contador < 10) {
        contador++;
        document.getElementById("contador").textContent = contador;
    }
});
document.getElementById("decrementar").addEventListener("click", function() {
    if (contador > 0) {
        contador--;
        document.getElementById("contador").textContent = contador;
    }
});
