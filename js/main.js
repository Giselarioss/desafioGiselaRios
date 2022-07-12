
//------------------------------------//
//---------Agregar al carrito---------//
//------------------------------------//

function agregarCarrito(producto, color, precio, stock){          
    const tenemosStock = stockReal(stock);
    if(tenemosStock == 'tenemos stock'){
        console.log('Producto '+ producto +' fue agregado a tu carrito en color '+ color + ' cuesta $'+ precio + ' por unidad');
    }else{
        console.log('No tenemos stock de: '+ producto);
    }  
}
console.log('Tenga en cuenta que el tiempo de fabricacion son 35 dias')

//------------------------------------//
//----------------Stock---------------//
//------------------------------------//

function stockReal(stock){
    if(stock >0){
        return 'tenemos stock';
    }else{
        return ' Te pedimos disculpas no tenemos stock'
    }
}

//------------------------------------//
//-Contador de cliente para promocion-//
//------------------------------------//
for (let i = 1; i <= 3; i++) {
    let ingresarNombre = prompt('Ingresa tu nombre');
    let mail = prompt('Bienvenida/o ' + ingresarNombre + ' ingresa tu mail y recibi las ofertas del mes');
    
    //----Llamamos la funcion------------//
    agregarCarrito('sillon', 'blanco', 18000, 1);
    agregarCarrito('mesa', 'gris', 25000, 0);
    agregarCarrito('silla', 'rojo', 4000, 1);
    agregarCarrito('sillon', 'negro', 18000, 2)

    if(i == 3){
        alert('Felicitaciones eres nuestro cliente numero 3 y te regalamos un %10 off')
    }
    
}    











