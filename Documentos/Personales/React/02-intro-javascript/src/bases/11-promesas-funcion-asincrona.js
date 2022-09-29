import { getHeroeById } from "./bases/funciones_heroes";

const getHeroeByIdAsync = ( id ) => {

    return new Promise( ( resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById( id );
            if (heroe)
                resolve( heroe );
            else
                reject('No se encuentra el héroe');
        }, 2000);
    });

}

getHeroeByIdAsync( 3 )
    // .then( heroe => console.log( heroe ) )
    // .catch( error => console.warn( error ) )
    // Manera abreviada
    .then( console.log )
    .catch( console.warn )