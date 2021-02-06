'use strict'

window.addEventListener('load', function(){

    console.log("DOM cargado");


    var formulario = document.querySelector('#formulario');
    var box_dashed = document.querySelector('.dashed');

    box_dashed.style.display = 'none';


    formulario.addEventListener('submit', function(){
        console.log("Formulario enviado");

        var nombre= document.querySelector('#nombre').value;
        var apellidos = document.querySelector('#apellidos').value;
        var edad = document.querySelector('#edad').value;
        console.log("Nombre: "+nombre+", Apellidos: "+apellidos+", Edad: "+edad);

        var p_nombre = document.querySelector('#p_nombre span');
        var p_apellidos = document.querySelector('#p_apellidos span');
        var p_edad = document.querySelector('#p_edad span');

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;

        box_dashed.style.display = 'block';


        /* Forma uno de mostrar los datos en el dashed
        var datos_usuario = [nombre,apellidos,edad];
        for (var indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        }
        */
    
    });


});