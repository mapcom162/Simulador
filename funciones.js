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

function calcularCuotaMensual (total,plazaAnios){
    let plazaMeses = (plazaAnios * 12);
    let cuotaMensual = (total/plazaMeses);
    return cuotaMensual;
}

function aprobarCredito (capacidadPago,cuotaMensual){
    if (capacidadPago > cuotaMensual){
        return true;
    } else {
        return false;
    }
}