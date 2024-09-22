document.getElementById('word-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener el texto de entrada
    const inputText = document.getElementById('palabras').value;

    // Verificar si el input está vacío
    if (!inputText.trim()) {
        alert('Error: Ingrese al menos una palabra.');
        return;
    }

    // Separar palabras por comas y eliminar espacios extra
    const palabrasArray = inputText.split(',').map(palabra => palabra.trim());

    // Crear el mapa de palabras a números
    const mapaNumeros = {
        "cero": 0,
        "uno": 1,
        "dos": 2,
        "tres": 3,
        "cuatro": 4,
        "cinco": 5,
        "seis": 6,
        "siete": 7,
        "ocho": 8,
        "nueve": 9
    };

    // Traducir palabras a números
    const numerosArray = palabrasArray.map(palabra => {
        return mapaNumeros.hasOwnProperty(palabra.toLowerCase()) ? mapaNumeros[palabra.toLowerCase()] : -1;
    });

    // Mostrar el resultado
    document.getElementById('result').innerHTML = `Resultado: [${numerosArray.join(', ')}]`;
});
