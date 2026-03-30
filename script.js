function seleccionarDestino(nombre) {
    alert("¡Excelente elección! Preparando tu reserva para " + nombre + " ✈️");
}
function calcularDescuento(cantidad, precioBase) {
    let total = cantidad * precioBase;
    if (cantidad >= 3) {
        total = total * 0.9; // 10% de descuento
        alert("¡Se ha aplicado un 10% de descuento por grupo!");
    }
    return total;
}
function realizarReserva() {
    // 1. Obtenemos los datos del HTML usando los IDs que puso Jaime
    let destino = document.getElementById("destino").value;
    let cantidad = document.getElementById("pasajeros").value;
    let precioBase = 180; // Precio base ejemplo

    // 2. Llamamos a tus funciones existentes
    seleccionarDestino(destino);
    
    let totalFinal = calcularDescuento(cantidad, precioBase);
    
    // 3. Mostramos el resultado final
    alert("El costo total para " + cantidad + " pasajero(s) es: $" + totalFinal);
}
