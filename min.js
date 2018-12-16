console.time('min');
function min(a, b) {
    return (a < b ? a : b);
}
console.log(min(0, -10));
console.timeEnd('min');

console.time('minSol');
function minSol(a, b) {
  if (a < b) return a;
  else return b;
}
console.log(minSol(0, -10));
console.timeEnd('minSol');
// console.time(console.log(min(0, -10)));
