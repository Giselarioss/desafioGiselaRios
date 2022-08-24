//---------------------------------------------------//
//------------------------DOM------------------------//
//--------------------------------------------------//
let carritoIcono = document.querySelector("#carrito")
let carrito = document.querySelector(".mi-carrito")
let precioTotal = document.getElementById("precioTotal")
let contadorCarrito = document.getElementById("contadorCarrito")
let botonComprar = document.getElementById("btnComprar")
let vaciarCarrito = document.getElementById("vaciarCarrito")


//---------------------------------------------------//
//------------------Boton comprar-------------------//
//--------------------------------------------------//
const compraProcesada = () => {

    if (carro.length == 0) {        
        Swal.fire({
            title: "Error",
            titleText: "Tienes que agregar productos al carrito",
            iconColor: "rgb(0, 82, 86)",
            icon: "error",
            color: "black",
            confirmButtonText: "OK",
            confirmButtonColor: "rgb(0, 82, 86)",
            padding: "0.3rem 0.3rem"            
        })
    }
    else {        
        Swal.fire({
            title: "¡Su compra ha sido procesada!",
            iconColor: "rgb(0, 82, 86)",
            icon: "success",
            color: "black",
            confirmButtonText: "OK",
            confirmButtonColor: "rgb(0, 82, 86)",
            padding: "0.3rem 0.3rem"
            
        })
    }
    //--------- Spread del Carrito------------//
    console.log(...carro)
    carro.length = 0
    actualizarCarrito()
}
botonComprar.addEventListener("click", compraProcesada)

//--------------------------------------------------//
//---------------Boton vaciar carrito---------------//
//--------------------------------------------------//
vaciarCarrito.addEventListener("click", function vaciar(){
    carro.length = 0;
    Toastify({
        text: "No tienes ningun producto en tu carrito de compras",
        duration: 2000,
        style: {
            background: "rgb(0, 82, 86)",            
            color: "white",
        },
        close: true,
        gravity: "bottom",
    }).showToast();
    localStorage.removeItem("carro", JSON.stringify(carro))
    actualizarCarrito();

})

//----Array en 0----//
let carro = []

//-------si habia un carrito en el storage lo traigo------//
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("carro")) {
        carro = JSON.parse(localStorage.getItem("carro"))
        actualizarCarrito()
    }
})

//---------------------------------------------------//
//-----------------------Card-----------------------//
//--------------------------------------------------//
const contenedorProductos = document.getElementById("card")
let productosTotal = [] ;
fetch('/productos.json')
    .then((response) => response.json())
    .then((productos) => {
        productos.forEach((producto) => {
            productosTotal.push({ id: `${producto.id}`, nombre: `${producto.nombre}`, precio: `${producto.precio}`, img: `${producto.img}`, categoria: `${producto.categoria}`, cantidad: `${producto.cantidad}` });

            const div = document.createElement("div");
            div.classList.add("caja-carrito");
            /* Desestructuro el objeto */
            let { id, nombre, precio, img } = producto;
            div.innerHTML = `
            <div class="card1" id= producto>
            <img class="card-img-top" src= "${img}" alt="imagen-producto">
            <div class="card-body p-4">
            <div class="producto text-center">
            <h3 class="fw-bolder titulo">${nombre}</h3>    
            <p class="precio">$${precio}</p>     
            </div>
            </div>    
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto agregar-carrito"id="agregar${id}"href="#">Agregar<img src=imagenes/carrito.png> </a></div>
            </div>    
            </div>`;
            contenedorProductos.appendChild(div)
            let boton = document.getElementById(`agregar${producto.id}`)

            /* Si clickea en el boton depende de que id tiene el producto se lo agrega al carro */
            boton.addEventListener("click", () => {
                agregarAlCarrito(producto.id)
            })
        })

    })



//---------------------------------------------------//
//-----------------Agregar al carrito----------------//
//--------------------------------------------------//
const agregarAlCarrito = (prodId) => {     
    const existe = carro.some(prod => prod.id == prodId)    
    if (existe) {
        const prod = carro.map(prod => {
            //------ Operador and -------//
            prod.id == prodId && prod.cantidad++
        })
        
        
    }    
    else {           
        const item = productosTotal.find((prod) => prod.id == prodId) 
        item.cantidad = 1
        carro.push(item)       

    }

    Toastify({
        text: "Producto agregado a tu carrito",
        duration: 1500,
        style: {            
            background: "rgb(0, 82, 86)",            
            color: "white",
        },
        close: true,
        gravity: "bottom",
    }).showToast();

    actualizarCarrito()
    
}

//---------------------------------------------------//
//------------------Eliminar producto----------------//
//--------------------------------------------------//
const eliminarDelCarrito = (prodId) => {
    const item = carro.find((prod) => prod.id == prodId)    
    const index = carro.indexOf(item)    
    carro[index].cantidad = 0
    //------ Elimino el producto del array--------//
    carro.splice(index, 1)
    localStorage.removeItem("carro", JSON.stringify(carro))
    actualizarCarrito()
    
}

const contenedorCarrito = document.getElementById("carritoContenido")

const actualizarCarrito = () => {
    //-------------------------------limpiar----------------------------------------------//
    contenedorCarrito.innerHTML = ""
    //---------------------------------------------------//
    //-----------------------Modal-----------------------//
    //--------------------------------------------------//
    carro.forEach((prod) => {
        const div = document.createElement("div")
        div.className = ("caja-carrito")
        /* Desestructuro el objeto */
        let { img, nombre, precio, cantidad, id } = prod
        div.innerHTML = `<tr>
            <td><img class="img-modal" src='${img}' alt="producto 1"></th>                    
            <td class="prod-modal">${nombre}</th>
            <div id="precioCarrito" class="precio-carrito precio-modal">$${precio}</div>     
            <td><input readonly = "readonly" id="cantidadCarrito" type="number" value="${cantidad}" class="cantidad-carrito"><th>                 
            <a class="boton-modal btn remover-carrito" onclick = "eliminarDelCarrito(${id})")"><img  src='imagenes/eliminar.png'></a>
        </tr>`
        contenedorCarrito.appendChild(div)
        //------------Guardar producto LocalStorage-----------//
        localStorage.setItem("carro", JSON.stringify(carro))
        
    })

    
    contadorCarrito.innerText = carro.length
   //---------------------------------------------------//
   //------------------Total compra--------------------//
   //--------------------------------------------------//
    precioTotal.innerText = "$"+ carro.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
}

