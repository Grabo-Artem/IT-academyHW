let arr = [1, 2, 3, 4, 5]
let newPart = [ 'a', 'b', 'c']
let place = 4

function newArray(ind, newdata){
    newarr = arr.splice(ind, 0, newdata)
    return arr.flat()
}
console.log(newArray(place,newPart))