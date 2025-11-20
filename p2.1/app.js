let numAry = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
console.log(numAry);

const sortedNumA = numAry.sort(function (a, b) {
  return a - b;
});
console.log(sortedNumA);

function addIntoAry(arr, ...addValue) {
  arr.push(...addValue);
  arr.sort((a, b) => a - b);
  return arr;
};

console.log(addIntoAry(numAry, 19,23,30));

function numRemove(arr, numValue) {
  return arr.filter(function (a) {
    if (!numValue.includes(a)) {
      return true;
    } else {
      return false;
    }
  });
}

let newAry = numRemove(numAry, [8, 31]);
console.log(newAry);
