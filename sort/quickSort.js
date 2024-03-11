function quickSort(arr) {
  // edge case
  if (arr.length === 1) return arr;

  // choose a pivot (usually last el - why?)
  let pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  // loop through the elements except the pivot (the last element)
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  if (left.length > 0 && right.length > 0) {
    return [...quickSort(left), pivot, ...quickSort(right)];
  } else if (left.length > 0) {
    return [...quickSort(left), pivot];
  } else {
    return [pivot, ...quickSort(right)];
  }
}

let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
console.log(quickSort(arr));
