// cuales son los numero pares con do while

// en while se evalua primero la condicion y en do while se evalua de ultimo

let i = 2;
while (i < 3) {
    if (i % 2 == 0) {
        console.log('Numero par', i);
    }
    i++;
}


do {
    if (i % 2 == 0) {
        console.log('Numero par', i);
    }
    i++; 
} while (i < 2);

console.log('fuera del while');