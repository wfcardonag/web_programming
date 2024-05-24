window.addEventListener('load', ()=> {

});

function consultarPersona(tipo) {
    let idPersona = document.getElementById("identificadorPersona").value;
    if(tipo == 1) {
        consultarPersonaStarWarsAjax(idPersona);
    } else {
        consultarPersonaStarWarsFetch(idPersona);
    }
}

/**
 * Esta función me permite consultar la información de una persona dentro
 * del universo de Star Wars
 * @param {*} idPersona El identificado de la persona
 */
function consultarPersonaStarWarsAjax(idPersona) {
    let url = "https://www.swapi.tech/api/people/"+idPersona

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send(null);

    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const data = JSON.parse(xhr.response);
            console.log(data);
            console.log(data.result.description);

            document.getElementById("descripcionPersona").innerHTML = data.result.description;
            document.getElementById("nombrePersona").innerHTML = data.result.properties.name;

        } else {
            if(xhr.status == 404) {
                alert("Ese personaje no existe.");
            }
            console.log(`Error: ${xhr.status}`);
        }
    };
}

/**
 * Esta función me permite consultar la información de una persona dentro
 * del universo de Star Wars
 * @param {*} idPersona El identificado de la persona
 */
async function consultarPersonaStarWarsFetch(idPersona) {
    let url = "https://www.swapi.tech/api/people/"+idPersona
    const options = {
        method: 'GET'
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const data = JSON.parse(result);
        document.getElementById("descripcionPersona").innerHTML = data.result.description;
        document.getElementById("nombrePersona").innerHTML = data.result.properties.name;
        
    } catch (error) {
        console.error(error);
    }
}