console.log('Uzduotis 1: ------------------------------')


let skaicius = 1;

while (skaicius <= 20) {
    console.log(skaicius)
    skaicius++
};


console.log('Uzduotis 2: ------------------------------')


skaicius = 1;

while (skaicius <= 50) {
    if (skaicius % 2 === 0) {
        console.log(skaicius, 'lyginis')
    }
    else if (skaicius % 2 !== 0) {
        console.log(skaicius, 'NElyginis')
    }
    skaicius++
};


console.log('Uzduotis 3: ------------------------------')


skaicius = 25;

while (skaicius <= 50) {
    if (skaicius % 3 === 0) {
        console.log('skaičius', skaicius, 'dalinasi iš 3')
    }
    else {
        console.log(skaicius)
    }
    break
}