'use strict'

// DOM - Document Object Model
function cambiaColor(color){
    caja.style.background = color;
}

// CONSEGUIR ELEMENTOS CON UN ID CONCRETO

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



// CONSEGUIR ELEMENTOS POR SU ETIQUETA
var todosLosDivs = document.getElementsByTagName("div");

//Sacar el contenido que contiene el div el textContent e s igual que usar el innerHTML pero el inner puedo cambiar valor
// var contenidoEnTexto = todosLosDivs[2].textContent;
// var contenidoEnTexto = todosLosDivs[2];
// contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento";
// contenidoEnTexto.style.background = "red";
// contenidoEnTexto.style.color="white";
// console.log(contenidoEnTexto);



var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");
var hr2 = document.createElement("hr");
seccion.prepend(hr2);
//Reccorrer todos los divs
// todosLosDivs.forEach((valor, indice) => {
for(var valor in todosLosDivs){ 
    if(typeof todosLosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        //Insertamos el texto dentro del párrafo
        parrafo.append(texto);
        //Metemos ese parrafo dentro de otra seccion
        //append para despues , prepend para antes
        seccion.append(parrafo);
    }
}
seccion.append(hr);
// });

// console .log(todosLosDivs);


// CONSEGUIR ELEMENTOS POR SU CLASE CSS
//El getElements para seleccionar un conjunto de elementos
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "yellow";

for (var i in divsRojos){
    if(divsRojos[i].className == 'rojo'){
        divsRojos[i].style.background ="red";
        console.log(divsRojos[i]);
    }
}
console.log(divsRojos);

//Query selctor, recomendado para cuando solo se va a seleccionar un componente 

var id = document.querySelector('#encabezado');
var claseRojo = document.querySelector('.rojo');
console.log(claseRojo);
console.log(id);


//Query selctor all
var matches = document.querySelectorAll('div');
console.log(matches);