'use strict'

// DOM - Document Object Model
function cambiaColor(color){
    caja.style.background = color;
}



// document,getElementById capturar el elemento y el .innerHTML es para capturar el código HTML
// var caja = document.getElementById("caja1");
// El querySelection es equivalente al getElement , se usa como CSS id con #id y clases con .clase
var caja = document.querySelector("#caja1");

caja.innerHTML = " texto en la caja desde JS";

caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
//con la propiedad className le puedo poner una clase 
caja.className = "hola";
 console.log(caja);