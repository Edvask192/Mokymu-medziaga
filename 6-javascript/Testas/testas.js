console.log('');
console.log('Užduotis 1');
console.log('');



function eurai_i_dolerius(eurai) {
    let kursas = 1.04;
    return eurai * kursas;
}

let eurai = Math.floor(Math.random() * 1000) + 1;

let doleriai = eurai_i_dolerius(eurai);

console.log(`Sugeneruoti eurai prieš konversiją: ${eurai} EUR`);
console.log(`Sugeneruoti eurai paversti į dolerius: ${doleriai.toFixed(2)} USD`);



console.log('');
console.log('Užduotis 2');
console.log('');



function doleriai_i_eurus(doleriai) {
    let kursas = 0.96;
    return doleriai * kursas;
}

doleriai = Math.floor(Math.random() * 1000) + 1;

eurai = doleriai_i_eurus(doleriai);

console.log(`Sugeneruoti doleriai prieš konversiją: ${doleriai} USD`);
console.log(`Sugeneruoti doleriai paversti į eurus: ${eurai.toFixed(2)} EUR`);



console.log('');
console.log('Užduotis 3');
console.log('');



function BMI_skaiciavimas(mase, ugis) {
    return mase / (ugis ** 2);
}

let mase = 90;
let ugis = 1.8;

let bmi = BMI_skaiciavimas(mase, ugis);

console.log(`Pagal pateiktus duomenis, jūsų BMI yra: ${bmi.toFixed(2)}`);



console.log('');
console.log('Užduotis 4');
console.log('');



function metai_i_sekundes(metai) {
    let dienos = metai * 365.242199;
    let valandos = dienos * 24;
    let minutes = valandos * 60;
    let sekundes = minutes * 60;
    return { dienos, valandos, minutes, sekundes };
}

metai = 60;
let rezultatas = metai_i_sekundes(metai);

console.log(`Žmogaus amžius: ${metai} metai/-ų.`);
console.log(`Dienos: ${rezultatas.dienos.toFixed(2)}`);
console.log(`Valandos: ${rezultatas.valandos.toFixed(2)}`);
console.log(`Minutės: ${rezultatas.minutes.toFixed(2)}`);
console.log(`Sekundės: ${rezultatas.sekundes.toFixed(2)}`);



console.log('');
console.log('Užduotis 5');
console.log('');



function celsijus_i_farenheita(value) {
    return value * (9 / 5) + 32;
}

let celsijus = 95;

let farenheitas = celsijus_i_farenheita(celsijus);


console.log(`Celsijus: ${celsijus}, paverstas į farenheitą lygus: ${farenheitas}`);


function farenheitas_i_celsiju(value) {
    return (value - 32) * (5 / 9);
}

farenheitas = 203;

celsijus = farenheitas_i_celsiju(farenheitas);


console.log(`farenheitas: ${farenheitas}, paverstas į farenheitą lygus: ${celsijus.toFixed(2)}`);



console.log('');
console.log('Užduotis 6');
console.log('');



let skaiciai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Originalus masyvas: ' + skaiciai);

let bruksneliai = skaiciai.join('-');

console.log('Masyvas su bruksneliais: ' + bruksneliai);



console.log('');
console.log('Užduotis 7');
console.log('');


n = 5;

for (let i = 1; i <= n; i++) {
    let eilute = '';
    for (let j = 1; j <= i; j++) {
        eilute += '* ';
    }
    console.log(eilute);
}



console.log('');
console.log('Užduotis 8');
console.log('');



let kaledos = new Date(2026, 12, 25);
let siandiena = new Date();

console.log(`Kalėdų data: ${kaledos.toLocaleDateString('lt')}`);
console.log(`Šiandienos data: ${siandiena.toLocaleDateString('lt')}`);



console.log('');
console.log('Užduotis 9');
console.log('');



console.log('');
console.log('Užduotis 10');
console.log('');