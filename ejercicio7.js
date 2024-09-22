document.getElementById('horas-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores de salario y horas trabajadas
    const salarioPorHora = parseFloat(document.getElementById('salario').value);
    const horasTrabajadas = parseFloat(document.getElementById('horas').value);

    // Validar si los valores son válidos
    if (isNaN(salarioPorHora) || isNaN(horasTrabajadas) || salarioPorHora <= 0 || horasTrabajadas <= 0) {
        alert('Error: Ingrese valores válidos para salario y horas.');
        return;
    }

    // Calcular el salario normal (hasta 40 horas)
    const horasNormales = 40;
    let pagoTotal = 0;

    // Si trabajó más de 40 horas, calcular horas extras
    if (horasTrabajadas > horasNormales) {
        const horasExtras = horasTrabajadas - horasNormales;
        const horasExtrasDobles = Math.min(horasExtras, 8); // Máximo 8 horas al doble
        const horasExtrasTriples = horasExtras > 8 ? horasExtras - 8 : 0; // El resto al triple

        // Pago por las 40 horas normales
        pagoTotal += horasNormales * salarioPorHora;

        // Pago por las horas extras al doble
        pagoTotal += horasExtrasDobles * salarioPorHora * 2;

        // Pago por las horas extras al triple
        pagoTotal += horasExtrasTriples * salarioPorHora * 3;
    } else {
        // Si no excede las 40 horas, el pago es solo por las horas trabajadas
        pagoTotal = horasTrabajadas * salarioPorHora;
    }

    // Mostrar el resultado con dos decimales
    document.getElementById('result').innerHTML = `Pago total por horas trabajadas: $${pagoTotal.toFixed(2)}`;
});
