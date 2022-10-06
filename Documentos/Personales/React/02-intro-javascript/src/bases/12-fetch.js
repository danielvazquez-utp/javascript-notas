// Fetch API

const apiKey = 'YyuNkAwWh2eZgAYHwvtHSQ8WUhGHiUrS';

const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

request
// .then( response => {
//     // console.log(response);
//     response.json()
//     .then( data => {
//         console.log(data)
//     })
// } )
.then( response => response.json() )
.then( ({data}) => {
    const url = data.images.original.url; 
    console.log(url);

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
})
.catch ( console.warn )