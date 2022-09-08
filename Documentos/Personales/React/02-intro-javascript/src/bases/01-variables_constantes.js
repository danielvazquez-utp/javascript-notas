// variables y constantes

const apellido = 'Vázquez';
let nombre = 'Daniel';
let edad = 5;

edad = 43;
nombre = 'Paulo Daniel';

console.log(nombre, apellido, edad);

// Ámbito (scope)

if (true) {
    const apellido = 'Mora';
    console.log(apellido);
}