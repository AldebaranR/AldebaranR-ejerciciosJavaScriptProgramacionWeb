document.getElementById('grade-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener las calificaciones ingresadas por el usuario
    const parcial1 = parseFloat(document.getElementById('parcial1').value);
    const parcial2 = parseFloat(document.getElementById('parcial2').value);
    const parcial3 = parseFloat(document.getElementById('parcial3').value);
    const examenFinal = parseFloat(document.getElementById('examen').value);
    const trabajoFinal = parseFloat(document.getElementById('trabajo').value);
    
    // Validación de entradas
    if (isNaN(parcial1) || isNaN(parcial2) || isNaN(parcial3) || isNaN(examenFinal) || isNaN(trabajoFinal) ||
        parcial1 < 0 || parcial1 > 10 || parcial2 < 0 || parcial2 > 10 || parcial3 < 0 || parcial3 > 10 ||
        examenFinal < 0 || examenFinal > 10 || trabajoFinal < 0 || trabajoFinal > 10) {
        alert('Error: Por favor, ingrese calificaciones válidas (de 0 a 10) para todos los campos.');
        return;
    }

    // Calcular el promedio de las calificaciones parciales
    const promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
    
    // Calcular la calificación final
    const calificacionFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);

    // Mostrar el resultado
    document.getElementById('result').innerHTML = 
        `Su calificación final es: ${calificacionFinal.toFixed(2)}`;
});
