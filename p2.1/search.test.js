// const { sequentialSearch, binarySearch } = require('./app');
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
};

function sequentialSearch(arr, targetValue) {
  let found = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == targetValue) {
      found = i;
      break;
    }
  }
  return found;
};

const arr = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];

describe('Sequential Search', () => {
  test('should output index of value', () => {
    expect(sequentialSearch(arr, 25)).toBe(4);
  });

  test('should output -1 as for invalid', () => {
    expect(sequentialSearch(arr, 2)).toBe(-1);
  });
});

describe('Binary Search', () => {
  const sortedArr = [...arr].sort((a, b) => a - b);

  test('should output index of value', () => {
    expect(binarySearch(sortedArr, 25)).toBe(7);
  });

  test('should output -1 as for invalid', () => {
    expect(binarySearch(sortedArr, 2)).toBe(-1);
  });
});
