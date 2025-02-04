//se puede dejar al inicio, pero la funcion de condicionesIniciales le da el numero correcto
let numeroSecreto = 0;
let intentos=1;
let listaNumerosSorteados = [];
//declarar una lista para almacenar si el numero fue sorteado

let numeroMaximo=10;


function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroSecreto);
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento ('p',`Acertaste el numero en ${intentos} ${(intentos==1)?'vez':'veces'}`);
        //reactivar el boton de nuevo juego en caso de que acierte
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento ('p','El numero secreto es menor'); 
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        //Llamar a la funcion que limpia si el usuario no acierta
        limpiarCaja();
    }
    return;

}

//funcion para limpiar la caja del texto
function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value='';
}


//funcion para crear los valores aleatorios
function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*10)+1;

   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   //Si ya se sortearon todos los numeros, asignar condicion de salida
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {
        //Si el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            //recursividad
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


//funcion para arrojar los numeros iniciales
function condicionesIniciales() {
    asignarTextoElemento ('h1','Juego del numero secreto!');
    asignarTextoElemento('p','Indica un numero del 1 al 100');
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}



//funcion para activar el boton de nuevo juego
function reiniciarJuego(){
    //primero vaciar la caja
    limpiarCaja();
    //indicar el mensaje de invervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //modificar el boton de nuevo juego, se deshabilita cuando el nuevo juego incia
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}


//colocar la funcion de esta manera hace que cuando se inicie el juego se llamen los mensajes
condicionesIniciales();


/*
function mostarMensajeEnLaConsola() {
    console.log('El botón fue clicado!')
}


function mostrarAlerta() {
    let ciudad = prompt("Por favor, ingresa el nombre de una ciudad de Brasil:");
    alert("Estuve en " + ciudad + " y me acordé de ti.");
}

function sumaDosNumeros () {
    let numero1 = parseInt(prompt('Digite el primer numero'));
    let numero2 = parseInt(prompt('Digite el segundo numero'));
    let resultado = numero1 + numero2;
    alert(`${numero1} + ${numero2} = ${resultado}`);
    //alert('La suma es' +numero1 '+' +numero2 '=' +resultado)
}
*/