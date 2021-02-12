'use strict'

var  formulario =document.querySelector('#formpeliculas');

formulario.addEventListener('submit', function(){
     var titulo = document.querySelector('#addpelicula').value;
     
     
     if (titulo.trim() != 0){
        localStorage.setItem(titulo, titulo);

    }

    
});

var ul = document.querySelector('#peliculas-list')
for (var i in localStorage ){
    var li = document.createElement("li");
    if(typeof localStorage[i] == 'string'){
        li.append(localStorage[i]);
        ul.append(li);
    }       
}

var  formulariob =document.querySelector('#formBorrarPeliculas');

formulariob.addEventListener('submit', function(){
        var titulo = document.querySelector('#borrarPelicula').value;
        
        
        if (titulo.trim() != 0){
            borrarPelicula(titulo);

    }

    
});
var busqueda= false;
function borrarPelicula (titulo){
    var borrar =recorrerLocalStorage(titulo);

    if(borrar == true ){
        localStorage.removeItem(titulo);
    }
    else{
        alert("Pelicula no encontrada");
    }
}


function recorrerLocalStorage (titulo){
    for (var i in localStorage){
        if (localStorage[i] == titulo){
            return true;
        }
        
    }
}