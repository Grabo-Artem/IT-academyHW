let minMS = 1000;
let maxMS = 5000;

function secRandom(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min);
}

let prom1 = new Promise((resolve, reject) => {
    setTimeout(resolve, secRandom(minMS,maxMS), 1);
});
let prom2 = new Promise((resolve, reject) => {
    setTimeout(resolve, secRandom(minMS,maxMS), 2);
});
let prom3 = new Promise((resolve, reject) => {
    setTimeout(resolve, secRandom(minMS,maxMS), 3);
});

Promise.race([prom1, prom2, prom3])
    .then((result) => {
        console.log(result);
    });
