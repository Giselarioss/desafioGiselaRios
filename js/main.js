
//---- ?? pregunta si es undefined o null devuelve array vacio, si no devuelve el valor que esta ahi
const miCarrito = JSON.parse(localStorage.getItem('miCarrito')) ?? [];
const total = miCarrito.reduce((acc, el) => acc + el.precio, 0);
//---- modifica el numero en el carrito
document.getElementById('mi-compra').innerHTML = `${miCarrito.length}`;
document.getElementById('total-compra').innerHTML = `$${total}`;





//------------------------------------//
//--------------productos-------------//
//------------------------------------//

const carrito = [
    { id:001, producto: 'Sillon Mand', precio: 80000, img:'imagenes/sillon/sillon.png', categoria: 'Sillon' },
    { id:002, producto: 'Sillon Candy', precio: 60000, img:'imagenes/sillon/sillon2.png', categoria: 'Sillon' },
    { id:003, producto: 'Sillon Matt', precio: 47000, img:'imagenes/sillon/sillon3.png', categoria: 'Sillon' },
    { id:004, producto: 'Sillon Sindy', precio: 80000, img:'imagenes/sillon/sillon4.png', categoria: 'Sillon' },
    { id:005, producto: 'Sillon Ted', precio: 90000, img:'imagenes/sillon/sillon5.png', categoria: 'Sillon' },
    { id:006, producto: 'Sillon Thuk', precio: 70000, img:'imagenes/sillon/sillon6.png', categoria: 'Sillon' },
    { id:007, producto: 'Sillon Grace', precio: 80000, img:'imagenes/sillon/sillon8.png', categoria: 'Sillon' },
    { id:010, producto: 'Sillon Furt', precio: 90000, img:'imagenes/sillon/sillon9.png', categoria: 'Sillon' },
    { id:011, producto: 'Sillon Huk', precio: 75000, img:'imagenes/sillon/sillon10.png', categoria: 'Sillon' },
    { id:012, producto: 'Sillon Morf', precio: 87000, img:'imagenes/sillon/sillon11.png', categoria: 'Sillon' },
    { id:013, producto: 'Sillon Mali', precio: 76000, img:'imagenes/sillon/sillon12.png', categoria: 'Sillon' },
    { id:014, producto: 'Sillon Lou', precio: 80000, img:'imagenes/sillon/sillon15.png', categoria: 'Sillon' },
    { id:015, producto: 'Silla Yug', precio: 79000, img:'imagenes/silla/silla.png', categoria: 'Silla' },
    { id:016, producto: 'Silla Wind', precio: 64000, img:'imagenes/silla/silla1.png', categoria: 'Silla' },
    { id:017, producto: 'Silla Meli', precio: 83000, img:'imagenes/silla/silla2.png', categoria: 'Silla' },
    { id:020, producto: 'Silla Frut', precio: 35000, img:'imagenes/silla/silla3.png', categoria: 'Silla' },
    { id:021, producto: 'Silla Xyl', precio: 47000, img:'imagenes/silla/silla4.png', categoria: 'Silla' },
    { id:022, producto: 'Silla Grey', precio: 48000, img:'imagenes/silla/silla5.png', categoria: 'Silla' },
    { id:023, producto: 'Mesa Sam', precio: 99000, img:'imagenes/mesa/mesa1.png', categoria: 'Mesa' },
    { id:024, producto: 'Mesa Matt', precio: 89000, img:'imagenes/mesa/mesa2.png', categoria: 'Mesa' },
    { id:025, producto: 'Mesa Saum', precio: 99000, img:'imagenes/mesa/mesa3.png', categoria: 'Mesa' },
    { id:026, producto: 'Mesa Dot', precio: 89000, img:'imagenes/mesa/mesa4.png', categoria: 'Mesa' },
    { id:027, producto: 'Mesa Frut', precio: 79000, img:'imagenes/mesa/mesa5.png', categoria: 'Mesa' },
    { id:030, producto: 'Mesa Saim', precio: 69000, img:'imagenes/mesa/mesa6.png', categoria: 'Mesa' },
    { id:031, producto: 'Mesa Ros', precio: 89000, img:'imagenes/mesa/mesa7.png', categoria: 'Mesa' },
    { id:032, producto: 'Mesa Will', precio: 87000, img:'imagenes/mesa/mesa8.png', categoria: 'Mesa' },
    { id:033, producto: 'Mesa Ann', precio: 95000, img:'imagenes/mesa/mesa9.png', categoria: 'Mesa' },
    { id:034, producto: 'Mesa Drey', precio: 93000, img:'imagenes/mesa/mesa10.png', categoria: 'Mesa' },
    { id:035, producto: 'Mesa Jous', precio: 91000, img:'imagenes/mesa/mesa11.png', categoria: 'Mesa' },
    { id:036, producto: 'Puff Rey', precio: 35000, img:'imagenes/puff/puff1.png', categoria: 'Puff' },
    { id:037, producto: 'Puff Tam', precio: 35000, img:'imagenes/puff/puff3.png', categoria: 'Puff' },
    { id:040, producto: 'Puff Rous', precio: 45000, img:'imagenes/puff/puff4.png', categoria: 'Puff' },
    { id:041, producto: 'Puff Guth', precio: 37000, img:'imagenes/puff/puff5.png', categoria: 'Puff' },
    { id:042, producto: 'Puff Ray', precio: 38000, img:'imagenes/puff/puff6.png', categoria: 'Puff' },
    { id:043, producto: 'Puff Fres', precio: 25000, img:'imagenes/puff/puff7.png', categoria: 'Puff' },
    { id:044, producto: 'Puff Juol', precio: 35000, img:'imagenes/puff/puff8.png', categoria: 'Puff' },
    { id:045, producto: 'Comoda Rian', precio: 76000, img:'imagenes/comoda/comoda.png', categoria: 'Comoda'},
    { id:046, producto: 'Comoda Velt', precio: 86000, img:'imagenes/comoda/comoda1.png', categoria: 'Comoda'},
    { id:047, producto: 'Comoda Ram', precio: 66000, img:'imagenes/comoda/comoda2.png', categoria: 'Comoda'},
    { id:050, producto: 'Comoda Mut', precio: 79000, img:'imagenes/comoda/comoda3.png', categoria: 'Comoda'},
    { id:051, producto: 'Comoda Sut', precio: 65000, img:'imagenes/comoda/comoda4.png', categoria: 'Comoda'},
    { id:052, producto: 'Comoda Colm', precio: 68000, img:'imagenes/comoda/comoda5.png', categoria: 'Comoda'},         
]
//-------------------------------------//
//--------Generamos card carrito------//
//------------------------------------//
function carritoCard (){    
    miCarrito.forEach((producto) => {
        document.getElementById('card-compra').innerHTML += `        
        <tr>
            <th><img class="img-modal" src='${producto.img}'></th>            
            <th class="prod-modal text-center">${producto.producto}</th>
            <th class="precio-modal text-center"> $${producto.precio}</th>
            <a class="boton-modal btn btn-white flex-end"><img src='imagenes/eliminar.png'></a>
        </tr>`
    })
}
//-------------------------------------//
//----------Creamos card--------------//
//------------------------------------//
let cards = document.getElementById('card');
for (const producto of carrito){
    const idButton = `add-cart${producto.id}`
    let contenedorCard = document.createElement("div");
    contenedorCard.innerHTML=`
    <div class="card1">       
    <img class="card-img-top" src= ${producto.img} >
    <div class="card-body p-4">
    <div class="producto text-center">
    <h3 class="fw-bolder">${producto.producto}</h3>    
    <span>$${producto.precio}</span>    
    </div>
    </div>    
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
    <div class="text-center"><a class="btn btn-outline-dark mt-auto"id='${idButton}'href="#">Agregar<img src=imagenes/carrito.png> </a></div>
    </div>
    </div>
    </div>`;
    cards.appendChild(contenedorCard);
}
//-------------------------------------//
//-------Acciones del carrito----------//
//------------------------------------//
carrito.forEach((producto) =>{
    const idButton = `add-cart${producto.id}`
    document.getElementById(idButton).onclick = () => {
        miCarrito.push(producto);
        // se ve reflejado la cantidad del carrito en el html        
        localStorage.setItem('miCarrito', JSON.stringify(miCarrito));
        // total de la compra
        const total = miCarrito.reduce((acc, el) => acc + el.precio, 0);
        document.getElementById('mi-compra').innerHTML = `${miCarrito.length}`;
        document.getElementById('total-compra').innerHTML = `$${total}`;
        // limpiar 
        document.getElementById('card-compra').innerHTML = '';
        // Resumen de la compra  
        
        
        
    }
})

