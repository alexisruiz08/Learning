// datos de personas

const nombre = "Alexis";
const apellido = "Ruiz Diaz";
const edad = 25;

const persona = { // creacion de objeto
    nombre: "Alexis",
    apellido: "Ruiz Diaz",
    edad: 25,
}; 

console.log(persona); // imprime objeto vacio

console.log(persona.apellido); // formas de acceder a una sola propiedad
console.log(persona["edad"]);

persona.edad = 24; // formas de modificar valor de propiedad
persona["edad"] = 23; 

llave = "edad";

console.log(persona[llave]); // llamar a propiedad mediante var

delete persona.apellido; // borrar propiedad de objeto

console.log(persona);