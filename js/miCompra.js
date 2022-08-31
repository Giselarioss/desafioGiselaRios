let contenedorResumen = document.getElementById("resumenCompra");
// Traigo el carro con los productos
carro = JSON.parse(localStorage.getItem("carro"));
console.log(carro);
// Busco el boton de comprar
let botonComprar = document.getElementById("btnComprar");


//---------------------------------------------------//
//------------------Boton comprar-------------------//
//--------------------------------------------------//
const compraProcesada = () => {

    if(carro.length == 0) {        
        Swal.fire({
            title: "Error",
            titleText: "No has seleccionado ningún producto",
            iconColor: "red",
            icon: "error",
            color: "black",
            confirmButtonText: "OK",
            confirmButtonColor: "black",
            padding: "1rem 0.3rem"
        })
        
    }
    else {       
        Swal.fire({
            title: "¡Su compra ha sido procesada!",
            iconColor: "#0263a0",
            icon: "success",
            color: "black",
            confirmButtonText: "OK",
            confirmButtonColor: "black",
            padding: "1rem 0.3rem"
        })    
        
        localStorage.removeItem("carro", JSON.stringify(carro))       
    }    
    console.log(...carro);
    carro.length = 0;
    actualizarCarrito();
}
botonComprar.addEventListener("click", compraProcesada);


//---------------------------------------------------//
//--------------------card compra-------------------//
//--------------------------------------------------//

carro.forEach((prod) => {
    contenedorResumen.innerHTML += `
    <tr>
        <th scope="row">${prod.id}</th>
        <td><img src= "${prod.img}" alt="imagen-producto" style="width:150px"></td>
        <td >${prod.nombre}</td>
        <td >${prod.cantidad}</td>
        <td >$${prod.precio}</td>       
        
    </tr> 
    `;
    localStorage.setItem("carro", JSON.stringify(carro)) 
    
})

contenedorResumen.innerHTML += `
<p class="item-cuenta"> Total de la compra: $${(carro.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0))}</p>
`;




const actualizarCarrito = () => {
    /* Vacío el contenedor cada vez que entro para que no se repita el array por cada seleccion */
    contenedorResumen.innerHTML = "";
    /* Para cada producto del carro creo una tarjeta de ese mismo producto */
    carro.forEach(() => {       
        localStorage.setItem("carro", JSON.stringify(carro));
    })    
}

