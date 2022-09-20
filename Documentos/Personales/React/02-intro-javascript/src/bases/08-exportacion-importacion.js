// Importación y exportación en JS

// 1. La importación se puede hacer manual, escribiendo cada elemento
// import { heroes } from './data/heroes';

// 2. Tambien se puede usar el snipet "imp" para hacer la importación
// import { heroes } from './data/heroes';

import { heroes } from './data/heroes';

// Usando la funcion find() ver: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find

// const getHeroeById = (id) => {
//     return heroes.find( (heroe) => {
//         if (heroe.id == id) {
//             return true;
//         } else {
//             return false;
//         }
//     });
// } 

const getHeroeById = (id) => {
    return heroes.find( heroe => heroe.id === id);
} 

console.log(getHeroeById(3));

// Usando la funcion filter(), ver: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const getHeroeByOwner = ( owner ) => {
    return heroes.filter( heroe => heroe.owner === owner );
}

console.log(getHeroeByOwner('Marvel'));