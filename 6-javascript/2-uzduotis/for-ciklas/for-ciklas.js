console.log('Uzdavinys 1: ------------------------------')



let suma = 0;

for (let i = 1; i <= 100; i++) {
    suma += i;
}

console.log('Skaiciu nuo 1 iki 100 suma: ', suma);



console.log('Uzdavinys 2: ------------------------------')



suma = 0;

for (let i = 20; i <= 50; i++) {
    if (i % 2 === 0) {
        suma += i;
    }
}

console.log('Lyginiu skaiciu nuo 20 iki 50 suma: ', suma);



console.log('Uzdavinys 3: ------------------------------')



suma = 0;

for (let i = 30; i <= 60; i++) {
    if (i % 2 !== 0) {
        suma += i;
    }
}

console.log('Nelyginiu skaiciu nuo 30 iki 60 suma: ', suma);



console.log('Uzdavinys 4: ------------------------------')



suma = 0;

for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        suma += i;
    };
}

console.log('Skaiciu kurie dalinasi is 3 arba 5 iki 1000 suma: ', suma);



console.log('Uzdavinys 5: ------------------------------')



let suma1 = 0, suma2 = 0;

for (let i = 1; i <= 100; i++) {

    if (i % 5 === 0 && i % 3 === 0) {
        console.log('FizzBuzz')
    }

    else if (i % 3 === 0) {
        console.log('Fizz')
    }

    else if (i % 5 === 0) {
        console.log('Buzz')
    }

    else {
        console.log(i)
    }
}



console.log('Uzdavinys 6: ------------------------------')

suma = 0;

for ()
