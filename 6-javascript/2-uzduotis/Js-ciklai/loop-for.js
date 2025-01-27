console.log('==================================');
console.log('====   5 uzduotis:        ====');

let start = 10;
let end = 60;

if (start < end) {
    for (let i = start; i < end; i++) {
        console.log((i), ' ', (Math.pow(i, 2)));
    }
} else if (start > end) {
    console.log('invalid');
};
