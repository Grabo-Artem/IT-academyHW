let start = 5  // ряд начиная с N члена
let max = 3 // длинной массива M

console.log(getFibobonacciLenth(start, max))

function getFibobonacciLenth (st, m) {
    let arr= [0, 1]
    length = st+m
    for (let a=1; a<=length; a++) {
        arr.push(getOneFibonacci(a))

        function getOneFibonacci(i) {
            return i <= 1 ? i : getOneFibonacci(i - 1) + getOneFibonacci(i - 2)
        }
    }
    return arr.slice(st, length)
}