console.log('==========================String========================');
console.log('1 Uzduotis');
console.log(' ');

//Apversti string tipo kintamojo reikšmę. pvz: labas -> sabal. for ir metodu.


function apverstas_tekstas(zodis) {
    let apverstas = '';
    for (let i = zodis.length - 1; i >= 0; i--) {
        apverstas += zodis[i];
    }
    return apverstas;
}

let zodis = 'labas';
let zodis2 = 'katinelis'

console.log(`Pirminis žodis: ${zodis}`)
console.log(`Apverstas žodis: ${(apverstas_tekstas(zodis))}`);



console.log(' ');
console.log('2 Uzduotis');
console.log(' ');

// //Funkcija, kuri tikrins ar tekste yra tam tikras sakinys. 
// a. naudojant tik for
// b. true / false
// c. pvz :  Funkcija, kuri tikrins ar tekste yra tam tikras sakinys.  
//      1. yra -> true
//      2. nera -> false



// function teksto_tikrinimas(sakinys) {
//     for (let i = 0; i < sakinys.length; i++) {
//         if (sakinys[i] === zodis) {
//             return true;
//         }
//     }
//     return false;
// }

// zodis = ['Funkcija, kuri tikrins ar tekste yra tam tikras sakinys.'];

// console.log(teksto_tikrinimas('Funkcija'))



console.log(' ');
console.log('==========================Datos========================');


console.log(' ');
console.log('1 Uzduotis');
console.log(' ');


let now = new Date();

console.log(`Išvesta data NOW`);
console.log(now.toLocaleDateString('lt'));

let now_n = new Date();
now_n.setDate(now_n.getDate() - 5);

console.log(`Išvesta data NOW - 5 dienų`);
console.log(now_n.toLocaleDateString('lt'));



console.log(' ');
console.log('2 Uzduotis');
console.log(' ');



if(now > now_n) {
    console.log(`Data: ${now.toLocaleDateString('lt')} yra didesnė, nei data: ${now_n.toLocaleDateString('lt')}`);
}   else {
    console.log(`Data: ${now_n.toLocaleDateString('lt')} yra didesnė, nei data: ${now.toLocaleDateString('lt')}`);
}


console.log(' ');
console.log('3 Uzduotis');
console.log(' ');


let data1 = new Date(2450, 08, 21);
// let data2 = new Date('2150-02-10');
let data2 = new Date(2150, 01, 10);

console.log(`Data Nr. 1: ${data1.toLocaleDateString('lt')}`);
console.log(`Data Nr. 2: ${data2.toLocaleDateString('lt')}`);

data1.setDate(data1.getMonth - data2.getMonth);

console.log(`Data Nr. 1: ${data1.toLocaleDateString('lt')}`);

