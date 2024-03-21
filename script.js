document.addEventListener("DOMContentLoaded", function() {
    const postList = document.getElementById('post-list');
  
    // Realizar una solicitud GET a la API
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            // Verificar si la solicitud fue exitosa
            if (!response.ok) {
                throw new Error('Ocurrió un error al obtener los datos');
            }
            // Parsear la respuesta como JSON
            return response.json();
        })
        .then(data => {
            // Procesar los datos y agregarlos a la lista de posts
            data.forEach(post => {
                const listItem = document.createElement('li');
                listItem.textContent = post.title;
                postList.appendChild(listItem);
            });
        })
        .catch(error => {
            // Manejar errores
            console.error('Error:', error);
            postList.innerHTML = '<li>Ocurrió un error al obtener los datos</li>';
        });
  });
  