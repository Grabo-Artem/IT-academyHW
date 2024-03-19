let str1 = "122121";
let num =2;
let sum1=0;
let sum2=0;

function sumNums() {
    for (let i = 0; i < num; i++){
        sum1 += +str1[i]
        sum2 += +str1[i + num]
    }
    // console.log("sum1 =" +sum1)
    // console.log("sum2 ="+ sum2)

    if (sum1===sum2)
    {answer = 'да'}
    else
    {answer = 'нет'}
    return answer
}

console.log(sumNums())
