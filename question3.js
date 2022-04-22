// ===========================================================================

// QUESTION 3: # Musical Numbers

// ### Intro

// We use the base 10 number system in our everyday lives but we also run into binary and hexadecimal as software engineers.

// **Binary (base 2)**
// ```
// 0, 1
// ```

// **Hexadecimal (base 16)**
// ```
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F
// ```

// ### Task

// Your task is to write a function that takes in a base 10 number and converts it to our new **Musical** number system shown below.
// You do not have to convert negative numbers. Your function should only consider integer `input` as valid and return an empty string if it's not an integer.

// **Musical (base 12)**
// ```
// A, A#, B, C, C#, D, D#, E, F, F#, G, G#
// ```

// ### Test Template

// ```javascript
// function baseTenToMusical (input) {
//   // Your solution
// }
// ```

// ### Expected Results

// ```javascript
// > baseTenToMusical(11)
// "G#"

// > baseTenToMusical(20)
// "A#F"

// > baseTenToMusical(256120)
// "A#AC#BEC#"

// > baseTenToMusical('12AG21')
// ""
// ```

// ===========================================================================

function baseTenToMusical(input) {
  //handling edge case where input is string
  if (typeof input === "string" || input instanceof String) {
    return "";
  }

  //setting values as baseline to check against
  const musicalNums = [
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
  ];

  //solving
  let sum = "";
  while (input) {                                       
    sum = musicalNums[input % 12] + sum;                
    input = (input - (input % 12)) / 12;
  }
  if (input > 0) sum = musicalNums[input] + sum;
  return sum;
}


const test = baseTenToMusical(1);
console.log(test);
