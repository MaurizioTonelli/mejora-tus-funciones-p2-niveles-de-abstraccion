const textoTarea = document.querySelector("#texto-tarea");
const prioridadTarea = document.querySelector("#prioridad-tarea");
const agregarTareaBoton = document.querySelector("#agregar-tarea");
const ordenarTareasBoton = document.querySelector("#ordernar-tareas");

let listaTareas = document.querySelector("#lista-tareas");

let listaDeTareas = [];

agregarTareaBoton.addEventListener("click", () => {
  agregarTarea(textoTarea.value, prioridadTarea.value);
});

ordenarTareasBoton.addEventListener("click", () => {
  ordenarTareas();
});

function agregarTarea(nombre, prioridad) {
  agregarTareaAListaDeTareas({ nombre, prioridad });
  borrarListaDeTareas();
  actualizarListaDeTareas();
}

function ordenarTareas() {
  ordenarListaDeTareas();
  borrarListaDeTareas();
  actualizarListaDeTareas();
}

function ordenarListaDeTareas() {
  listaDeTareas.sort((a, b) => (a.nombre > b.nombre ? 1 : -1));
}

function agregarTareaAListaDeTareas(tarea) {
  listaDeTareas.push({ nombre: tarea.nombre, prioridad: tarea.prioridad });
}

function borrarListaDeTareas() {
  listaTareas.innerHTML = "";
}

function actualizarListaDeTareas() {
  listaDeTareas.forEach((tarea) => {
    agregarTareaAPagina(tarea);
  });
}

function agregarTareaAPagina(tarea) {
  listaTareas.appendChild(construirHtmlDeTarea(tarea));
}

function construirHtmlDeTarea(tarea) {
  let tareaArticle = document.createElement("article");
  tareaArticle.classList.add("tasks__task");

  let nombreTareaSpan = document.createElement("span");
  nombreTareaSpan.classList.add("tasks__name");
  nombreTareaSpan.textContent = tarea.nombre;

  let prioridadTareaSpan = document.createElement("span");
  prioridadTareaSpan.classList.add("tasks__priority");
  prioridadTareaSpan.textContent = tarea.prioridad;

  tareaArticle.appendChild(nombreTareaSpan);
  tareaArticle.appendChild(prioridadTareaSpan);

  return tareaArticle;
}
