let formulario = document.getElementById('formulario');
    let nombre = document.getElementById('nombre');
    let fecha = document.getElementById('fecha');
    let descripcion = document.getElementById('descripcion');

    let Tareas=[{nombre: 'Ivan', fecha: '2021-05-03', descripcion: 'Hola Mundo'},
    {nombre: 'Angel', fecha: '2021-05-03', descripcion: 'Hola Mundo'},
    {nombre: 'Cesar', fecha: '2021-05-03', descripcion: 'Hola Mundo'}
        
    ];
    
    let listaTareas = document.getElementById("listaTareas");
    let btnGuardar = document.getElementById('btnGuardar');


    function mostrarTareas(){
        listaTareas.innerHTML = "Esta es mi lista de tareas";
        tareas.forEach((tarea,indice) => {
            listaTareas.innerHTML += 
            <div class='row'>
                <div class='col-3 border p-3'>
                    <strong>${ tarea.nombre }</strong>
                </div>
                <div class='col-3 border p-3'>
                    <strong>${ tarea.fecha }</strong>
                </div>
                <div class='col-4 border p-3'>
                    <strong>${ tarea.descripcion }</strong>
                </div>
                <div class='col-1 border p-3 text-center'>
                    <button class='btn btn-success'>Editar</button>
                </div>
                <div class='col-1 border p-3 text-center'>
                    <button class='btn btn-danger' onClick="borrarTarea(${indice})">Borrar</button>
                </div>
            </div>
            ;
        });
    }


    mostrarTareas();


    let agregarDatos = ()=> {
        let datos = {
            nombre: nombre.value,
            fecha: fecha.value,
            descripcion: descripcion.value
        }
        tareas.push(datos);
        console.log(tareas);
        mostrarTareas();
    }
    let cerrarModal = () => {
        btnGuardar.setAttribute('data-bs-dismiss', 'modal');
        btnGuardar.click();
    }
    let ResetFormulario = () => {
        nombre.value = '';
        fecha.value = '';
        descripcion.value = '';
    }
    let borraTarea = (indice)=>{
        tareas.splice(indice, 1);
    }
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        agregarDatos();
        cerrarModal();
        //ResetFormulario();
        formulario.reset();
    });