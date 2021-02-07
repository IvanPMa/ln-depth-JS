'use strict'

//Localstorage

//Comprobar si el navegador tiene LocalStorage

if(typeof (Storage) != 'undefined'){
    console.log("Local storage disponible");
}

else{
    console.log("Incompatible con el Local Storage");
}


//Guardar datos en LocalStorage
//Llave y valor
localStorage.setItem("titulo", "Curso de JS");


//Recuperar elemento 
document.querySelector("#peliculas").innerHTML= localStorage.getItem("titulo");

//Guardar objetos
var usuario ={
    nombre: "Ivan Pacheco",
    email: "pachecomaldonadoivan@gmail.com",
    edad: "22"
};

localStorage.setItem("usuario", JSON.stringify(usuario));
// Para guardar objetos es necesario convertirlos a string

//Recuperar objeto
var userjs =JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector('#datos').append(userjs.edad+" "+userjs.nombre);

//Eliminar un valor 
localStorage.removeItem("usuario");

//Limpiar el localstorage
localStorage.clear();