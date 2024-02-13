let arr = [12, 15, 20, 25, 59, 79];
let num = 0;

function getAverage () {
       for (let i = 0; i < arr.length; i++) {
        num += arr[i]
    }
       result = num/arr.length
       return result.toFixed()
}

console.log(`Среднее арифметическое значение массива: ${getAverage()}`)
