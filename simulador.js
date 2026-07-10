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

    let cmptxtMonto = document.getElementById("txtMonto");
    let monto = parseFloat(cmptxtMonto.value);

    let cmptxtPlazo = document.getElementById("txtPlazo");
    let plazo = parseFloat(cmptxtPlazo.value);

    let cmptxtTasaInteres = document.getElementById("txtTasaInteres");
    let tasa = parseFloat(cmptxtTasaInteres.value);

    let interes = calcularInteresSimple(monto,tasa,plazo).toFixed(2);
    let interesNum = calcularInteresSimple(monto,tasa,plazo);

    let spnInteresPagar = document.getElementById("spnInteresPagar");
    spnInteresPagar.textContent = interes;

    let totalPagar = calcularTotalPagar(monto,interesNum);

    let spnTotalPrestamo = document.getElementById("spnTotalPrestamo");
    spnTotalPrestamo.textContent = totalPagar;

    let cuotaMensual = calcularCuotaMensual(totalPagar,plazo).toFixed(2);

    let spnCuotaMensual = document.getElementById("spnCuotaMensual");
    spnCuotaMensual.textContent = cuotaMensual;
}