// 1
console.log('1. - Verifica el formato de la fecha');
const esFormatoFechaCorrecto = (fechaString) => {
    let regexDate = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    return fechaString.match(regexDate);
}
  
let fechaIngresada = "05/04/1982";
  
if (esFormatoFechaCorrecto(fechaIngresada)) {
    console.log("La fecha es válida y tiene el formato correcto.");
} else {
    console.log("La fecha no es válida o no tiene el formato correcto.");
}
  
// 2
console.log('2. - Validar email');
const validarCorreoElectronico = (correo) => {
    let regexMail = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    return regexMail.test(correo);
}
  
let correo = "usuer@example.com";

if (validarCorreoElectronico(correo)) {
    console.log("La dirección de correo electrónico es válida.");
} else {
    console.log("La dirección de correo electrónico no es válida.");
}

// 3
console.log('3. - Reemplazo caracteres');

// 4
console.log('4. - Orden Inverso');
function invertirNombreApellido(nombreCompleto) {
    let regex = /^(\S+)\s+(\S+)$/;
    return nombreCompleto.replace(regex, "$2 $1");
     
}
  
let nombreApellido = "John Smith";
let nombreApellidoInvertido = invertirNombreApellido(nombreApellido);
console.log(nombreApellidoInvertido);

// 5
console.log('5. - Etiquetas peligrosas');
function eliminarEtiquetasPeligrosas(html) {
    let regexScript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    return html.replace(regexScript, "");
}
  
let htmlConScript = '<p>Este es un parrafo.</p><script>alert("script malicioso");</script><p>Otro parrafo.</p>';
let htmlSinScript = eliminarEtiquetasPeligrosas(htmlConScript);
console.log(htmlSinScript);
  