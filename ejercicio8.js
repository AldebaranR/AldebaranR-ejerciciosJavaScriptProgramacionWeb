document.getElementById('utilidad-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores de salario y antigüedad
    const salarioMensual = parseFloat(document.getElementById('salario').value);
    let antiguedad = parseFloat(document.getElementById('antiguedad').value);

    // Validar si los valores son válidos
    if (isNaN(salarioMensual) || isNaN(antiguedad) || salarioMensual <= 0 || antiguedad < 0) {
        alert('Error: Ingrese valores válidos para salario y antigüedad.');
        return;
    }

    // Limitar la antigüedad a un máximo de 3 enteros y 1 decimal
    antiguedad = antiguedad.toFixed(1); // Limitar a 1 decimal

    // Definir un margen de error para evitar problemas de redondeo
    const epsilon = 0.0001;

    // Calcular el porcentaje de utilidad según la antigüedad, usando el margen de error
    let porcentajeUtilidad = 0;

    if (antiguedad < 1 - epsilon) {
        porcentajeUtilidad = 0.05;
    } else if (antiguedad >= 1 - epsilon && antiguedad < 2 - epsilon) {
        porcentajeUtilidad = 0.07;
    } else if (antiguedad >= 2 - epsilon && antiguedad < 5 - epsilon) {
        porcentajeUtilidad = 0.10;
    } else if (antiguedad >= 5 - epsilon && antiguedad < 10 - epsilon) {
        porcentajeUtilidad = 0.15;
    } else {
        porcentajeUtilidad = 0.20;
    }

    // Calcular la utilidad
    const utilidad = salarioMensual * porcentajeUtilidad;

    // Mostrar el resultado con dos decimales
    document.getElementById('result').innerHTML = `Utilidad anual: $${utilidad.toFixed(2)}`;
});

// Validar la longitud del input de antigüedad
document.getElementById('antiguedad').addEventListener('input', function(event) {
    const valor = event.target.value;

    // Expresión regular para permitir hasta 3 dígitos enteros y 1 decimal
    const regex = /^\d{0,3}(\.\d{0,1})?$/;

    if (!regex.test(valor)) {
        // Si el valor no coincide con la expresión regular, eliminamos el último carácter ingresado
        event.target.value = valor.slice(0, -1);
    }
});

