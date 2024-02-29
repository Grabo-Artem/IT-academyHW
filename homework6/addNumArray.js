let arr = [1, 2, 3, 4, 5]
let newPart = [ 'a', 'b', 'c']
let place = 3

function newArray(arr, place, newPart){
    let resultArr = arr.slice(0, place);
    resultArr = resultArr.concat(newPart, arr.slice(place));
    return resultArr;

}
console.log(newArray(arr, place, newPart))
