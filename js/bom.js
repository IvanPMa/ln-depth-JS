'use strict'

//BOM - Browser Object Model

//Window con esto podemos acceder al objeto del navegador web
//Altura actual de la ventana
function getBom(){
    // console.log(window.innerHeight);
    // console.log(window.innerWidth);
    console.log(screen.width);
    console.log(screen.height);
    //Direccion URL donde estamos
    console.log(window.location.href);
}

function redirect(url){
    window.location.href = url;
}

function abrirVentana(url){
    window.open(url,"","width=400, height=300");
}

getBom();