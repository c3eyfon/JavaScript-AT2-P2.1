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


let testAry = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
/**
 * Executing this function to perform sequential search on number array
 * This function loop through the values in array one by one to find the target value
 * @param {number[]} arr - The number array that the function will loop through
 * @param {number} targetValue - The number to search for
 * @returns {number} - This function returns the index of targeted value inside array; othervise returns -1
 */

function sequentialSearch(arr, targetValue) {
  let found = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == targetValue) {
      found = i;
      break;
    }
  }
  return found;
}

// Define the key and result var

let key = 2;
const result = sequentialSearch(testAry, key);

// Output results

if (result == -1) {
    console.log(`The key ${key} was not found`);
} else {
    console.log(`The key ${key} was found at index ${result}`);
}


const sortedTestAry = [...testAry].sort((a, b) => a - b);
/**
 * Executing this function to perform binary search on number array
 * This function divides the search interval in half repeatedly to find the middle value
 * @param {number[]} arr - The number array to search through
 * @param {number} targetValue - The number to search for
 * @returns {number} - This function returns the index of targeted value inside array; othervise returns -1
 */

function binarySearch(arr, targetNum) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === targetNum) {
      return mid;
    } else if (arr[mid] < targetNum) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

let biKey = 2;
const biResult = binarySearch(sortedTestAry, biKey);

// Output results

if (biResult === -1) {
  console.log(`The biKey ${biKey} was not found`);
} else {
  console.log(`The biKey ${biKey} was found at index ${biResult}`);
}