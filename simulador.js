//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular(){
    let cmpIngresos = document.getElementById("txtIngresos");
    let ingresos = parseFloat(cmpIngresos.value);

    let cmpEgresos = document.getElementById("txtEgresos");
    let egresos = parseFloat(cmpEgresos.value);

    let disponible = calcularDisponible(ingresos,egresos).toFixed(2);

    let spnDisponible = document.getElementById("spnDisponible");
    spnDisponible.textContent = disponible;

    let capacidadPago = calcularCapacidadPago(disponible).toFixed(2);

    let spnCapacidadPago = document.getElementById("spnCapacidadPago");
    spnCapacidadPago.textContent = capacidadPago;
}