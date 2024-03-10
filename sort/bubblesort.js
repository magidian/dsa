// bubble sort
function bubbleSort(arr) {
  // iterate over the array
  for (let i = 0; i < arr.length - 1; i++) {
    // compare adjacent elements and swap if necessary
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let arr = [3, 5, 4, 1, 2];
console.log(bubbleSort(arr));
