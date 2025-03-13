// SOLUCIÓN EJERCICIO 22
const parrafos = document.getElementsByClassName("texto");
const botones = document.getElementsByClassName("boton");

botones[0].addEventListener("click", () => {
  parrafos[0].textContent = "Texto modificado con getElementsByClassName";
});
