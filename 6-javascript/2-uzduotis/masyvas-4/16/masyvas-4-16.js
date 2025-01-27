console.log('======================================');
console.log('16 Uzduotis');

let pazymiai16 = [7, 8, 10, 6, 5, 9, 4, 6, 3, 8, 10, 9, 7, 5, 3, 2];
let geri_pazymiai = pazymiai16.filter(pazymiai16 => pazymiai16 >= 8);
let geri_pazymiai_kiekis = geri_pazymiai.length;

console.log('Geri pazymiai (8 ar dauygiau): ' + geri_pazymiai);
console.log('Geru pazymiu kiekis: ' + geri_pazymiai_kiekis);

