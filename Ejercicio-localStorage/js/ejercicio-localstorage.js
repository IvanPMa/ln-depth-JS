'use strict'

var  formulario =document.querySelector('#formPeliculas');

formulario.addEventListener('submit', function(){
     var titulo = document.querySelector('#addpelicula').value;
     
     
     if (titulo.trim() != 0){
        localStorage.setItem(titulo, titulo);

    }

    var ul = document.querySelector('#peliculas-list')
    for (var i in localStorage ){
        var li = document.createElement("li");
        if(typeof localStorage[i] == 'string'){
            li.append(localStorage[i]);
            ul.append(li);
        }       
    }
});
