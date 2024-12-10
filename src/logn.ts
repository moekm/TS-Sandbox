// O(log n) log2 (n)
// Returns: The index of the search value or -1 if there's no match

interface Flags {
  validate?: boolean;
  debug?: boolean;
}

function binarySearch(
  searchValue: number,
  orderedArray: number[],
  flags?: Flags
): number {
  let iteration = 0;
  let offsetStart = 0;
  let offsetEnd = orderedArray.length - 1;

  while (offsetStart <= offsetEnd) {
    iteration++;

    let searchArrayLength = offsetEnd - offsetStart;
    let middlePoint = Math.round(searchArrayLength / 2);

    let middlePointIndex = offsetStart + middlePoint;
    let middlePointValue = orderedArray[middlePointIndex];

    if (flags?.debug) {
      console.log(
        `(${iteration}) Search Array Length (Index Based): ${searchArrayLength}`
      );
      console.log(`(${iteration}) Search Index: ${middlePointIndex}`);
      console.log(`(${iteration}) Search Index Value: ${middlePointValue}`);
    }

    if (middlePointValue === searchValue) return middlePointIndex;
    if (middlePointValue < searchValue) offsetStart = middlePointIndex + 1;
    else if (middlePointValue > searchValue) offsetEnd = middlePointIndex - 1;
  }

  return -1;
}

console.log(
  binarySearch(101, [5, 7, 8, 50, 60, 70, 100, 101], {
    debug: true,
  })
);
