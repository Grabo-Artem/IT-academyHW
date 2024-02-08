let num = 15;
let a1 = num;
let numpice = 3;
let partsArr1 = [];
let randSum1 = 0;

for (let i = 1; i < numpice; i++) {
    let rand1 = Number((Math.random() * a1).toFixed(2));
    partsArr1.push(rand1);
    randSum1 += rand1;
    a1 = a1 - rand1;
}
partsArr1.push(Number((num - randSum1).toFixed(2)));
console.log(`Number ${num} consists of numbers:${partsArr1}`);