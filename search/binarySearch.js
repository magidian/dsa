// searching for a value in a sorted array

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (mid === target) return mid;
    else if (mid < target) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 5, 7, 8, 9], 8)); // hanging?
