
//Se le solicita al usuario que ingrese el precio de lo que cuesta el producto al cual se le va a calcular el IVA

let precioCosto = parseFloat (prompt("Ingrese el precio de costo del producto"));

 //Sumar IVA al producto
function CalcularIva (precioCosto) {
    return (precioCosto * 0.21)
}

// Suma del IVA al precio del producto con IVA

function SumarIva(precioCosto) {
    return (precioCosto + (precioCosto * 0.21));
}
