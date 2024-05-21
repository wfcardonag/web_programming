window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    llenarTabla();
});

function llenarTabla() {
    var personas = JSON.parse(localStorage.getItem("listaPersonas"));
    if(personas) {
        for (let index = 0; index < personas.length; index++) {
            adicionarFila(personas[index])
        }
    }
}

function adicionarFila(persona) {
    var fila = `
        <tr>
            <td>${persona.nombre}</td>
            <td>${persona.apellido}</td>
            <td>${persona.edad}</td>
            <td>${persona.tipoId}</td>
            <td>${persona.numeroId}</td>
            <td>
                <button onclick="editarFila(this)">Editar</button>
                <button onclick="eliminarFila(this)">Eliminar</button>
            </td>
        </tr>           
        `;
    var tabla = document.getElementById("bodyPersona").innerHTML += fila;
}

function editarFila(botonEditar) {
    let fila = botonEditar.parentElement.parentElement; //leer fila
    let celdas = fila.getElementsByTagName("td"); //obtener celdas de la fila

    document.getElementById("nombrePersona").value = celdas[0].innerHTML;
    document.getElementById("apellidoPersona").value = celdas[1].innerHTML;
    document.getElementById("edadPersona").value = celdas[2].innerHTML;
    document.getElementById("tipoIdPersona").value = celdas[3].innerHTML;
    document.getElementById("numeroIdPersona").value = celdas[4].innerHTML;

    let id = celdas[4].innerHTML; //Obtener el id, dado que está en la posición 4 del array

    //Obtener BD
    let personas = JSON.parse(localStorage.getItem("listaPersonas"));
    //Filtramos por la información diferente a la del id
    let personasModificada = personas.filter(persona => persona.numeroId !== id);
    
    //Asignar la nueva base de datos
    localStorage.setItem("listaPersonas", JSON.stringify(personasModificada));

    fila.remove();
}

function eliminarFila(botonEliminar) {
    let confirmacion = confirm("¿Está seguro de eliminar el registro?");
    if(confirmacion) {
        let fila = botonEliminar.parentElement.parentElement; //leer fila
        let celdas = fila.getElementsByTagName("td"); //obtener celdas de la fila
        let id = celdas[4].innerHTML; //Obtener el id, dado que está en la posición 4 del array

        //Obtener BD
        let personas = JSON.parse(localStorage.getItem("listaPersonas"));
        //Filtramos por la información diferente a la del id
        let personasModificada = personas.filter(persona => persona.numeroId !== id);
        
        //Asignar la nueva base de datos
        localStorage.setItem("listaPersonas", JSON.stringify(personasModificada));

        
        fila.remove();
        alert("Registro eliminado");
    }
}

function guardarPersona() {
    let nombre = document.getElementById("nombrePersona").value;
    let apellido = document.getElementById("apellidoPersona").value;
    let edad = document.getElementById("edadPersona").value;
    let tipoId = document.getElementById("tipoIdPersona").value;
    let numeroId = document.getElementById("numeroIdPersona").value;

    if(nombre == "" ||
        apellido == "" ||
        edad == "" ||
        tipoId == "" ||
        numeroId == ""
    ) {
        alert("Por favor diligencie toda la información");
    } else {
        
        alert("Guardado exitosamente!");
        document.getElementById("nombrePersona").value = "";
        document.getElementById("apellidoPersona").value = "";
        document.getElementById("edadPersona").value = "";
        document.getElementById("tipoIdPersona").value = "";
        document.getElementById("numeroIdPersona").value = "";

        let persona = {
            nombre:nombre,
            apellido:apellido,
            edad:edad,
            tipoId:tipoId,
            numeroId:numeroId
        };
        adicionarFila(persona);
        var personas = JSON.parse(localStorage.getItem("listaPersonas"));
        if(personas) {
            personas.push(persona);
            localStorage.setItem("listaPersonas", JSON.stringify(personas));
        } else {
            localStorage.setItem("listaPersonas", JSON.stringify([persona]));
        }
    }


    console.log(nombre);
    console.log(apellido);
    console.log(edad);
    console.log(tipoId);
    console.log(numeroId);
    

}