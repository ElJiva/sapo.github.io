let formulario = document.getElementById('formulario');
let formularioEditar = document.getElementById('formularioEditar');
let nombre = document.getElementById('nombre');
let fecha = document.getElementById('fecha');
let descripcion = document.getElementById('descripcion');
let imagen = document.getElementById('imagen');
let video = document.getElementById('video');
let idTarea = document.getElementById('idTarea');

let tareas = [
    {
        nombre: "Rick",
        fecha: "0003-09-15",
        descripcion: "Megagenius scientist whose alcoholism and reckless.",
        imagen: "../Proyecto10/img_productos/rick.jpg",
        video: "rickvideo.mp4",
        audio: "Rick and Morty.mp3"
    },
    {
        nombre: "Morty",
        fecha: "2004-07-25",
        descripcion: "Ricks grandson who is often dragged into his grandfather's misadventures.",
        imagen: "../Proyecto10/img_productos/morty.jpg", 
        video: "mortyvideo.mp4",
        audio: "Rick and Morty.mp3"
    },
    {
        nombre: "Mr.Poopybutthole",
        fecha: "2002-06-16",
        descripcion: "One of Ricks best friends. ",
        imagen: "../Proyecto10/img_productos/mrpoopy.jpg",
        video: "Mrpoopyvideo.mp4",
        audio: "Rick and Morty.mp3"
    }
];


let listaTareas = document.getElementById("listaTareas");
let btnGuardar = document.getElementById('btnGuardar');
let btnGuardarEditar = document.getElementById('btnGuardarEditar');

function mostrarTareas() {
    listaTareas.innerHTML = "";
    tareas.forEach((tarea, indice) => {
        listaTareas.innerHTML += `
        <div class='row'>
            <div class='col nombre-col border p-3'>
                <strong>${tarea.nombre}</strong>
            </div>
            <div class='col fecha-col border p-3'>
                <strong>${tarea.fecha}</strong>
            </div>
            <div class='col-3 border p-3'>
                <strong>${tarea.descripcion}</strong>
            </div>
            <div class='col-2 border p-3'>
                ${tarea.imagen ? `<img src="${tarea.imagen}" alt="Imagen" style="width: 100%;">` : ""}
            </div>
            <div class='col-2 border p-3'>
                ${tarea.video ? `<video src="${tarea.video}" controls style="width: 100%;"></video>` : ""}
            </div>
            <div class='col-2 border p-3'>
            ${tarea.video ? `<audio controls><source src="${tarea.audio}" ></audio>` : ""}
             </div>

            <div class='col-1 border p-3 text-center'>
                <button class='btn btn-success' data-bs-toggle="modal" data-bs-target="#editarTarea" onclick="editarTarea(${indice})">Editar</button>
            </div>
            <div class='col-1 border p-3 text-center'>
                <button class='btn btn-danger' onClick="borrarTarea(${indice})">Borrar</button>
            </div>
        </div>
        `;
    });
}

mostrarTareas();


let editarTarea = (indice) => {
    nombreEditar.value = tareas[indice].nombre;
    fechaEditar.value = tareas[indice].fecha;
    descripcionEditar.value = tareas[indice].descripcion;
    idTarea.value = indice;
};

formularioEditar.addEventListener("submit", (e) => {
    e.preventDefault();
    let indice = idTarea.value;
    tareas[indice].nombre = nombreEditar.value;
    tareas[indice].fecha = fechaEditar.value;
    tareas[indice].descripcion = descripcionEditar.value;
    mostrarTareas();
    cerrarModalEditar();
});

let agregarDatos = () => {
    let imgSrc = imagen.files[0] ? URL.createObjectURL(imagen.files[0]) : "";
    let videoSrc = video.files[0] ? URL.createObjectURL(video.files[0]) : "";

    let datos = {
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value,
        imagen: imgSrc,
        video: videoSrc
    };
    tareas.push(datos);
    mostrarTareas();
};

let cerrarModal = () => {
    btnGuardar.setAttribute("data-bs-dismiss", "modal");
    btnGuardar.click();
};

let cerrarModalEditar = () => {
    btnGuardarEditar.setAttribute("data-bs-dismiss", "modal");
    btnGuardarEditar.click();
};

let borrarTarea = (indice) => {
    tareas.splice(indice, 1);
    console.log(tareas);
    mostrarTareas();
};

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    agregarDatos();
    cerrarModal();
    formulario.reset();
});
