
let nombre;
do {
nombre = prompt("Por favor, ingrese su nombre:");
} while (!nombre || nombre.trim() === '');
alert("Hola, " + nombre + "! Bienvenido a nuestra página web.");

const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  }
});
let reseñas = JSON.parse(localStorage.getItem('reseñas')) || [];

// Función para agregar una reseña y actualizar el almacenamiento local
function agregarReseña() {
  let nombre = prompt("Por favor, ingrese su nombre:");
  let comentario = prompt("Ingrese su reseña:");

  // Verificar si el nombre y el comentario no están vacíos
  if (nombre.trim() !== '' && comentario.trim() !== '') {
    // Crear un objeto reseña
    let nuevaReseña = {
      nombre: nombre,
      comentario: comentario
    };

    // Agregar la reseña al array
    reseñas.push(nuevaReseña);

    // Actualizar el almacenamiento local
    localStorage.setItem('reseñas', JSON.stringify(reseñas));

    // Mostrar todas las reseñas
    mostrarReseñas();
  } else {
    alert("Debe ingresar un nombre y un comentario válidos.");
  }
}

// Función para mostrar todas las reseñas en la página
function mostrarReseñas() {

  // Limpiar el contenido actual
  document.body.innerHTML = '';

  // Crear elementos para cada reseña y agregarlos al cuerpo del documento
  reseñas.forEach((res) => {
    let elementoReseña = document.createElement('div');
    elementoReseña.innerHTML = `<strong>${res.nombre}:</strong> ${res.comentario}`;
    document.body.appendChild(elementoReseña);
  });

  // Agregar el botón para agregar reseñas
  let botonAgregar = document.createElement('button');
  botonAgregar.textContent = 'Agregar Reseña';
  botonAgregar.onclick = agregarReseña;
  document.body.appendChild(botonAgregar);
}


mostrarReseñas();