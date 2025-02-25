function insertionSort(arr) {
  // pseudocode
  /**
   * for i : 1 to length(arr) - 1
   *  j = i
   *  while j > 0 and arr[j-1] > arr[j]
   *      swap arr[j] and arr[j-1]
   *      j = j - 1
   */

  // after comparing elements to the left
  // shift elements to the right to make room to insert a value
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    // compare the element to the left
    let j = i - 1;
    // shift element to the right if bigger than the current element
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j]; // shift to right
      j--; // shift pointer j to left
    }
    arr[j + 1] = temp; // insert the current element in the right spot
  }
  return arr;
}

let arr = [3, 5, 4, 1, 2];
console.log(insertionSort(arr));
