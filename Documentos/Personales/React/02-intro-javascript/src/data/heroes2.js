// Se deseo que un contenido sea exportable por defecto se requiere agregar "export default" para indicarlo

const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

//export default heroes;

// También se pueden exportar otros elementos en el archivo, sin necesidad de que sean por defecto, en cuyo casi se se requiere que se importen con { } (de manera desestructurada)

//export const owners = ['DC', 'Marvel'];

// Otra manera de hacer exportaciones es con un solo objeto
const owners = ['DC', 'Marvel'];

export {
    heroes as default,
    owners,
}
