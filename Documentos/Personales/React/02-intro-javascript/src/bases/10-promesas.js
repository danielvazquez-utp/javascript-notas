// Promesas en JS
// Las promesas son asincronas por naturaleza
// Documentacion en https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

// 3. Ejercicio de reforzamiento de importacion
import { getHeroeById, getHeroeByOwner } from "./bases/funciones_heroes";

// 1. Definiendo una promesa
const promesa = new Promise( ( resolve, reject) => {
    setTimeout(() => {
        // console.log('2 segundos después');
        // resolve();

        // 4. importando e invocando una funcion externa
        const heroe = getHeroeById(2);
        // console.log(heroe);
        // definiendo resolve con argumento a transferir al then
        resolve( heroe );

    }, 2000);
});


// 2. invocando el evento then
// promesa.then( ( ) => {
//     console.log('Then de la promesa');
// });

// 5. invocando then con, el nombre del argumento no necesariamnete coincide con el argumento definido en la promesa
promesa.then( ( heroe ) => {
    console.log( heroe );
});