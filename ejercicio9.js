// Variables del formulario
const form = document.getElementById('registro-form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const password = document.getElementById('password');
const comentarios = document.getElementById('comentarios');
const acepto = document.getElementById('acepto');
const mensaje = document.getElementById('mensaje');

// Regex para validar email y password
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

// Validar nombre al perder foco
nombre.addEventListener('blur', function() {
    if (nombre.value.trim() === '') {
        alert('El campo nombre es obligatorio.');
    } else if (nombre.value.length < 3) {
        alert('El nombre debe tener al menos 3 caracteres.');
    }
});

// Validar email al perder foco
email.addEventListener('blur', function() {
    if (!emailRegex.test(email.value)) {
        alert('El campo email no es válido.');
    }
});

// Validar password al perder foco
password.addEventListener('blur', function() {
    if (!passwordRegex.test(password.value)) {
        alert('La contraseña debe tener al menos 6 caracteres, una letra minúscula, una mayúscula y un dígito.');
    } else if (password.value.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
    }
});

// Validar comentarios al perder foco
comentarios.addEventListener('blur', function() {
    if (comentarios.value.trim() === '' || comentarios.value.length > 50) {
        alert('El campo comentarios es obligatorio y no debe exceder los 50 caracteres.');
    }
});

// Validar el formulario completo antes de enviarlo
form.addEventListener('submit', function(event) {
    // Resetear mensaje
    mensaje.innerHTML = '';

    // Validar todos los campos antes de enviar
    if (nombre.value.trim() === '') {
        alert('El campo nombre es obligatorio.');
        event.preventDefault();
    } else if (nombre.value.length < 3) {
        alert('El nombre debe tener al menos 3 caracteres.');
        event.preventDefault();
    } else if (!emailRegex.test(email.value)) {
        alert('El campo email no es válido.');
        event.preventDefault();
    } else if (!passwordRegex.test(password.value)) {
        alert('La contraseña debe tener al menos 6 caracteres, una letra minúscula, una mayúscula y un dígito.');
        event.preventDefault();
    } else if (password.value.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
        event.preventDefault();
    } else if (comentarios.value.trim() === '' || comentarios.value.length > 50) {
        alert('El campo comentarios es obligatorio y no debe exceder los 50 caracteres.');
        event.preventDefault();
    } else if (!acepto.checked) {
        alert('Debe aceptar las condiciones del servicio.');
        event.preventDefault();
    } else {
        mensaje.innerHTML = 'Formulario enviado correctamente.';
    }
});

