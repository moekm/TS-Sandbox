// formal: n^2/ -n/2 aka O(n^2) or O(n^2)/2

interface Swap {
  val: number;
  i: number;
}

function selectionSort(list: number[]): number[] | Error {
  if (!Array.isArray(list)) return new Error("Invalid data type provided");

  const newArray: number[] = [...list];

  for (let i = 0; i < newArray.length; i++) {
    let smallestNumber: Swap = { val: newArray[i], i };

    for (let j = i; j < newArray.length; j++) {
      if (newArray[j] < smallestNumber.val) {
        smallestNumber = { val: newArray[j], i: j };
      }
    }

    // Swap
    newArray[smallestNumber.i] = newArray[i];
    newArray[i] = smallestNumber.val;
  }

  return newArray;
}

console.log(selectionSort([8, 7, 6, 3, 1, 2, 2, 2, 2, 2]));
