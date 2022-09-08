// Objetos literales
// Todo entre { } es un objeto

const persona = {
    nombre : "Daniel",
    apellido: "Vázquez",
    edad: 42,
    direccion: {
        calle: "De las Azucenas",
        no: 1227,
        colonia: "La Providencia",
        cp: 72340,
        municipio: "Puebla",
    }
};

//console.log(persona);
//console.table(persona);

console.log(persona);

// Asignacion por referencia (no aconsejable)
// const persona2 = persona;

// Asignacion con operador spread (propagación)
const persona2 = { ...persona };
persona2.nombre = "Paulo";

console.log(persona2.nombre);
console.log(persona.nombre);