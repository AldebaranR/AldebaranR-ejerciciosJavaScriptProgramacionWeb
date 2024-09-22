document.getElementById('commission-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener el sueldo base y las ventas ingresadas por el usuario
    const sueldoBase = parseFloat(document.getElementById('base-salary').value);
    const venta1 = parseFloat(document.getElementById('sale1').value);
    const venta2 = parseFloat(document.getElementById('sale2').value);
    const venta3 = parseFloat(document.getElementById('sale3').value);

    // Validación de entradas
    if (isNaN(sueldoBase) || sueldoBase <= 0 || isNaN(venta1) || venta1 < 0 || isNaN(venta2) || venta2 < 0 || isNaN(venta3) || venta3 < 0) {
        alert('Error: Por favor, ingrese valores válidos para el sueldo base y las ventas.');
        return;
    }

    // Calcular la comisión (10% de las ventas)
    const tasaComision = 0.10;
    const comisionTotal = (venta1 + venta2 + venta3) * tasaComision;
    const salarioTotal = sueldoBase + comisionTotal;

    // Mostrar el resultado
    document.getElementById('result').innerHTML = 
        `Comisiones ganadas: $${comisionTotal.toFixed(2)}. <br> Sueldo total: $${salarioTotal.toFixed(2)}`;
});
