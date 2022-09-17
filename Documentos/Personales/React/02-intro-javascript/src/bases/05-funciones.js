// Funciones en JS

// Declarar asi permite que una variable pueda entrar en conflicto con la función

// Declaración de función tradicional
function saludar(nombre){
    return `Hola ${ nombre }`
}

//saludar = 30;

//console.log( saludar );

// Funcion como constante
const saludar1 = function (nombre){
    return `Hola ${ nombre }`;
}

// saludar1 = 10;
console.log( saludar1 );

// Funcion flecha
const saludar2 = ( nombre ) => {
    return `Hola ${ nombre }`;
}

console.log( saludar2('Joel') );

// Si la funcion flecha sólo tiene un return, se puede simplificar su notación
const saludar3 = ( nombre ) => `Hola ${ nombre }`;

console.log( saludar3('Ana') );

// Tambien es posible devolver objetos en una funcion simplificada, para ello se requiere encerrar el objeto entre ()

const saludar4 = () => ({
    id : '12345',
    nombre: 'Daniel',
});

console.log ( saludar4() );

// Ejercicio
// 1. Transformar a función de flecha
// 2. Retornar objeto implícito
// 3. Probar

/*
function getUsuario( nombre ) {
    return {
        id: 'QWERTY123',
        nombre: nombre,
    }
}

const usuarioActivo = getUsuario('Luis');
console.log( usuarioActivo );
*/

const getUsuario = ( nombre ) => ({
    id: 'QWERTY123',
    nombre: nombre,
});

const usuarioActivo = getUsuario('Luis');
console.log( usuarioActivo );