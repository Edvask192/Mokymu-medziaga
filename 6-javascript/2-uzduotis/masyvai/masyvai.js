console.log('C1 -------------------------------------------------------');
console.log('Uzduotis 1: --------------');



let masyvas = [4, 9, 10, 2, 42, 31];


console.log('Pirmas masyvo narys:', masyvas[0]);
console.log('Paskutinis masyvo narys:', masyvas[masyvas.length - 1]);
console.log('Du pasirinkti masyvo nariai:', masyvas[3], masyvas[4]);
console.log('Masyvo nariu kiekis:', masyvas.length);



console.log('Uzduotis 2: --------------');



masyvas = [6, 45, 23, 74, 93, 3, 19];

console.log('Masyvo duomenys:' + masyvas);

masyvas[2] = 222;
masyvas[6] = 666;
masyvas[0] = 101;

console.log('Masyvo duomenys po pakeitimu:' + masyvas);



console.log('Uzduotis 3: --------------');



masyvas = [];

console.log('Masyvo duomenys:' + masyvas);

masyvas.push(245, 6754, 23432, 224);

console.log('Masyvo duomenys po pakeitimu:' + masyvas);



console.log('Uzduotis 4: --------------');


masyvas = [];

for (let i = 0; i < 20; i++) {
    let atsitiktinis = Math.floor(Math.random() * 10) + 1;
    masyvas.push(atsitiktinis);
}

console.log('Atsitiktinai sugeneruoti masyvo duomenys: ' + masyvas);



console.log('Uzduotis 5: --------------');



let pirmasis = [3, 7, 5, 9, 7], antrasis = [2, 10, 2, 5, 8];

let sumapirmas = pirmasis[0] + pirmasis[1] + pirmasis[2] + pirmasis[3] + pirmasis[4];
let sumaantras = antrasis[0] + antrasis[1] + antrasis[2] + antrasis[3] + antrasis[4];

let vidurkispirmas = sumapirmas / pirmasis.length;
let vidurkisantras = sumaantras / antrasis.length;

console.log('Pirmo studento pazymiai:' + pirmasis);
console.log('Antro studento pazymiai:' + antrasis);

console.log('Pirmo studento vidurkis:' + vidurkispirmas);
console.log('Antro studento vidurkis:' + vidurkisantras);



console.log('C2 -------------------------------------------------------');

console.log('Uzduotis 1: --------------');


console.log('FORFORFORFORFORFORFORFOR');
let programos = ['Inzinerija', 'Vadyba', 'Autotransporto elektronika', 'Tapyba'];

console.log('Studiju programos:');

for (let i = 0; i < programos.length; i++) {
    console.log(programos[i]);
}

console.log('WHILEWHILEWHILEWHILEWHILE');
programos = ['Inzinerija', 'Vadyba', 'Autotransporto elektronika', 'Tapyba'];

console.log('Studiju programos:');

let i = 0;
while(i < programos.length) {
    console.log(programos[i]);
    i++;
}



console.log('Uzduotis 2: --------------');



console.log('FORFORFORFORFORFORFORFOR');
let salys = ['Suomija', 'Vengrija', 'Vietnamas', 'Estija', 'Ispanija'];

for (let i = 0; i < salys.length; i++) {
    console.log('šalis:', salys[i]);
}


console.log('WHILEWHILEWHILEWHILEWHILE');
salys = ['Suomija', 'Vengrija', 'Vietnamas', 'Estija', 'Ispanija'];
i = 0;

while(i < salys.length) {
    console.log('šalis: ' + salys[i]);
    i++;
}


console.log('Uzduotis 3: --------------');


console.log('FORFORFORFORFORFORFORFOR');
let projektas = ['Projektas - ASSA', 'Projektas - BOKA', 'Projektas - SITA', 'Projektas - ZAZA'];


for (let i = 0; i < projektas.length; i++) {
    console.log(`Nr. ${i + 1} ${projektas[i]}`);
}



console.log('WHILEWHILEWHILEWHILEWHILE');
projektas = ['Projektas - ASSA', 'Projektas - BOKA', 'Projektas - SITA', 'Projektas - ZAZA'];
let j = 0;

while(j < projektas.legnth) {
    console.log(`Nr. ${j + 1} ${projektas[j]}`);
    j++;
}



console.log('Uzduotis 4: --------------');



skaiciai = [1, 554, 2, 43, 6, 4];

for (let i = 0; i < skaiciai.length; i++) {
    if (skaiciai[i] > 5) {
        console.log('Skaicius didesni uz 5:' + skaiciai[i]);
    }
}



console.log('Uzduotis 5: --------------');



// let skaiciai = [1, 45, 23, 76, 34, 97, 111, 3, 14];
skaiciai = [];
let skaiciusuma = 0;

for (let i = 0; i < 10; i++) {
    atsitiktinis = Math.floor(Math.random() * 100) + 1;
    skaiciai.push(atsitiktinis);

    if (skaiciai[i] % 4 === 0) {
        console.log('Skaicius, kuris dalinasi is 4:' + skaiciai[i]);
        skaiciusuma += skaiciai[i];
    }
}

console.log('Visu skaiciu, kurie dalinasi is 4 suma:' + skaiciusuma);



console.log('Uzduotis 6: --------------');



let pazymiai = [];
suma = 0;

for (let i = 0; i < 8; i++) {
    atsitiktinis = Math.floor(Math.random() * 10) + 1;
    pazymiai.push(atsitiktinis)
    suma += atsitiktinis;
}

let vidurkispazymiai = suma / pazymiai.length;

console.log('Visi pazymiai:' + pazymiai);
console.log('Pazymiu vidurkis:' + vidurkispazymiai);



console.log('Uzduotis 7: --------------');



pazymiai = [];
suma = 0;

for (let i = 0; i < 10; i++) {
    atsitiktinis = Math.floor(Math.random() * 10) + 1;
    pazymiai.push(atsitiktinis)
    suma += atsitiktinis;
}

vidurkispazymiai = suma / pazymiai.length;

let didesnis_vidurkis = pazymiai.filter(pazymys => pazymys > vidurkispazymiai);

console.log('Pazymiu vidurkis:' + vidurkispazymiai);
console.log('Skaiciai didesni uz vidurki:' + didesnis_vidurkis);



console.log('Uzduotis 8: --------------');



console.log('FORFORFORFORFORFORFORFOR');
skaiciai = [10, 4, 5, 23, 54, 76, 45];

for(let i = 0; i < skaiciai.length; i++) {
    if(skaiciai[i] % 2 === 0) {
        console.log(`${skaiciai[i]} ir lyginio skaiciaus skvadratas (${skaiciai[i]*skaiciai[i]})`)
    }
    else{
        console.log(`${skaiciai[i]}`)
    }
}





console.log('Uzduotis 9: --------------');



console.log('FORFORFORFORFORFORFORFOR');
pazymiai = [2, 6, 4, 8, 9, 3, 8, 6, 5, 10, 7];

for(let i = 0; i < pazymiai.length; i++) {
    if(pazymiai[i] >= 5) {
        console.log(`Teigiamas - ${pazymiai[i]}`);
    }
    else {
        let truko = 5 - pazymiai[i];
        console.log(`Neigiamas - ${pazymiai[i]}, Iki teigiamo trūko ${truko} balų`);
    }
}



console.log('Uzduotis 10: --------------');

let zodziai = ['Kardas', 'Pienas', 'Lašas', 'Kanopa', 'Lietpaltis', 'Grūstuvas'];
j = 0;
let bendras_raidziu_kiekis = 0;

while(j < zodziai.length) {

    let raidziu_kiekis = zodziai[j].length;
    bendras_raidziu_kiekis += raidziu_kiekis;
    console.log(`${zodziai[j]}, žodis sudarytas iš ${raidziu_kiekis}`);
    j++;
}

console.log(`Bendras visų raidžių kiekis yra ${(bendras_raidziu_kiekis)}`);

console.log('Uzduotis 11 aka 10: --------------');


skaiciai = [21, 432, 64, 756, 23, 655, 98, 542, 89, 12];
suma = 0;
let vidurkis = 0;
let kiekis = 0;

for(let i = 0; i < skaiciai.length; i++) {
    if(skaiciai[i] % 3 === 0) {
        console.log(`Skaiciai kurie dalinasi is 3 ${skaiciai[i]}`);
        suma += skaiciai[i];
        kiekis++;
    }
}

vidurkis = suma / kiekis;

console.log('Skaiciu suma: ' + suma)
console.log('Skaiciu vidurkis: ' + vidurkis)
