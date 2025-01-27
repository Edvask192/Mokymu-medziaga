console.log('======================================');
console.log('17 Uzduotis');

let fib = [];
let n = 20;

for (let i = 0; i < n; i++) {
    if (i > 1) {
        fib.push(
            fib[i - 1] + fib[i - 2]
        )
    } else {
        fib[i] = 1;
    }
}

console.log(fib);

console.log('======================================');