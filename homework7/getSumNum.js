let minNum1 = 1;
let maxNum1 = 5;
let minNum2 = 6;
let maxNum2 = 10;
let timeOut1 = 3000;
let timeOut2 = 6000;

function random(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min);
}

function getNum(min, max, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(random(min, max));
        }, timeout);
    });
}

async function getSumNum1Num2 (){
    let sum1 = await getNum(minNum1, maxNum1, timeOut1)
    let sum2 = await getNum(minNum2, maxNum2, timeOut2)
    console.log(sum1)
    console.log(sum2)
    return console.log(sum1 + sum2)
}

getSumNum1Num2()

