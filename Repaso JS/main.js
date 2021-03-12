var nombre = "Ivan Pacheco"; 

var altura = 170;

/*
var concatenacion = nombre + " " + altura;
 var datos = document.getElementById("datos");
 datos.innerHTML = `
    <h1>Soy la caja de datos </h1>
    <h2> Mi nombre es: ${nombre} </h2>

    <h3>Mido: ${altura} cm </h3> 
 `;


 if(altura >= 190 ){
     datos.innerHTML = "<h1> Eres una persona alta </h1>;"
 }else {
     datos.innerHTML += "<h1>Eres una persona bajita</h1>"
 }

 for ( var i = 2000; i<= 2021; i++){
    datos.innerHTML += "<h2>Estamos en el año: " + i +"</h2>";
 }
*/

function muestraMiNombre(nombre, altura){

    var datos = `
        <h1>Soy la caja de datos </h1>
        <h2> Mi nombre es: ${nombre} </h2>
        <h3>Mido: ${altura} cm </h3> 
    `;
    return datos;

}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = muestraMiNombre("Ivan Pacheco", 170);

}

imprimir();


var nombres = ['Ivan', 'Pelusa', 'Luisito']; 

alert(nombres[1]);