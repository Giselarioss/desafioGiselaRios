//------------------------------------//
//-------Modificaciones de texto------//
//------------------------------------//

//----Cambio h1
let titulo = document.getElementById('titulo');
//----queria probar como se veia en la consola--//
titulo.innerText= 'nuevo h1';
console.log (titulo.innerText);

titulo.innerHTML= 'Muebles de diseño para tu hogar';
//---Cambio parrafo
let parrafo = document.getElementById('parrafo');
parrafo.innerHTML = 'Renova tu hogar con muebles de alta calidad';



//------------------------------------//
//--------------productos-------------//
//------------------------------------//
//---- ?? pregunta si es undefined o null devuelve array vacio, si no devuelve el valor que esta ahi
const miCarrito = JSON.parse(localStorage.getItem('miCarrito')) ?? [];
//---- modifica el numero en el carrito
document.getElementById('mi-compra').innerHTML = miCarrito.length;

const carrito = [
    { id:001, producto: 'Sillon Mandy', precio: 40000, img:'imagenes/sillon.png', categoria: 'Sillon' },
    { id:002, producto: 'Silla Novak', precio: 20000, img:'imagenes/silla.png', categoria: 'Silla'},
    { id:003, producto: 'Mesa Brow', precio: 70000, img:'imagenes/mesa.png', categoria: 'Mesa'},
    { id:004, producto: 'Comoda Tm', precio: 60000, img:'imagenes/comoda.png', categoria: 'Comoda'},     
]
//-------------------------------------//
//----------Creamos card--------------//
//------------------------------------//
let cards = document.getElementById('card');
for (const producto of carrito){
    const idButton = `add-cart${producto.id}`
    let contenedorCard = document.createElement("div");
    contenedorCard.innerHTML=`       
    <img class="card-img-top" src= ${producto.img} >
    <div class="card-body p-4">
    <div class="text-center">
    <h3 class="fw-bolder">${producto.producto}</h3>    
    <span class="text-muted">$${producto.precio}</span>    
    </div>
    </div>    
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
    <div class="text-center"><a class="btn btn-outline-dark mt-auto"id='${idButton}'href="#">Agregar al carrito</a></div>
    </div>
    </div>`;
    cards.appendChild(contenedorCard);
}


carrito.forEach((producto) =>{
    const idButton = `add-cart${producto.id}`
    document.getElementById(idButton).onclick = () => {
        miCarrito.push(producto);
        document.getElementById('mi-compra').innerHTML = miCarrito.length;
        localStorage.setItem('miCarrito', JSON.stringify(miCarrito));
        console.log('miCarrito');
    }
})

