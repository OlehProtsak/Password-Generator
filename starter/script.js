// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let finalArrOfChar = [ ];
let amountOfChar = 0;

// Function to prompt user for password options
function getPasswordOptions() {
    let specialChar = prompt('Do you want to use SPECIAL CHARACTERS in your password? (YES/NO)');
    let lowrCaseChar = prompt('Do you want to use LOWER CASE CHARACTERS in your password? (YES/NO)');
    let upperCaseChar = prompt('Do you want to use UPPER CASE CHARACTERS in your password? (YES/NO)');
    let numbers = prompt('Do you want to use NUMBERS in your password? (YES/NO)');
    amountOfChar = Number(prompt('Please enter the amount of character you want to use in your password? (from 8 to 128)'));

    if (amountOfChar > 8 && amountOfChar < 128) {
      true;
    } else {
      alert('Enter valid NUMBER');
      getPasswordOptions();
    }

    if (specialChar === 'YES') {
      finalArrOfChar.push(...specialCharacters);
    }
    if (lowrCaseChar === 'YES') {
      finalArrOfChar.push(...lowerCasedCharacters);
    }
    if (upperCaseChar === 'YES') {
      finalArrOfChar.push(...upperCasedCharacters);
    }
    if (numbers === 'YES') {
      finalArrOfChar.push(...numericCharacters);
    }
}

// Function for getting a random element from an array
function getRandom(arr) {
  let password = [];

    for (let i = 0; i < amountOfChar; i++) {
      let randomNumber = Math.floor(Math.random() * finalArrOfChar.length);
      password.push(arr[randomNumber]);
    }

    return password.join('');
}

// Function to generate password with user input
function generatePassword() {
    return getRandom(finalArrOfChar);
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

getPasswordOptions();


