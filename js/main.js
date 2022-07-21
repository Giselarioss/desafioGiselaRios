let ingresarNombre = prompt('Ingresa tu nombre');
let ingreasarMail = prompt('Bienvenida/o ' + ingresarNombre + ' ingresa tu mail y recibi las ofertas del mes');

//------------------------------------//
//--------------productos-------------//
//------------------------------------//

const carrito = [
    { id:001, producto: 'sillon', precio: 18000},
    { id:002, producto: 'silla', precio: 4000},
    { id:003, producto: 'mesa', precio: 25000},     
]

//-------------------------------------//
//----------Busqueda x precio---------//
//------------------------------------//

const filtrarPrecio = carrito.filter((el)=> el.precio < 20000);
console.log(filtrarPrecio);

//-------------------------------------//
//----------Busqueda x nombre---------//
//------------------------------------//
const filtrarNombre = carrito.filter((el)=> el.producto === 'mesa');
console.log(filtrarNombre);


//------------------------------------//
//----------------Stock---------------//
//------------------------------------//

function stockReal(stock){
    if(stock >0){
        return 'tenemos stock';
    }else{
        return ' Te pedimos disculpas no tenemos stock';
    }
}


//------------------------------------//
//---------Agregar al carrito---------//
//------------------------------------//

function agregarCarrito(producto, stock, color){                     
    const tenemosStock = stockReal(stock); 
    if(tenemosStock == 'tenemos stock'){        
        console.log(producto +' fue agregado a tu carrito de compras, en color  '+ color + '.');
    }else{ 
        if(stock == 0){            
            console.log('No tenemos stock de: '+ producto +', en una semana vuelve a entrar');

        }       
        
    }       
}

//------------------------------------//
//------Borrar producto carrito-------//
//------------------------------------//

function borrarProductoCarrito (idProducto){
    const index = carrito.findIndex((producto) => producto.id === idProducto); 
    carrito.splice(index,1)   
    console.log(carrito);  
}


//---------Llamamos la funcion para agregar al carrito------------//
agregarCarrito('sillon', 1, 'rosa');
agregarCarrito('mesa', 1,'negro');
agregarCarrito('silla', 1,'rojo');  


//---------Llamamos la funcion para borrar al carrito------------//
borrarProductoCarrito(001); 

//-----------------Suma total del carrito------------------------//
const total = (carrito.reduce((acc,el)=>acc+el.precio,0));
console.log('Total a pagar $'+ total);

// No logro restar el importe del producto con stock 0, si le pongo stock 0, igual me lo suma.


