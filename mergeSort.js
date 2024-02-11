function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const midPoint = Math.round(array.length / 2);

  const leftHalf = array.slice(0, midPoint);
  const rightHalf = array.slice(midPoint);

  return (merge(mergeSort(leftHalf), mergeSort(rightHalf)));

}

function merge(leftHalf, rightHalf) {
  console.log(`The left ${leftHalf} and right ${rightHalf}`)
  let mergedArray = [];
  let i = 0, j = 0;
  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] < rightHalf[j]) {
      mergedArray.push(leftHalf[i]);
      i++;
    }
    else {
      mergedArray.push(rightHalf[j]);
      j++;
    }
  }
  while (i < leftHalf.length) {
    mergedArray.push(leftHalf[i]);
    i++;
  }
  while (j < rightHalf.length) {
    mergedArray.push(rightHalf[j]);
    j++;
  }
  return mergedArray;
}
