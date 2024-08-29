// short-circuit

// Valores que devuelven Falso

/*
false
0
''
null
undefined
NaN
*/

let nombre = 'Alexis';
let username = nombre || 'anonimo';

console.log(username);


function fn1(){
    console.log('soy funcion 1');
    return true;
}

function fn2(){
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2();



