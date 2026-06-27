const submitFunction = (event) => {
    if (!validarFormulario()) {
        event.preventDefault(); // Evita que el formulario se envíe si la validación falla
    } else {
        event.preventDefault(); // Evita que el formulario se envíe para poder mostrar el mensaje de éxito

        alert(
            'Los datos enviados fueron: \n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n' +
            'Apellido: ' + document.getElementById('apellido').value + '\n' +
            'Documento: ' + document.getElementById('documento').value + '\n' +
            'Email: ' + document.getElementById('email').value + '\n' +
            'Edad: ' + document.getElementById('edad').value + '\n' +
            'Actividad: ' + document.getElementById('actividad').value + '\n' +
            'Nivel de Estudios: ' + document.getElementById('nivelEstudios').value + '\n'
            );
    }
}
   

document.getElementById("formulario").addEventListener("submit", submitFunction); // escucha el evento submit del formulario y llama a la función submitFunction cuando se envía el formulario

function validarFormulario() {

    // Validación de los campos de texto (Nombre, Apellido, Documento)
    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionExitosa = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById(`error${campo.name.charAt(0).toUpperCase() + campo.name.slice(1)}`); // Se obtiene el elemento de error correspondiente al campo actual
        
        if (campo.value.trim() === '') {
            mostrarError(errorCampo, `El campo ${campo.name} es obligatorio.`);
            validacionExitosa = false;
        } else if (campo.value.length > 0 && campo.value.length < 3) {
            mostrarError(errorCampo, `El campo ${campo.name} debe tener al menos 3 caracteres.`);
            validacionExitosa = false;
        } else {
            ocultarError(errorCampo);
        }
    })

    // Validación del campo email
    const campoEmail = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campoEmail.value)) {
        mostrarError(errorEmail, 'El campo email debe tener un formato válido.');
        validacionExitosa = false;
    } else {
        ocultarError(errorEmail);
    }


    // Validación del campo edad
    const campoEdad = document.getElementById('edad');
    let errorEdad = document.getElementById('errorEdad');

    if (campoEdad.value < 18) {
        mostrarError(errorEdad, '¡Debes ser mayor de edad para registrarte!');
        validacionExitosa = false;
    } else {
        ocultarError(errorEdad);
    }

    // Validación de la Actividad
    const campoActividad = document.getElementById('actividad');
    let errorActividad = document.getElementById('errorActividad');

    if (campoActividad.value === '') {
        mostrarError(errorActividad, 'Debes seleccionar una actividad.');
        validacionExitosa = false;
    } else {
        ocultarError(errorActividad);
    }

    // Validación Nivel de Estudios
    const campoEstudios = document.getElementById('nivelEstudios');
    let errorEstudios = document.getElementById('errorNivelEstudios');

    if (campoEstudios.value === '') {
        mostrarError(errorEstudios, 'Debes seleccionar un nivel de estudios.');
        validacionExitosa = false;
    } else {
        ocultarError(errorEstudios);
    }

    // Validar los términos y condiciones
    const campoTerminos = document.getElementById('terminos');
    let errorTerminos = document.getElementById('errorTerminos');

    if (!campoTerminos.checked) {
        mostrarError(errorTerminos, 'Debes aceptar los términos y condiciones.');
        validacionExitosa = false;
    } else {
        ocultarError(errorTerminos);
    }

    return validacionExitosa; // Se retorna el resultado de la validación (true si todos los campos son válidos, false si hay algún error)
}


const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "none";
}


