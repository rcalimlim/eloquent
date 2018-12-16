let array = [1, 2, 3, 4, 5];

console.log(array.reduce((a, b) => (b % 2 == 0) ? b : a, 0));