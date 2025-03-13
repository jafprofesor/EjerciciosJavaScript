// SOLUCIÓN EJERCICIO 21
const parrafo = document.getElementById('texto');
const boton = document.getElementById('boton');

boton.addEventListener('click', () => {
    parrafo.textContent = 'Texto modificado con getElementById';
});