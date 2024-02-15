
let n = 7;
let m = 3;
let arr = [];

function getFibonacci (num) {
    return num <= 1 ? num : getFibonacci(num-1) + getFibonacci(num-2)
}

function arrLine (start, number) {
       for (let i=start; i < (start+number); i++) {
            arr.push(getFibonacci(i));
        }
        return arr;
    }

console.log(arrLine(n,m));
