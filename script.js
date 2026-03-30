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
