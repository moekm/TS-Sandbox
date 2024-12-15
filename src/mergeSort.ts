// O(n log n) or O(n) * O(log n) - best visualized with a tree

function mergeSort(array: number[]): number[] {
  if (array.length <= 1) return array;

  // Should be O(log N)
  const midIndex = Math.floor(array.length / 2);
  const rArray = array.splice(midIndex);
  const lArray = array;
  array.length = midIndex; // will change the lArray reference in O(1)

  // O(n)
  return merge(mergeSort(lArray), mergeSort(rArray));
}

function merge(leftArray: number[], rightArray: number[]): number[] {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      result.push(leftArray[leftIndex]);
      leftIndex++;
      continue;
    }

    // then right > left
    result.push(rightArray[rightIndex]);
    rightIndex++;
  }

  // Add the remaining to the results array
  result.push(...leftArray.splice(leftIndex));
  result.push(...rightArray.splice(rightIndex));

  return result;
}

console.log(mergeSort([38, 94, 100, 7, 8]));
