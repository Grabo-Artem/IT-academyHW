let minNum = 1;
let maxNum = 5;
let timeOut = 3000;

function Random(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min);
}

function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Random(minNum, maxNum));
        }, timeOut);
    });
}

async function getSquare() {
    let result = await getNum();
    return console.log(result * result);
}

getSquare();