
/*----ASIGNACION DE TURNOS----*/

for (let i = 1; i <= 10; i++) {
    let ingresarNombre = prompt("Ingrese su nombre");
    let peso = prompt("Ingrese su peso")
    let altura = prompt("Ingrese su altura en metros.");
    const resultado = peso / altura ** 2;
    /*----- CALCULADORA IMC------*/
    if (i <= 10) {
        if (resultado < 18.5) {
            alert(ingresarNombre + " estas por debajo de tu peso ideal... consulta con nuestro nutricionista.")
        }
        else if ((resultado >= 18.5) && (resultado <= 24.9)) {
            alert(ingresarNombre + " tenes un peso saludable... consulta a nuestro nutricionista para seguir asi!")
        }
        else if ((resultado >= 25) && (resultado <= 29.9)) {
            alert(ingresarNombre + " tenes sobrepeso...saca un turno con nuestros especialistas.")
        }
        else {
            alert(ingresarNombre + " tenes obesidad...saca un turno con nuestros especialistas.")
        }
        alert("Turno N " + i);
        
    }    
}
alert("Te pedimos disculpas no tenemos mas turno.")
