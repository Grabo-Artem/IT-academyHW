let num1 = 7652
let num2 = 2354

let check2=0
var num1str = String(num1)
var arr1 = Array.from(num1str)
console.log(arr1)

var num2str = String(num2)
var arr2 = Array.from(num2str)
console.log(arr2)

console.log(`Cравнение по значению и позиции:`)
for (a=0; a<arr1.length; a++){
    if (arr1[a] !== arr2[a])
        console.log(`В позиции ${a} массивов нет совпадающих чисел`)
    else
        console.log(`В позиции ${a} массивов найдены совпадающие числа: ${arr1[a]}`)
}
console.log()


console.log("Количество совпадающих чисел в массивах:")
for (a=0; a<arr1.length; a++){
    b=arr1[a]
    for (c=0; c<arr2.length; c++) {
        if (b === arr2[c])
            check2 +=1
        else
            console
    }
}
console.log(`${check2} совпадения(ий)`)

