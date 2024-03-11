function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // current min
    let currentMin = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        currentMin = arr[j];
        // swap arr[i] with min
        let temp = arr[i];
        arr[i] = currentMin;
        arr[j] = temp;
      }
    }
  }
  return arr;
}

let arr = [3, 5, 4, 1, 2];
console.log(selectionSort(arr));
