console.log('===============================');
console.log('====    masyvai 2 dalis uzduotys   ====');

console.log('====   1 uzduotis:   ====');

//Susikurkite masyvą, kuriame būtų pateikti mėgstamiausi valgiai. Pamėginkite masyvą papildyti informacija įvairiais būdais (pridėti naują valgį priekyje, gale, per vidurį, pasirinktoje vietoje). Pamėginkite ištrinti kažkuriuos 3 valgius (iš pasirinktų pozicijų, pvz priekio, galo ir vidurio).

let valgiai = ['Pica', 'Kebabas', 'Šmakalas', 'Gvakamole'];

valgiai.unshift('Koldūnai');

valgiai.push('Ledai');

valgiai.splice(3, 0, 'Falafelas', 'Kiaušinienė');

console.log(valgiai);




console.log('====   2 uzduotis:   ====');

//Susikurkite skaičių masyvą. Naudojant includes, patikrinkite ar masyve yra kuris nors pasirinktas skaičius (pvz 8).

let skaiciai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 18, 19, 20];

let tikrinimas9 = skaiciai.includes(9);

console.log(tikrinimas9);





console.log('====   3 uzduotis:   ====');

//Susikurkite masyvą, kuriame būtų surašyti bet kokie žodžiai. Panaudokite join metodą, kad masyvą paverstumėte į teksto eilutę. Paeksperimentuokite su skirtingais skirtukais jungiant tekstą (pvz vieną kartą panaudokite tarpą, kitą kablelius ir t.t.).


let visokie_zodziai = ['Meška','Tigras', 'Lapė',  'Drugelis'];

let masyvo_tekstas = visokie_zodziai.join('=>');

console.log(masyvo_tekstas);

console.log('====   4 uzduotis:   ====');

//Susikurkite pažymių masyvą. Surikiuokite pažymius nuo didžiausio iki mažiausio. Išveskite tris didžiausius pažymius.


let pazymiai = [1, 5, 4, 9, 6, 3, 7, 6, 4, 5, 8, 9, 4, 8, 5, 7, 9, 4, 9, 5, 6, 8];

let surikiuoti_pazymiai = pazymiai.sort();

console.log(surikiuoti_pazymiai);




console.log('====   5 uzduotis:   ====');

//Susikurkite du masyvus, pirmąjame būtų saugomi biologijos pamokos studentų vardai, o antrąjame būtų saugojami matematikos pamokos studentų vardai. Apjunkite šiuos masyvų informaciją į vieną masyvą. Bonus: ar jums pavyktų išskirti tik unikalius vardus? (galima ieškoti kaip panaudoti set).


let biologai = ['Rimas', 'Arijus', 'Kristina', 'Aleksas'];
let matematikai = ['Algis', 'Kajus', 'Rokas', 'Gabija'];

let studentai = biologai.concat(matematikai);

console.log(studentai);




console.log('====   6 uzduotis:   ====');

//Susikurkite du masyvus. Pirmame masyve bus išvardinta pirmo semestro paskaitų temos, o antrame masyve - antro semestro paskaitų temos. Sujunkite šiuos masyvus naudojant spread operator, taip, kad pirmiausia būtų pateikta pirmo semestro informacija ir tada antro.


let pirmas_semestras = ['Kaligrafija', 'Tapyba', 'Fizika', 'Psichologija'];
let antras_semestras = ['Matematika', 'Informatika', 'Šokiai', 'Chemija'];

let sujungimas = [...pirmas_semestras, ...antras_semestras];

console.log('Pirmas: ' + pirmas_semestras);
console.log('Pirmas: ' + antras_semestras);

console.log(sujungimas);




console.log('====   7 uzduotis:   ====');

//Susikurkite masyvą, kuriame būtų išvardintos kelios spalvos. Padarykite šio masyvo kopiją ir duomenis iš originalaus masyvo pašalinkite. Išveskite abu masyvus, atkreipkite dėmesį į tai kad pašalinus duomenis iš pirmojo masyvo, turėjo pasinaikinti tik iš jo, o antrame viskas likti tvarkingai, o jeigu išsitrynė abiejų duomenys - pamėginkite surasti priežastį ir sutvarkyti.

let spalvos = ['Ruda', 'Geltona', 'Mėlyna', 'Rožinė'];

// let kopija_spalvos = spalvos.slice(0);
let kopija_spalvos = [...spalvos];

spalvos.splice(0, 4);

console.log(spalvos);
console.log(kopija_spalvos);



console.log('====   8 uzduotis:   ====');

//Susikurkite masyvą, kuriame būtų saugomi miestų pavadinimai. Atlikite paiešką masyve su indexOf surasdami kurioje pozicijoje yra pasirinktas miestas.


let miestai = ['Vilnius', 'Kaunas', 'Šiauliai', 'Klaipėda'];

let kaunas = miestai.indexOf('Kaunas');

console.log('Kaunas yra: ' + kaunas + ' Indeksas');





console.log('====   9 uzduotis:   ====');

let betkoks_skaicius = [1, 7, 8, 6, 2, 4, 5, 7, 3, 4, 1, 9, 10, 50, 20, 60, 40, 30, 10, 90, 40, 70];

for(let i = 0; i <= betkoks_skaicius.length; i++) {
    kaupimo_masyvas = [...betkoks_skaicius];


}





console.log('====   11 uzduotis:   ====');



let skaiciai1 = [1, 2, 3, 4, 8, 7, 6, 1, 9, 4, 5, 3, 9, 7, 1, 8];
let skaiciai2 = [9, 8, 5, 3, 4, 7, 2, 1, 6];
let tuscias = [];

