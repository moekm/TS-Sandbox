function fizzBuzz(array?: number[]): void {
  const LIMIT = array?.length || 100;

  for (let i = 1; i <= LIMIT; i++) {
    let output: string = "";
    let num = array ? array[i - 1] : i;

    if (num % 3 == 0) output += "Fizz";
    if (num % 5 == 0) output += "Buzz";

    console.log(output !== "" ? output : num);
  }
}

fizzBuzz([15]);
