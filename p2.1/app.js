let numAry = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
console.log(numAry);

function sortAry(a, b) {
  return a - b;
}

numAry.sort(sortAry);
console.log(numAry);

numAry.push(19, 23, 30);
numAry.sort(sortAry);
console.log(numAry);

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

console.log(sequentialSearch(newAry, 25));

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

console.log(binarySearch(newAry, 25));
