// bit: es un digito en binario, puede tomar el valor de cero o de uno
// Binario: 0,1
// byte: combinacion de 8 bits
// byte: 00000000 -> 0
// byte: 00000010 -> 1
// byte: 00000010 -> 2
// byte: 00000011 -> 3
// byte: 00000100 -> 4
// byte: 00000101 -> 5
// byte: 00000110 -> 6

// decimal: 0,1,2,3,4,5,6,7,8,9

console.log(1 | 3); // 00000011 
console.log(4 | 6); // 00000110
console.log(5 | 6); // 00000111

console.log(1 & 3); // 00000001
console.log(4 & 6); // 00000100
console.log(5 & 6); // 00000100

