function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // current min
      let currentMin = arr[i];
      if (arr[j] < arr[i]) currentMin = arr[j];
      // swap arr[i] with min
      let temp = arr[i];
      arr[i] = currentMin;
      arr[j] = arr[i];
    }
  }
  return arr;
}

let arr = [3, 5, 4, 1, 2];
console.log(selectionSort(arr));
