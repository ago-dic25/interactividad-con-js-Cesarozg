//====Variables=====//
var arreglo = [1, 2, 3, 4, 5];
var entero = 1;
var cadena_texto = "Hola Mundo";
var booleano = true;

//===Constantes====//
const PI = 3.1416;


//====Funciones====//
function suma(x, y){
    var resultado = x + y;
    console.log("El resultado de la suma es: " + resultado);
    return resultado;
}

function imprimirMensaje(mensaje){
    console.log("Este es mi mensaje " + mensaje);
}

imprimirMensaje("Hola");
imprimirMensaje("Vacaciones 1 semana :D");
imprimirMensaje(true);

suma(1, 2);
suma(10, 20);
suma(100, 200);


//===Elementos de la pagina como variables===///
var botonBuscar = document.getElementById("buscar");
console.log(botonBuscar);
//==== Eventos===== //
botonBuscar.addEventListener("click", function(){
    //alert("Hiciste clic al boton");
    botonBuscar.classList.add("rojo");
});

var botonSwitch = document.getElementById("modo_oscuro_claro");
console.log(botonSwitch);
botonSwitch.addEventListener("click", function(){
    document.body.classList.toggle("modo-oscuro");
});

var contador = 0;
var botonMas = document.getElementById("+");
var mostrarContador = document.getElementById("contador");
console.log(botonMas);
console.log(mostrarContador);
botonMas.addEventListener("click", function(){
    contador++;
    mostrarContador.textContent = contador;
})

var botonBuscar = document.getElementById("buscar");
console.log(botonBuscar);
botonBuscar.addEventListener("click", function(){
    var textoBusqueda = prompt("Escribe tu busqueda");
    if (!textoBusqueda) {
        return; 
    }
    var termino = textoBusqueda.toLowerCase();
    var tarjetas = document.querySelectorAll(".tarjeta");

    tarjetas.forEach(tarjeta => {
        var contenido = tarjeta.textContent.toLowerCase();

        if (contenido.includes(termino)) {
            tarjeta.classList.remove("ocultar");
        } else {
            tarjeta.classList.add("ocultar");
        }
    });
});

var botonSeeAll = document.getElementById("seeAll");
console.log(botonSeeAll);
var imagenSeeAll = botonSeeAll.querySelector("img");
var imagenes = ["imagenes/soundtrap-n30_i7mx62o-unsplash.jpg", "imagenes/rachel-coyne-mTsotT-gMrY-unsplash.jpg", "imagenes/jukka-aalho-OaPksPcVp50-unsplash.jpg"];
var indiceImagen = 0;
var intervalo = null;

botonSeeAll.addEventListener("mouseenter", function(){
    intervalo = setInterval(function(){
        indiceImagen = (indiceImagen + 1) % imagenes.length;
        imagenSeeAll.src = imagenes[indiceImagen];
    }, 3000);
});

botonSeeAll.addEventListener("mouseout", function(){
    clearInterval(intervalo);
});
