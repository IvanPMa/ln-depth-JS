'use strict'


window.addEventListener('load',()=>{

    function intervalo(){
        var tiempo = setInterval(()=>{
            console.log("Set interval ejecutados");
            var encabezado = document.querySelector("h1");
    
            if(encabezado.style.fontSize=="50px"){
                encabezado.style.fontSize ="30px";
            }
            else{
                encabezado.style.fontSize ="50px";
            }
        },1000);
        return tiempo;
    }
    //Timers
    //setInterval  bucle de ejecucion cada ciertos milisegundos
    //setTimeOut solo una vez
    
    var tiempo = intervalo();

    var stop = document.querySelector("#stop");
    stop.addEventListener('click', ()=>{
        alert("Haz parado el  Intervalo del bucle");
        clearInterval(tiempo);
    });

    var start = document.querySelector("#start");
    start.addEventListener('click', ()=>{
        alert("Haz iniciado el  Intervalo del bucle");
        intervalo();
    });
});