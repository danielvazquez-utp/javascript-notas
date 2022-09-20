// Importación y exportación por defecto en JS

// Cuando se hace una importación de un recurso por defecto, entonces no se requiere agregar { }, por lo cual el elemento puede ser nombrado como mejor convenga
// import { heroes } from './data/heroes2';

import heroinos, { owners } from './data/heroes2';

const getHeroeById = (id) => {
    return heroinos.find( heroe => heroe.id === id);
} 

console.log(getHeroeById(3));

const getHeroeByOwner = ( owner ) => {
    return heroinos.filter( heroe => heroe.owner === owner );
}

console.log(getHeroeByOwner('Marvel'));

console.log(owners);