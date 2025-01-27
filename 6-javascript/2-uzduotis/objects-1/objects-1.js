console.log('======================================');
console.log('=== Objektai 1 dalis uzduotys ===');
console.log('=== 1 uzduotis ===');

let studentas = {
    vardas: 'Tomas',
    pavarde: 'Tomisevicius',
    amzius: 26 + ' metai',
    studiju_programa: 'Autotransporto Elekltronika',
    kreditu_skaicius: 6,
    pazymiai: [5, 7, 5, 8, 9, 9, 6, 10],
    ugis: 186 + ' cm',
    studijuojamas_kursas: 3,
    mokymo_istaiga: 'VU'
};

console.log(studentas);

console.log('=== 3 uzduotis ===');

let knyga1 = {
    pavadinimas: "Jumanji",
    autorius: "Chris Van Allsburg",
    zanras: "Vaikų fantastinė literatūra",
    kaina: 25,
    puslapiu_kiekis: 32,
    skyriu_sarasas: ["Pradžia", "Žaidimo pradžia", "Nuotykiai", "Pabaiga"],
    isleidimo_metai: 1981,
    knyga_randama_knygynuose: true
};


let knyga2 = {
    pavadinimas: "Tylos galia",
    autorius: "Susan Cain",
    zanras: "Psichologija",
    kaina: 14.99,
    puslapiu_kiekis: 350,
    skyriu_sarasas: ["Įžanga", "Tylos vertė", "Socialinė dinamika", "Praktiniai patarimai"],
    isleidimo_metai: 2012,
    knyga_randama_knygynuose: true
};

console.log('Knyga numeris 1');
console.log(knyga1);
console.log('Knyga numeris 2');
console.log(knyga2);


if (knyga1.puslapiu_kiekis > knyga2.puslapiu_kiekis) {
    console.log('Knyga: ' + knyga1.pavadinimas + ' yra storesne');
} else {
    console.log('Knyga: ' + knyga2.pavadinimas + ' yra storesne');
}

if (knyga1.skyriu_sarasas.length > knyga2.skyriu_sarasas.length) {
    console.log('Knyga: ' + knyga1.pavadinimas + ' turi daugiau skyriu');
} else {
    console.log('Knyga: ' + knyga2.pavadinimas + ' turi daugiau skyriu');
}

if ((knyga1.kaina * 2) > knyga2.kaina) {
    console.log('Padvigubinta ' + knyga1.pavadinimas + ' kaina yra brangesne uz ' + knyga2.pavadinimas + ' kaina');
} else {
    console.log('Padvigubinta ' + knyga1.pavadinimas + ' kaina nera brangesne uz ' + knyga2.pavadinimas + ' kaina');
}




console.log('=== 4 uzduotis ===');

let preke1 = {
    pavadinimas: "Telefonas",
    kaina: 699,
    savikaina: 500,
    kodas: "P001",
    kiekis_sandelyje: 50,
    dezes_matmenys: { x: 10, y: 5, z: 2 }
};

let preke2 = {
    pavadinimas: "Nešiojamas kompiuteris",
    kaina: 1200,
    savikaina: 800,
    kodas: "P002",
    kiekis_sandelyje: 20,
    dezes_matmenys: { x: 30, y: 20, z: 3 }
};

let preke3 = {
    pavadinimas: "Ausinės",
    kaina: 199,
    savikaina: 100,
    kodas: "P003",
    kiekis_sandelyje: 100,
    dezes_matmenys: { x: 15, y: 10, z: 5 }
};

console.log('Pirma prekė kainuoja: ' + preke1.kaina + ' Eurų', 'Antra prekė kainuoja: ' + preke2.kaina + ' Eurų', 'Trečia prekė kainuoja: ' + preke3.kaina + ' Eurų');

if (preke1.kaina > preke2.kaina && preke1.kaina > preke3.kaina) {
    console.log('Pirmos prekės ' + preke1.pavadinimas + ' kaina didžiausia');
} else if (preke2.kaina > preke1.kaina && preke2.kaina > preke3.kaina) {
    console.log('Antros prekės ' + preke2.pavadinimas + ' kaina didžiausia');
} else if (preke3.kaina > preke2.kaina && preke3.kaina > preke1.kaina) {
    console.log('Trečios prekės: ' + preke3.pavadinimas + ' kaina didžiausia');
}

pelningumas1 = ((preke1.kaina - preke1.savikaina) * preke1.kiekis_sandelyje);
pelningumas2 = ((preke2.kaina - preke2.savikaina) * preke2.kiekis_sandelyje);
pelningumas3 = ((preke3.kaina - preke3.savikaina) * preke3.kiekis_sandelyje);

console.log('Pirmos prekės pelningumas: ' + pelningumas1);
console.log('Antros prekės pelningumas: ' + pelningumas2);
console.log('Trečios prekės pelningumas: ' + pelningumas3);


console.log('=== Objektai 4 dalis uzduotys ===');

console.log('=== 1 uzduotis ===');

let kompanijos = [
    {
        pavadinimas: "TechSolutions",
        ikurimo_data: 2005,
        darbuotoju_skaicius: 150,
        atlyginimas: 1200000, // eurais
    },
    {
        pavadinimas: "GreenEnergy",
        ikurimo_data: 2010,
        darbuotoju_skaicius: 80,
        atlyginimas: 800000, // eurais
    },
    {
        pavadinimas: "EduFuture",
        ikurimo_data: 2015,
        darbuotoju_skaicius: 50,
        atlyginimas: 600000, // eurais
    },
];

let bendras_atlyginimas = 0;

console.log('Visos kompanijos');

for(const kompanija of kompanijos) {
    bendras_atlyginimas += kompanija.atlyginimas;
    console.log('-', kompanija.pavadinimas, 'moka', kompanija.atlyginimas, 'eur i metus');

}

console.log();
console.log('Kompaniju kiekis: ', kompanijos.length);
console.log('Bendras atlyginimas: ', bendras_atlyginimas, 'eur');
console.log('Bendras atlyginimas: ', Math.round(bendras_atlyginimas), 'eur');

