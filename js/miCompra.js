let contenedorResumen = document.getElementById("resumenCompra");
// Traigo el carro con los productos
carro = JSON.parse(localStorage.getItem("carro"));
console.log(carro);
// Busco el boton de comprar
let botonComprar = document.getElementById("btnComprar");



//botonComprar.addEventListener("click", compraProcesada);

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

//---------------------------------------------------//
//--------------------card compra-------------------//
//--------------------------------------------------//

carro.forEach((prod) => {
    contenedorResumen.innerHTML += `
    <tr>
        <td><img src= "${prod.img}" alt="imagen-producto" style="width:150px"></td>        
        <td class:"prod-nombre">${prod.nombre}</td>
        <td class:"prod-cantidad">${prod.cantidad}</td>
        <td class:"prod-precio">$${prod.precio}</td>        
    </tr> 
    `;
    localStorage.setItem("carro", JSON.stringify(carro)) 
    
})

contenedorResumen.innerHTML += `
<p class="item-cuenta"> Total a pagar: $${(carro.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0))}</p>
`;




const actualizarCarrito = () => {
    /* Vacío el contenedor cada vez que entro para que no se repita el array por cada seleccion */
    contenedorResumen.innerHTML = "";
    /* Para cada producto del carro creo una tarjeta de ese mismo producto */
    carro.forEach(() => {       
        localStorage.setItem("carro", JSON.stringify(carro));
    })    
}

//---------------------------------------------------//
//----------------------Tarjeta---------------------//
//--------------------------------------------------//

const tarjeta = document.querySelector('#tarjeta'),
	btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
	formulario = document.querySelector('#formulario-tarjeta'),
	numeroTarjeta = document.querySelector('#tarjeta .numero'),
	nombreTarjeta = document.querySelector('#tarjeta .nombre'),
    logoMarca = document.querySelector('#logo-marca'),
	firma = document.querySelector('#tarjeta .firma p'),
	mesExpiracion = document.querySelector('#tarjeta .mes'),
	yearExpiracion = document.querySelector('#tarjeta .year'),
	ccv = document.querySelector('#tarjeta .ccv');

// * Volteamos la tarjeta para mostrar el frente.
const mostrarFrente = () => {
	if(tarjeta.classList.contains('active')){
		tarjeta.classList.remove('active');
	}
}

// * Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
	tarjeta.classList.toggle('active');
});

// * Boton de abrir formulario
btnAbrirFormulario.addEventListener('click', () => {
	btnAbrirFormulario.classList.toggle('active');
	formulario.classList.toggle('active');
});

// * Select del mes generado dinamicamente.
for(let i = 1; i <= 12; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectMes.appendChild(opcion);
}

// * Select del año generado dinamicamente.
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectYear.appendChild(opcion);
}

// * Input numero de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNumero.value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	.replace(/([0-9]{4})/g, '$1 ')
	// Elimina el ultimo espaciado
	.trim();

	numeroTarjeta.textContent = valorInput;

	if(valorInput == ''){
		numeroTarjeta.textContent = '#### #### #### ####';

		logoMarca.innerHTML = '';
	}

	if(valorInput[0] == 4){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'logo/visa.png';
		logoMarca.appendChild(imagen);
	} else if(valorInput[0] == 5){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'logo/master.png';
		logoMarca.appendChild(imagen);
	}

	// Volteamos la tarjeta para que el usuario vea el frente.
	mostrarFrente();
});

// * Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
	nombreTarjeta.textContent = valorInput;
	firma.textContent = valorInput;

	if(valorInput == ''){
		nombreTarjeta.textContent = 'Juan Perez Rodriguez';
	}

	mostrarFrente();
});

// * Select mes
formulario.selectMes.addEventListener('change', (e) => {
	mesExpiracion.textContent = e.target.value;
	mostrarFrente();
});

// * Select Año
formulario.selectYear.addEventListener('change', (e) => {
	yearExpiracion.textContent = e.target.value.slice(2);
	mostrarFrente();
});

// * CCV
formulario.inputCCV.addEventListener('keyup', () => {
	if(!tarjeta.classList.contains('active')){
		tarjeta.classList.toggle('active');
	}

	formulario.inputCCV.value = formulario.inputCCV.value
	// Eliminar los espacios
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '');

	ccv.textContent = formulario.inputCCV.value;
});

//---------------------------------------------------//
//-----------Validacion de formulario----------------//
//--------------------------------------------------// 

function validarFormulario(evento) {
	evento.preventDefault();
	const nombreTarjeta = document.querySelector('#tarjeta .nombre').value;
	if (nombreTarjeta.value === "") {
		return;
	}
	const numeroTarjeta = document.querySelector('#tarjeta .numero').value;
	if (numeroTarjeta.value === "") {
		return;
	}
	const ccv = document.querySelector('#tarjeta .ccv').value;
	if (ccv.value === "") {
		return;        
	}

	
}
localStorage.removeItem("carro", JSON.stringify(carro)) 

botonComprar.addEventListener('submit', validarFormulario);