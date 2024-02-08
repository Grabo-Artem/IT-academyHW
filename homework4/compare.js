let num1 = 7652
let num2 = 2354

let check2=0
let num1str = String(num1)
let arr1 = Array.from(num1str)
console.log(arr1)

let num2str = String(num2)
let arr2 = Array.from(num2str)
console.log(arr2)
let count1 =0

console.log(`Cравнение по значению и позиции:`)
for (a=0; a<arr1.length; a++){
    if (arr1[a] === arr2[a]) {
       count1++
    }
}
console.log(`Количество совпвдений ${count1}`)


console.log("Количество совпадающих чисел в массивах:")
for (a=0; a<arr1.length; a++){
    b=arr1[a]
    for (c=0; c<arr2.length; c++) {
        if (b === arr2[c])
            check2 +=1
    }
}
console.log(`${check2} совпадения(ий)`)

