console.log('===============================');
console.log('====    masyvai 2 dalis uzduotys    ====');



console.log('====   1 uzduotis:   ====');

let zodziai = ['Lapė', 'Katė', 'Meškinas', 'Ruonis', 'Žiurkė', 'Kalakutas'];

for (const indeksas in zodziai) {
    console.log(`${indeksas} - ${zodziai[indeksas]}`)
}




console.log('====   2 uzduotis:   ====');

let pirkiniai = ['Kiaušiniai', 'Pienas', 'Miltai', 'Cukrus', 'Kakava'];

console.log(`Šiame sąraše yra ${pirkiniai.length} pirkiniai`);
for (const indeksas in pirkiniai) {
    console.log(`${indeksas} : ${pirkiniai[indeksas]}`)
}




console.log('====   3 uzduotis:   ====');

let pazymiai = [1, 4, 7, 4, 8, 3, 9, 2, 10, 6, 7];
let suma = 0;
let vidurkis = 0;

for (let pazymys of pazymiai) {
    suma += pazymys;
    vidurkis = suma / pazymiai.length;
}
console.log(`Pažymių suma: ${suma}`);
console.log(`Pažymių viurkis: ${parseFloat(vidurkis).toFixed(2)}`);




console.log('====   4 uzduotis:   ====');

kilometrai = [120, 145, 90, 65, 30, 230, 110, 700, 155];

for (let dienos_atstumas of kilometrai) {
    if (dienos_atstumas > 150) {
        console.log(`Atstumai, kurie didesni už 150 km: ${dienos_atstumas}`);
    }
}




console.log('====   5 uzduotis:   ====');

let klaidos = ['e101', 'e404', 'u66'];

console.log(`${klaidos[0]}: Nenumatyta OS klaida`);
console.log(`${klaidos[1]}: Tinklapis nerastas`);
console.log(`${klaidos[2]}: Klaida kalbiniame pakete`);






console.log('====   6 uzduotis:   ====');


let likuciai = [74, 54, 32];
let per_diena_perka = 5;

for (let likutis of likuciai) {
    console.log(likutis + ' vnt uzteks mazdaug tiek d: ' + Math.floor(likutis / per_diena_perka));
}



console.log('====   7 uzduotis:   ====');

pazymiai = [];
vidurkis = 0;
suma = 0;
neigiami = [];

for (let i = 0; i < 20; i++) {

    let pazymys = Math.floor(Math.random() * 10) + 1;
    pazymiai.push(pazymys);

    suma += pazymys;

    vidurkis = suma / pazymiai.length;

    if (pazymys < 5) {
        neigiami.push(pazymys);
    }
    else {
        console.log(`Teigiami pazymiai: ${pazymys}`)
    }

}
console.log(`Pazymiu kiekis, kurie yra neigiami:  ${neigiami.length}`);

console.log(`Teigiamu suma: ${suma}`);
console.log(`Teigiamu vidurkis: ${vidurkis}`);




console.log('====   8 uzduotis:   ====');


let pazymiai1 = [4, 5, 8, 9, 4, 7, 6, 8, 7, 9, 10, 8, 5, 7, 9, 4, 6, 8];
suma1 = 0;
vidurkis1 = 0;

let pazymiai2 = [5, 7, 10, 6, 4, 3, 8, 5, 9, 1, 5, 7, 8, 9, 4, 9, 7, 9];
suma2 = 0;
vidurkis2 = 0;


for (let pazymys1 of pazymiai1) {
    suma1 += pazymys1;
}
vidurkis1 = suma1 / pazymiai1.length;

for (let pazymys2 of pazymiai2) {
    suma2 += pazymys2;
}
vidurkis2 = suma2 / pazymiai2.length;


console.log(`Pirmo studento pazymiai: ${pazymiai1}`)
console.log(`Antro studento pazymiai: ${pazymiai2}`)


if (vidurkis1 > vidurkis2) {
    console.log(`Pirmo studento vidurksi didesnis: ${parseFloat(vidurkis1).toFixed(2)} > ${parseFloat(vidurkis2).toFixed(2)}`);
}
else {
    console.log(`Antro studento vidurkis didesnis: ${parseFloat(vidurkis2).toFixed(2)} > ${parseFloat(vidurkis1).toFixed(2)}`)
}



console.log('====   9 uzduotis:   ====');



console.log('====   10 uzduotis:   ====');



console.log('====   11 uzduotis:   ====');



console.log('===============================');