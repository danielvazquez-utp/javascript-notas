// Cadenas formateadas - Templated strings

const apellido = 'Vázquez';
const nombre = 'Daniel';

//const nombreCompleto = nombre + apellido;
//const nombreCompleto = `${nombre} ${apellido}`;
const nombreCompleto = `
${nombre}
${apellido}
${ 5 - 10 }
 `;

console.log(nombreCompleto);

function getSaludo() {
    return 'Hola mundo';
}

console.log(`Este es el mensaje de una función: ${ getSaludo }`);