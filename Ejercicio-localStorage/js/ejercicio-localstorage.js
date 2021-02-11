'use strict'

var  formulario =document.querySelector('#formPeliculas');

formulario.addEventListener('submit', function(){
    console.log("Entra");
     var titulo = document.querySelector('#addpelicula').value;
    localStorage.setItem(titulo, titulo);
});
//TODO: m 