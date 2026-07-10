//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO

function calcularDisponible (ingresos,egresos){
    let total = ingresos - egresos;
    if (total < 0){
        return 0;
    } else {
        return total;
    }
}

