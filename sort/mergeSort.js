function mergeSort(arr) {
  // divide n conquer
  if (arr.length <= 1) return arr;

  // divide into 2 parts
  let mid = arr.length / 2;
  leftArr = arr.slice(0, mid);
  rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
  // container to store the merged sub arrays that are sorted each
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  //   return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

// console.log(merge([10, 3], [8, 19])); // not working

// let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
// console.log(mergeSort(arr));
