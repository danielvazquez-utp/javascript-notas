// Desestructuración de arreglos

const personajes = ['Mazinger', 'Voltron', 'Godzilla'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

// La desetructuración de arreglos es similar al de objetos

const [ p1 ] = personajes;
console.log( p1 );

// Sin embargo, en el caso de los arreglos es importante la posición indicada con las comas

const [ , p2 ] = personajes;
console.log( p2 );

// Se puede aplicar la desestructuración incluso invocando funciones que retornen arreglos

const arr = ( ) => {
    return ['ABCD', 12345];
}
// console.log(arr());

const [letras, numeros] = arr();
console.log(letras, numeros);

// Es posible desestructurar un arreglo con valores y funciones
const _useState = ( valor ) => {
    return [ valor, () => 'Esta es una función' ];
}

// const nombre = _useState('Daniel');
// console.log(nombre);
// console.log(nombre[1]());

// Ejercicio: Desestructurar el arreglo como sigue
// 1. El valor desestructurarlo como "nombre"
// 2. La funcion desestructurarla como getMensaje

const [ nombre, getMensaje ] = _useState('Carlos');
console.log(nombre, getMensaje());