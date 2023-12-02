const multiLineText = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

// Split the multiline text into an array of lines using the newline character '\n'
const lines = multiLineText.split('\n');

const numberMapping = {
    one: 1, 1: 1,
    two: 2, 2: 2,
    three: 3, 3: 3,
    four: 4, 4: 4,
    five: 5, 5: 5,
    six: 6, 6: 6,
    seven: 7, 7: 7,
    eight: 8, 8: 8,
    nine: 9, 9: 9,
    zero: 0, 0: 0,
};

function convertWrittenNumber(input) {
    let result = '';
    const words = Object.keys(numberMapping);

    // Iterate through the input string
    for (let lineIndex = 0; lineIndex < input.length; lineIndex++) {
        // Try to match substrings from the current position - this loop will add one letter to the substring each time... For example: 
            // For lineIndex = 0:
            // Iteration 1: j = 1 (substring 'e')
            // Iteration 2: j = 2 (substring 'ei')
            // Iteration 3: j = 3 (substring 'eig')
            // Iteration 4: j = 4 (substring 'eigh')
            // Iteration 5: j = 5 (substring 'eight')
        for (let substringIndex = lineIndex + 1; substringIndex <= input.length; substringIndex++) {
            // lineIndex is the start char/position and substringIndex is the end char/position
            const substring = input.substring(lineIndex, substringIndex);
            // If the substring is in the numberMapping, add its numerical value to the result
            if (words.includes(substring)) {
                result += numberMapping[substring];
            }
        }
    }
    return result;
}

// Map the result/output to a new array
const convertedNumbers = lines.map(convertWrittenNumber);
console.log(convertedNumbers);


//---------------------------------------------------------------------------------------
//Copied out from task 1
//---------------------------------------------------------------------------------------

// Map over each line in the 'lines' array
const linesOnlyNumbers = convertedNumbers.map((line) => {

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

//---------------------------------------------------------------------------------------