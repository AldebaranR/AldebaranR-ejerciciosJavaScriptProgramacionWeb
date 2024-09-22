// Función para eliminar las etiquetas <script> y su contenido
function removeScriptTags(html) {
    return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
}

// Evento al hacer clic en el botón
document.getElementById('remove-script').addEventListener('click', function() {
    const htmlInput = document.getElementById('html-input').value;
    const cleanHtml = removeScriptTags(htmlInput);
    document.getElementById('result').innerText = cleanHtml;
});
