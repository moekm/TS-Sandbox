// Triangles of Letters "Buchstaben"
// This is "O(n^2)" but it works for now. might improve later idk

type Letters = string[] | number;

function DrawTriangle(size: number = 3, customLetters?: Letters): void {
  const lengthSize: number = size * 2 - 1;
  const symbol: string = "-";
  let nextLetter = 0;

  for (let o = size; o > 0; o--) {
    const outSpace: number = o - 1;
    const inSpace: number = 2 * (size - o) - 1; // the space inside the triangle
    let printLetter: string = String.fromCharCode(65 + nextLetter++); // UTF-8 but supports UTF-16

    // console.table({ outSpace, inSpace });
    // console.log("-".repeat(10));

    let store: string = "";
    const index1: number = outSpace;
    const index2: number = inSpace !== -1 ? outSpace + (inSpace + 1) : -1;

    for (let i = 0; i < lengthSize; i++) {
      if (index1 == i || index2 == i) {
        store += printLetter;
      } else {
        store += symbol;
      }
    }

    console.log(store);
  }
}

console.log(DrawTriangle());
