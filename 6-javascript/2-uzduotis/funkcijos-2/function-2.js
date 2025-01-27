console.log('==========================Funkcijos 2========================');
console.log('1 Uzduotis');
console.log(' ');

function pasisveikinti(vardas) {
    console.log('Welcome ' + vardas);
}

function atsisveikinti(vardas) {
    console.log('Bye ' + vardas);
}

let vardas = 'Tomas';

pasisveikinti(vardas);
atsisveikinti(vardas);



console.log('2 Uzduotis');

function didesnis(a, b) {
    if (a > b) {
        console.log(`${a} yra daugiau už ${b}`)
    } else if (a < b) {
        console.log(`${b} yra daugiau už ${a}`)
    } else if (a === b) {
        console.log(`Skaičius ${a} ir skaičius ${b} yra lygūs`)
    }
}

didesnis(5, 9);
didesnis(6, 3);
didesnis(10, 10);


console.log('======================');
console.log('3 Uzduotis');
console.log(' ');

function automobiliu_isvedimas(marke, modelis, gamybos_metai, darbinis_turis) {
    console.log(`Markė: ${marke}`);
    console.log(`Modelis: ${modelis}`);
    console.log(`Gamybos metai: ${gamybos_metai}`);
    console.log(`Darbinis tūris: ${darbinis_turis} litrai`);
    console.log(' ');
}

automobiliu_isvedimas('BMW', '3 serijos', 2008, 2.0);
automobiliu_isvedimas('AUDI', 'A6', 2016, 2.7);


console.log('=======================Funkcijos 3===========================');
console.log('1 Uzduotis');
console.log(' ');

function zodzioSimboliuSkaicius(mas) {
    for (let item of mas) {
        console.log(item + ' ' + item.length);
    }
}

let zodziai = [
    'pvz',
    'example',
    'Vilnius',
    'Lietuva'
];

zodzioSimboliuSkaicius(zodziai);



console.log(' ');
console.log('2 Uzduotis');
console.log(' ');



function skaiciu_masyvo_forminimas(skaiciai) {
    for (let item of skaiciai) {
        item_square = item * item;
        item_half = item / 2;
        console.log(`Skaičius: ${item}, jo kvadratas ${item_square} bei pusinis jo variantas ${item_half}`);
    }
}

let skaiciai = [1, 4, 9, 7, 3, 1, 5];
let skaiciai2 = [5, 8, 10, 3, 4, 9, 50];

skaiciu_masyvo_forminimas(skaiciai);
console.log(' ');
skaiciu_masyvo_forminimas(skaiciai2);




console.log(' ');
console.log('3 Uzduotis');
console.log(' ');


function studentoVidurkis(studentas) {
    let suma = 0;

    for (let value of studentas.pazymiai) {
        suma += value;
    }

    let vidurkis = (suma / studentas.pazymiai.length).toFixed(2);
    console.log(`${studentas.vardas} ${studentas.pavarde} vidurkis yra: ${vidurkis}`);
}

let studentai = [
    {
        pazymiai: [1, 2, 3],
        vardas: 'Jonas',
        pavarde: 'Jonaitis'
    },
    {
        pazymiai: [7, 9, 5, 7],
        vardas: 'Petras',
        pavarde: 'Jonaitis'
    }
];

for (let studentas of studentai) {
    studentoVidurkis(studentas);
}


console.log(' ');
console.log('4 Uzduotis');
console.log(' ');


function didziausiasMasyve(masyvas) {
    let didziausiasSkaicius = masyvas[0];

    for (let elementas of masyvas) {
        if (elementas > didziausiasSkaicius) {
            didziausiasSkaicius = elementas;
        }
    }
    console.log('Didziausias skaicius masyve: ', didziausiasSkaicius);
}

function random(kiekis, min, max, masyvas) {
    for (let i = 0; i < kiekis; i++) {
        masyvas.push(Math.floor(Math.random() * (max - min)) + min);
    }
}

function isvedimas(masyvas, zinute) {
    console.log(zinute);
    console.log(masyvas);
}

let skaiciai1 = [];
    skaiciai2 = [];
let skaiciai3 = [];

random(10, 0, 200, skaiciai1);
random(3, 1, 10, skaiciai2);
random(8, 2, 56, skaiciai3);

isvedimas(skaiciai1, 'Pirmas masyvas');
didziausiasMasyve(skaiciai1);
console.log('------------');
isvedimas(skaiciai2, 'Antras masyvas');
didziausiasMasyve(skaiciai2);
console.log('------------');
isvedimas(skaiciai3, 'Trecias masyvas');
didziausiasMasyve(skaiciai3);
console.log('------------');




console.log('=======================Funkcijos 4===========================');
console.log(' ');
console.log('1 Uzduotis');
console.log(' ');

//Susikurkite funkciją, kuri grąžintų bet kokį jūsų norimą sakinį. Iškvieskite šią funkciją ir išspausdinkite gautus rezultatus.

function sakinys(){
    return 'betkoks mano norimas sakinys'
}

console.log( sakinys() );



console.log(' ');
console.log('2 Uzduotis');
console.log(' ');

//Susikurkite funkciją, kuri grąžintų atsitiktinai sugeneruotą skaičių. Iškvieskite šią funkciją kelis kartus ir gautus atsakymus išveskite kokiu norite būdu.

function atsitiktinis_skaicius(){
    return Math.floor(Math.random() * 11);
}

console.log( atsitiktinis_skaicius() );



console.log(' ');
console.log('3 Uzduotis');
console.log(' ');



function priimkVarda(studentas) {
    return `Studentas ${studentas.vardas} ${studentas.pavarde} turi vidurki ${studentas.vidurkis.toFixed(1)}.`;
}

let studentas1 = {
    vardas: "Laura",
    pavarde: "Laurinskaite",
    vidurkis: 5.8,
};

let studentas2 = {
    vardas: "Vilma",
    pavarde: "Vilmute",
    vidurkis: 8.8,
};

let isveskStudentas1 = priimkVarda(studentas1);
let isveskStudentas2 = priimkVarda(studentas2);

console.log(isveskStudentas1);
console.log(isveskStudentas2);



console.log(' ');
console.log('4 Uzduotis');
console.log(' ');



function maziausias_daliklis(skaicius) {
    for (let i = 2; i <= skaicius; i++) {
        if (skaicius % i === 0) {
            return i;
        }
    }
    return skaicius;
}


for (let skaicius = 10; skaicius <= 30; skaicius++) {
    let daliklis = maziausias_daliklis(skaicius);
    console.log(`Skaicius: ${skaicius}, maziausias daliklis: ${daliklis}`);
}



console.log(' ');
console.log('5 Uzduotis');
console.log(' ');



function arSkaiciusPirminis(skaicius) {
    // 1 budas
    for(let i = 2; i < skaicius; i++) {
        if (skaicius % i === 0) {
            return false;
        }
    }
    return true;

    // 2 budas
    // kiek dalikliu turi skaicius - pvz jei 2 td pirminis jei
}

for(let i = 2; i <= 15; i++) {
    console.log('skaicius ' + i + arSkaiciusPirminis(i));
}




console.log(' ');
console.log('6 Uzduotis');
console.log(' ');




function suma(a, b, c) {
    return a + b + c;
}

function sumadu(a, b) {
    return a + b;
}

function skirtumas(a, c) {
    return c - a;
}

function sandauga(a, b) {
    return a * b;
}

function dalyba(a, b) {
    if (a != 0) return b / a;
}

function rezultatai(a, b, c) {
    console.log(`Suma ${a} + ${b} + ${c} = ${suma(a, b, c)}`);
    console.log(`Suma ${a} + ${b} = ${sumadu(a, b)}`);
    console.log(`Skirtumas ${c} - ${a} = ${skirtumas(a, c)}`);
    console.log(`Sandauga ${a} * ${b} = ${sandauga(a, b)}`);
    console.log(`Dalyba ${b} / ${a} = ${dalyba(a, b).toFixed(2)}`);
}

rezultatai(3, 12, 37);
console.log("-------------------");
rezultatai(201, 2, 84);


console.log('=======================Funkcijos 5===========================');



console.log(' ');
console.log('1 Uzduotis');
console.log(' ');

//Susikurkite funkciją kuri priimtų skaičių masyvą per argumentus. Ši funkcija turėtų rasti duotųjų skaičių sumą ir grąžinti gautą atsakymą. Už funkcijos ribų susikurkite du skaičių masyvus ir užpildykite juos duomenimis. Iškvieskite turimą funkciją du kartus, jai abu kartus perduodant skirtingą masyvą. Gautus atsakymus išveskite. Taip pat, raskite kuri suma gavosi didesnė ir išveskite atsakymą.

function skaiciu_suma(masyvas) {
    let suma = 0;
    for (const sk of masyvas) {
        suma += sk;
    }
    return suma;
}

let masyvas1 = [7, 8, 5, 3, 4, 1];
let masyvas2 = [10, 20, 30];

let suma1 = skaiciu_suma(masyvas1);
let suma2 = skaiciu_suma(masyvas2);

console.log("Pirmasis masyvas:", masyvas1);
console.log("Antrojo masyvas:", masyvas2);
console.log("Pirmojo masyvo suma:", suma1);
console.log("Antrojo masyvo suma:", suma2);

if (suma1 > suma2) {
    console.log("Pirmojo masyvo suma yra didesnė:", suma1);
} else if (suma2 > suma1) {
    console.log("Antrojo masyvo suma yra didesnė:", suma2);
} else {
    console.log("Abi sumos yra lygios:", suma1);
}



console.log(' ');
console.log('2 Uzduotis');
console.log(' ');





// function rasti_ilgiausia_zodi(masyvas) {
//     let ilgiausias_zodis = "";

//     for (const zodis of masyvas) {
//         if (zodis.length > ilgiausias_zodis.length) {
//             ilgiausias_zodis = zodis;
//         }
//     }

//     return ilgiausias_zodis;
// }


// zodziai = ["obuolys", "ananasas", "kriaušė", "bananas", "vyšnia"];


// let ilgiausias = rasti_ilgiausia_zodi(zodziai);


// let ilgis = ilgiausias.length;


// console.log("Žodžių masyvas:", zodziai);
// console.log("Ilgiausias žodis:", ilgiausias);
// console.log("Ilgiausio žodžio ilgis:", ilgis);




console.log('=======================Funkcijos su Objektais 1===========================');


let darbuotojas = {
    vardas: 'Jonas',
    pavarde: 'Jonaitis',
    atlyginimas: 1200,
    etatas: 1,
    pakeltasAtlyginimas: function(procentai) {
        let padidejimas = (this.atlyginimas * procentai) / 100;
        return this.atlyginimas + padidejimas;
    },
    pakeistasEtatas: function(naujasEtatas) {
        return this.atlyginimas * naujasEtatas / this.etatas;
    }
};

console.log(darbuotojas);

let naujasAtlyginimas = darbuotojas.pakeltasAtlyginimas(20);
console.log('Naujas atlyginimas padidinus 20%: ', naujasAtlyginimas, 'EUR');

let naujasEtatas = darbuotojas.pakeistasEtatas(0.5);
console.log('Naujas atlyginimas dirbant 0.5 etato: ', naujasEtatas, 'EUR');
