// EJERCICIO 10: Petición HTTP con Fetch
// Enunciado: Al hacer clic en el botón, obtener datos de una API y mostrarlos en pantalla.

// PASOS:
// 1. Seleccionar el botón y el div donde se mostrarán los datos con document.getElementById.
// 2. Agregar un event listener al botón para detectar 'click'.
// 3. Dentro del evento, usar fetch para obtener datos de la API.
// 4. Convertir la respuesta a JSON y mostrarla en el div.

document.getElementById("fetch").addEventListener("click", function () {
  // Se agrega un evento al botón
  fetch("https://jsonplaceholder.typicode.com/posts/1") // Se realiza la petición HTTP
    .then((response) => response.json()) // Se convierte la respuesta a JSON
    .then((data) => {
      // Se muestra el título del post en el elemento con id "resultado"
      document.getElementById("userId").textContent = "Userid: " + data.userId;
      // Se muestra el cuerpo del post en el elemento con id "resultado"
      document.getElementById("id").textContent = "Id: " + data.id;
      // Se muestra el id del post en el elemento con id "resultado"
      document.getElementById("title").textContent = "Title: " + data.title;
      // Se muestra el userId del post en el elemento con id "resultado"
      document.getElementById("body").textContent = "Body: " + data.body;
    })
    .catch((error) => console.error("Error:", error)); // Se muestra un mensaje de error en la consola
});
