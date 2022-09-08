// Arreglos en JS
// Los arreglos siempre vienen en [ ]

//const arreglo = new Array();
//const arreglo = new Array(100);
const arreglo1 = [1, 2, 3, 4];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

// Crear un nuevo arreglo2 por referencia (no recomendado) y agregar un elemento extra

// let arreglo2 = arreglo1;
// arreglo2.push(5);

// Ejercicio: ¿Cómo genero arreglo2 con los valores de arreglo1 y un elemento más como 5, sin necesidad de hacer un arreglo2.push(5)?

// Respuesta:
let arreglo2 = [ ...arreglo1, 5 ];


console.log(arreglo1);
console.log(arreglo2);

// Funcion Map() ver array.propotipe.map()

const arreglo3 = arreglo2.map( function(x){
    return x;
});

console.log( arreglo3 );

// Ejercicio: ¿Cómo obtener los valores del arreglo2 al cuadrado y almacenados en un arreglo3?