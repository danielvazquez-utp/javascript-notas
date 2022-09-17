// Desestructuración o asignación desestructurante

const persona = {
    nombre: 'Javier',
    edad: 45,
    nickname: 'Venom123',
}

// Teniendo en cuenta el objeto persona, si deseo extraer los valores de los atributos, tradicionalmente tengo que hacer referencia al objeto y luego al atributo
console.log( persona.nombre );
console.log( persona.edad );
console.log( persona.nickname );

// Para acceder a los atributos sin referenciar el objeto, primero es necesario desestructurar el mismo

const { nombre, edad, nickname } = persona;

console.log( nombre, edad, nickname );

// Puede darse el caso de que un objeto tenga el mismo nombre de un atributo desestructurado, en tal caso se puede referenciar con un nombre distinto

const { nombre:nombre2 } = persona;

console.log( nombre2 );

// Es posible hacer desestructuración dentro de una función

const getPersona = ( usuario ) => {

    const { nombre } = usuario;
    console.log( nombre );

}

getPersona( persona );

// Es posible hacer desestructuración implícita, incluso como un paso de parámetros de una función

const getPersona2 = ( { edad, nombre } ) => {
        console.log( nombre, edad );
}
    
getPersona2( persona );

// Dentro de la desestructuración pueden definirse valores por defecto, si el atributo existe se toma ese valor, en caso contrario se toma el que se define por defecto

const getPersona3 = ( { nombre, password='secreto' } ) => {
    console.log( nombre, password );
}

getPersona3( persona );

// La desestructuración de objetos nos sirve para comprender algunas funciones comunes en React como useContext()

const _useContext = ( { nickname, nombre, password='secreto' } ) => {
    return {
        name: nombre,
        pass: password,
        // Es posible que dentro del objeto haya otro objeto anidado a desestructurar
        keys: {
            publicKey: '12345',
            privateKey: 'ABCDE',
        },
    }
}

// const accessData = _useContext( persona );
// console.log(accessData);

const { name:name2, pass, keys:{ publicKey, privateKey } } = _useContext( persona );
console.log( name2, pass, publicKey, privateKey) ;