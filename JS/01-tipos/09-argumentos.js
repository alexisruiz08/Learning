function suma(a, b) { // si asignamos valores directos en la funcion, son parametros
    console.log(arguments); // acceder a argumentos de la funcion
    return a + b;
}

let resultado = suma(5, 6, 1, 2, 3); // estos son argumentos

console.log(resultado);

console.log(typeof suma);
