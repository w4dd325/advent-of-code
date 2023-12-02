const multiLineText = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

function wordsToNumbers(word) {
    const wordsToNumbers = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
}
};


//split up all the lines
const lines = multiLineText.split('\n');


// Map each line in multiLineText to an array of numbers
const linesAsArrays = multiLineText.split('\n').map((line) => {
    const words = line.split(/\s+/); // Split line into words
    const numbersArray = words.map((word) => {
      const number = wordsToNumbers(word);
      return isNaN(number) ? word : number;
    });
    return numbersArray;
  });
  console.log(linesAsArrays);




// Map over each line in the 'lines' array
const linesOnlyNumbers = lines.map((line) => {

    // Extract only the numbers from the current line
    const numbersOnly = line.split('').filter(char => /\d/.test(char)).join('');

    // Check the length of the 'numbersOnly' string
    if (numbersOnly.length === 1) {
        // If there's only one number, use it twice
        return numbersOnly + numbersOnly;
    } else if (numbersOnly.length >= 2) {
        // If there are two or more numbers, use the first and last
        return numbersOnly[0] + numbersOnly[numbersOnly.length - 1];
    } else {
        // If there are no numbers, return an empty string or handle as needed
        return '';
    }
});

// Display the result from mapping a new array of only first and last numbers
console.log(linesOnlyNumbers);

// Convert each string to a number
const numbersArray = linesOnlyNumbers.map(Number);

// Sum all numbers using reduce
const sum = numbersArray.reduce((acc, num) => acc + num, 0);

// Display the result
console.log(sum);
