// SOLUCIÓN DEL EJERCICIO 10: Petición HTTP con Fetch
document.getElementById("fetch").addEventListener("click", function () {
  // Se agrega un evento al botón
  fetch("https://jsonplaceholder.typicode.com/posts/1") // Se realiza la petición HTTP
    .then((response) => response.json()) // Se convierte la respuesta a JSON
    .then((data) => {
      // Se muestra el título del post en el elemento con id "resultado"
      document.getElementById("resultado").textContent =
        "Título: " + data.title; // Se muestra el título del post
    })
    .catch((error) => console.error("Error:", error)); // Se muestra un mensaje de error en la consola
});

// El funcionamiento de este código es el siguiente:
// La función fetch realiza una petición HTTP y devuelve una promesa que se resuelve con la respuesta a la petición.
// Luego, se encadenan las funciones then para procesar la respuesta y mostrar el título del post en el elemento con id "resultado".
// En caso de error, se muestra un mensaje en la consola.
// Al hacer clic en el botón con id "fetch", se ejecuta la función que realiza la petición HTTP y muestra el título del post en el elemento con id "resultado".
// El título del post se obtiene de la respuesta a la petición, que es un objeto JSON con la estructura { userId, id, title, body }.
// Se accede al título del post mediante data.title y se muestra en el elemento con id "resultado" utilizando textContent.
// En caso de error, se muestra un mensaje en la consola con el error ocurrido.
// Para probar este código, se debe tener una conexión a internet activa, ya que se realiza una petición a un servidor remoto para obtener los datos.
// Al hacer clic en el botón "Fetch Data", se mostrará el título del post en el elemento con id "resultado". Si hay algún error en la petición, se mostrará un mensaje en la consola.
// El código utiliza la API fetch para realizar una petición HTTP GET al servidor "https://jsonplaceholder.typicode.com/posts/1" y obtener un post específico.
// Luego, se convierte la respuesta a JSON y se muestra el título del post en el elemento con id "resultado".
// En caso de error, se muestra un mensaje en la consola con el error ocurrido.
// El sitio https://jsonplaceholder.typicode.com/posts/1 es una API de prueba que devuelve un post específico en formato JSON.
// Al hacer clic en el botón "Fetch Data", se obtiene el post y se muestra su título en el elemento con id "resultado".
