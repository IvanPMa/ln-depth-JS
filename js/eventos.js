'use strict'

//Eventos del ratón

function cambiarColor(){
    var bg = boton.style.background;
    console.log("Haz presionado el boton");
    if(bg == "green"){
        boton.style.background ="red";
    }
    else{
        boton.style.background ="green";
    }
    boton.style.padding="10px";
    boton.style.border="1px solid #ccc"

    return true;
}
var boton = document.querySelector("#boton");

//Click
boton.addEventListener('click', () =>{
    cambiarColor();
});

// Mouse over 
boton.addEventListener('mouseover', ()=>{
    boton.style.background = "yellow";
});

//Mouse out 
boton.addEventListener('mouseout', () =>{
    boton.style.background = '#ccc';
});


// Focus
var input = document.querySelector("#campoNombre");

input.addEventListener('focus', ()=>{
    console.log("[focus] Estas dentro del input");
});

// Blur
input.addEventListener('blur', ()=>{
    console.log("[blur] Estas fuera del input");
});

// Keydown


// Keypress



// keyup