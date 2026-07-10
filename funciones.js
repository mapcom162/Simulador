//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO

function calcularDisponible (ingresos,egresos){
    let total = ingresos - egresos;
    if (total < 0){
        return 0;
    } else {
        return total;
    }
}

function calcularCapacidadPago (montoDisponible){
    let total = (montoDisponible*0.5);
    return total;
}

function calcularInteresSimple (monto,tasa,plazaAnios){
    let interes = plazaAnios* monto *(tasa/100);
    return interes;
}

function calcularTotalPagar (monto,interes){
    let total = monto + interes + 100;
    return total;
}