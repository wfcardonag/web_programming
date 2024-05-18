window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    llenarTabla();
});

function llenarTabla() {
    var personas = JSON.parse(localStorage.getItem("listaPersonas"));
    if(personas) {
        for (let index = 0; index < personas.length; index++) {
            const element = personas[index];
            var fila = `
            <tr>
                <td>${element.nombre}</td>
                <td>${element.apellido}</td>
                <td>${element.edad}</td>
                <td>${element.tipoId}</td>
                <td>${element.numeroId}</td>
            </tr>           
            `;
            var tabla = document.getElementById("bodyPersona").innerHTML += fila;
        }
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
        var fila = `
        <tr>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${edad}</td>
            <td>${tipoId}</td>
            <td>${numeroId}</td>
        </tr>           
        `;
        var tabla = document.getElementById("bodyPersona").innerHTML += fila;
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