document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener la fecha de nacimiento ingresada por el usuario
    const fechaNacimiento = new Date(document.getElementById('fecha-nacimiento').value);
    
    // Validar si la fecha es válida
    if (isNaN(fechaNacimiento.getTime())) {
        alert('Error: Por favor, ingrese una fecha válida.');
        return;
    }

    // Obtener la fecha actual
    const fechaActual = new Date();
    
    // Calcular la edad
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    const mesActual = fechaActual.getMonth();
    const diaActual = fechaActual.getDate();
    const mesNacimiento = fechaNacimiento.getMonth();
    const diaNacimiento = fechaNacimiento.getDate();
    
    // Verificar si aún no ha cumplido años en el año actual
    if (mesNacimiento > mesActual || (mesNacimiento === mesActual && diaNacimiento > diaActual)) {
        edad--;
    }

    // Mostrar el resultado
    document.getElementById('result').innerHTML = `Su edad es: ${edad} años.`;
});
