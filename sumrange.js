function range(start, end, step = start < end ? 1 : -1) {
    if (start < end && step < 0) return -1;
    else if (start > end && step > 0) return -1;
    else if (start > end) {
        let rangeArray = [];
        for (let i = start; i >= end; i += step) {
            rangeArray.push(i);
        }
        return rangeArray;
    }
    else {
        let rangeArray = [];
        for (let i = start; i <= end; i += step) {
            rangeArray.push(i);
        }
        return rangeArray;
    }

}

function sum(array) {
    let sumTotal = 0;
    for (let num of array) {
        sumTotal += num;
    }
    return sumTotal;
}

console.log(sum(range(1, 10)));