function reverseArray(array) {
    let reversedArray = [];
    for (let value of array) {
        reversedArray.unshift(value);
    }
    return reversedArray;
}

function reverseArrayInPlace(array) {
    let arrLength = array.length
    for (let i = 0; i < Math.floor(arrLength / 2); ++i) {
        let temp = array[i];
        array[i] = array[arrLength - 1 - i];
        array[arrLength - 1 - i] = temp;
    }
    return array;
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);