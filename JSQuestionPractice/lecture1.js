// 1. Big O Notation

// Understanding with example

// problem - right code for summing all number till n

// function approach1(n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// function approach2(n) {
//     return (n * (n + 1)) / 2;
// }
// let t1 = performance.now();
// approach1(500000000);
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds `);

// let t3 = performance.now();
// approach2(500000000);
// let t4 = performance.now();
// console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds `);
