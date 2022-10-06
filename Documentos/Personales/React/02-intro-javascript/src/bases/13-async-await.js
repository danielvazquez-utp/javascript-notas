// Async - Await

/*
const getImagen = () => {
    return 'http://com54ysgbsfg.com';
}

console.log(getImagen());
*/

/*
// Async convierte una función normal a asincrona
const getImagen = async () => {
    return 'http://com54ysgbsfg.com';
}
console.log(getImagen());
*/

/*
const getImagen = async () => {
    const apiKey = 'YyuNkAwWh2eZgAYHwvtHSQ8WUhGHiUrS';
    //const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    // console.log(request);
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const { data } = await response.json();
    const { url } = data.images.original;
    // console.log(url);
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
}

getImagen();
*/

// No olvidar que debemos hacer nuestras peticiones asincronas y el manejo de los errores dentro de un try-catch

const getImagen = async () => {
    try {
        const apiKey = 'YyuNkAwWh2eZgAYHwvtHSQ8WUhGHiUrS';
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await response.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.log(error);
    }
}

getImagen();