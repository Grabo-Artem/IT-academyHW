let num = 15
let numpise = 3
let obj =[]
let num1 = num

for (i=1; i<numpise; i++)
{
    ramNum = Math.ceil(Math.random()*(num1-(numpise-i-1)))
    // console.log(`random number is ${ramNum}`)
    num1=num1-ramNum
    obj.push(ramNum)
}

sumOfNumbers = obj.reduce((acc, obj) => acc + obj);

if (sumOfNumbers < num)
    lastnum=num-sumOfNumbers
else
    lastnum = 0

obj.push(lastnum)
console.log(`Number ${num} consists of numbers:${obj}`)