var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getUTCMonth();
var dia = fecha.getDate();
var textoHora = `
El año es: ${year}
El mes es: ${mes}
El dia es: ${dia}
`;

console.log(textoHora);