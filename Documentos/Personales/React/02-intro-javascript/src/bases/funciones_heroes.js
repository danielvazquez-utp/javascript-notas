import heroinos from '../data/heroes2';

export const getHeroeById = (id) => {
    return heroinos.find( heroe => heroe.id === id);
} 

export const getHeroeByOwner = ( owner ) => {
    return heroinos.filter( heroe => heroe.owner === owner );
}