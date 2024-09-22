document.getElementById('discount-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener el total de la compra ingresado por el usuario
    const totalCompra = parseFloat(document.getElementById('total-compra').value);
    
    // Validación de entrada
    if (isNaN(totalCompra) || totalCompra <= 0) {
        alert('Error: Por favor, ingrese un total de compra válido.');
        return;
    }

    // Calcular el descuento (15% del total)
    const tasaDescuento = 0.15;
    const descuento = totalCompra * tasaDescuento;
    const totalFinal = totalCompra - descuento;

    // Mostrar el resultado
    document.getElementById('result').innerHTML = 
        `Descuento aplicado: $${descuento.toFixed(2)}. <br> Total a pagar: $${totalFinal.toFixed(2)}.`;
});
