document.getElementById('investment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener el capital ingresado por el usuario
    const capital = parseFloat(document.getElementById('capital').value);
    
    // Validación de la entrada
    if (isNaN(capital) || capital <= 0) {
        alert('Error: Por favor, ingrese un capital válido.');
        return;
    }

    // Calcular la ganancia (2% del capital)
    const tasaInteres = 0.02;
    const ganancia = capital * tasaInteres;
    const capitalFinal = capital + ganancia;

    // Mostrar el resultado
    document.getElementById('result').innerHTML = 
        `Su ganancia después de un mes será de $${ganancia.toFixed(2)}. <br> Capital total: $${capitalFinal.toFixed(2)}`;
});
