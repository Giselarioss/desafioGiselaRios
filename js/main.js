//---------------------------------------------------//
//------------------Array de objetos----------------//
//--------------------------------------------------//

let productos = [
    { id:001, nombre: 'Sillon Mand', precio: 80000, img:'imagenes/sillon/sillon.png', categoria: 'Sillon', stock: 1},
    { id:002, nombre: 'Sillon Candy', precio: 60000, img:'imagenes/sillon/sillon2.png', categoria: 'Sillon',stock:1},
    { id:003, nombre: 'Sillon Matt', precio: 47000, img:'imagenes/sillon/sillon3.png', categoria: 'Sillon',stock: 1},
    { id:004, nombre: 'Sillon Sindy', precio: 80000, img:'imagenes/sillon/sillon4.png', categoria: 'Sillon',stock:1},
    { id:005, nombre: 'Sillon Ted', precio: 90000, img:'imagenes/sillon/sillon5.png', categoria: 'Sillon',stock: 1},
    { id:006, nombre: 'Sillon Thuk', precio: 70000, img:'imagenes/sillon/sillon6.png', categoria: 'Sillon',stock: 1},
    { id:007, nombre: 'Sillon Grace', precio: 80000, img:'imagenes/sillon/sillon8.png', categoria: 'Sillon',stock: 1},
    { id:010, nombre: 'Sillon Furt', precio: 90000, img:'imagenes/sillon/sillon9.png', categoria: 'Sillon',stock: 1},
    { id:011, nombre: 'Sillon Huk', precio: 75000, img:'imagenes/sillon/sillon10.png', categoria: 'Sillon',stock: 1},
    { id:012, nombre: 'Sillon Morf', precio: 87000, img:'imagenes/sillon/sillon11.png', categoria: 'Sillon',stock: 1},
    { id:013, nombre: 'Sillon Mali', precio: 76000, img:'imagenes/sillon/sillon12.png', categoria: 'Sillon',stock: 1},
    { id:014, nombre: 'Sillon Lou', precio: 80000, img:'imagenes/sillon/sillon15.png', categoria: 'Sillon',stock: 1},
    { id:015, nombre: 'Silla Yug', precio: 79000, img:'imagenes/silla/silla.png', categoria: 'Silla',stock: 1},
    { id:016, nombre: 'Silla Wind', precio: 64000, img:'imagenes/silla/silla1.png', categoria: 'Silla',stock: 1},
    { id:017, nombre: 'Silla Meli', precio: 83000, img:'imagenes/silla/silla2.png', categoria: 'Silla',stock: 1},
    { id:020, nombre: 'Silla Frut', precio: 35000, img:'imagenes/silla/silla3.png', categoria: 'Silla',stock: 1},
    { id:021, nombre: 'Silla Xyl', precio: 47000, img:'imagenes/silla/silla4.png', categoria: 'Silla',stock: 1},
    { id:022, nombre: 'Silla Grey', precio: 48000, img:'imagenes/silla/silla5.png', categoria: 'Silla',stock: 1},
    { id:023, nombre: 'Mesa Sam', precio: 99000, img:'imagenes/mesa/mesa1.png', categoria: 'Mesa',stock: 1},
    { id:024, nombre: 'Mesa Matt', precio: 89000, img:'imagenes/mesa/mesa2.png', categoria: 'Mesa',stock: 1},
    { id:025, nombre: 'Mesa Saum', precio: 99000, img:'imagenes/mesa/mesa3.png', categoria: 'Mesa',stock: 1},
    { id:026, nombre: 'Mesa Dot', precio: 89000, img:'imagenes/mesa/mesa4.png', categoria: 'Mesa',stock: 1},
    { id:027, nombre: 'Mesa Frut', precio: 79000, img:'imagenes/mesa/mesa5.png', categoria: 'Mesa',stock: 1},
    { id:030, nombre: 'Mesa Saim', precio: 69000, img:'imagenes/mesa/mesa6.png', categoria: 'Mesa',stock: 1},
    { id:031, nombre: 'Mesa Ros', precio: 89000, img:'imagenes/mesa/mesa7.png', categoria: 'Mesa',stock: 1},
    { id:032, nombre: 'Mesa Will', precio: 87000, img:'imagenes/mesa/mesa8.png', categoria: 'Mesa',stock: 1},
    { id:033, nombre: 'Mesa Ann', precio: 95000, img:'imagenes/mesa/mesa9.png', categoria: 'Mesa',stock: 1},
    { id:034, nombre: 'Mesa Drey', precio: 93000, img:'imagenes/mesa/mesa10.png', categoria: 'Mesa',stock: 1},
    { id:035, nombre: 'Mesa Jous', precio: 91000, img:'imagenes/mesa/mesa11.png', categoria: 'Mesa',stock: 1},
    { id:036, nombre: 'Puff Rey', precio: 35000, img:'imagenes/puff/puff1.png', categoria: 'Puff',stock: 1},
    { id:037, nombre: 'Puff Tam', precio: 35000, img:'imagenes/puff/puff3.png', categoria: 'Puff',stock: 1},
    { id:040, nombre: 'Puff Rous', precio: 45000, img:'imagenes/puff/puff4.png', categoria: 'Puff',stock: 1},
    { id:041, nombre: 'Puff Guth', precio: 37000, img:'imagenes/puff/puff5.png', categoria: 'Puff',stock: 1},
    { id:042, nombre: 'Puff Ray', precio: 38000, img:'imagenes/puff/puff6.png', categoria: 'Puff',stock: 1},
    { id:043, nombre: 'Puff Fres', precio: 25000, img:'imagenes/puff/puff7.png', categoria: 'Puff',stock: 1},
    { id:044, nombre: 'Puff Juol', precio: 35000, img:'imagenes/puff/puff8.png', categoria: 'Puff',stock: 1},
    { id:045, nombre: 'Comoda Rian', precio: 76000, img:'imagenes/comoda/comoda.png', categoria: 'Comoda',stock: 1},
    { id:046, nombre: 'Comoda Velt', precio: 86000, img:'imagenes/comoda/comoda1.png', categoria: 'Comoda',stock: 1},
    { id:047, nombre: 'Comoda Ram', precio: 66000, img:'imagenes/comoda/comoda2.png', categoria: 'Comoda',stock: 1},
    { id:050, nombre: 'Comoda Mut', precio: 79000, img:'imagenes/comoda/comoda3.png', categoria: 'Comoda',stock: 1},
    { id:051, nombre: 'Comoda Sut', precio: 65000, img:'imagenes/comoda/comoda4.png', categoria: 'Comoda',stock: 1},
    { id:052, nombre: 'Comoda Colm', precio: 68000, img:'imagenes/comoda/comoda5.png', categoria: 'Comoda',stock: 1},         
]


//---------------------------------------------------//
//------------------------DOM------------------------//
//--------------------------------------------------//
let carritoIcono = document.querySelector("#carrito")
let carrito = document.querySelector(".mi-carrito")
let precioTotal = document.getElementById("precioTotal")
let contadorCarrito = document.getElementById("contadorCarrito")
let botonComprar = document.getElementById("btnComprar")


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

productos.forEach((producto) => {
    const div = document.createElement("div")
    div.classList.add("caja-carrito")
    /* Desestructuro el objeto */
    let { id, nombre, precio, img} = producto
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

//---------------------------------------------------//
//-----------------Agregar al carrito----------------//
//--------------------------------------------------//
const agregarAlCarrito = (prodId) => {    
    const existe = carro.some(prod => prod.id === prodId)    
    if (existe) {
        const prod = carro.map(prod => {
            //------ Operador and -------//
            prod.id === prodId && prod.stock++
        })
    }    
    else {
        const item = productos.find((prod) => prod.id === prodId)
        item.stock = 1
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
    const item = carro.find((prod) => prod.id === prodId)    
    const index = carro.indexOf(item)    
    carro[index].cantidad = 0
    //------ Elimino el producto del array--------//
    carro.splice(index, 1)
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
        let { img, nombre, precio, stock, id } = prod
        div.innerHTML = `
        <tr class="d-flex">
            <th><img class="img-modal" src='${img}' alt="producto 1"></th>                    
            <th class="prod-modal text-center" style="font-family:"great">${nombre}</th>
            <div id="precioCarrito" class="precio-carrito precio-modal">$${precio}</div>     
            <th><input readonly = "readonly" id="cantidadCarrito" type="number" value="${stock}" class="cantidad-carrito"><th>                 
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
    precioTotal.innerText = carro.reduce((acc, prod) => acc + prod.precio * prod.stock, 0)
}