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
// This empty array for collecting all selected types of Characters by User
let finalArrOfChar = [];
// For selected amount of characters
let amountOfChar = 0;

// Function to prompt user for password options
function getPasswordOptions() {
    // Ask user how many characters should be in password (Use Number function to conver string to number)
    amountOfChar = Number(prompt('Please enter the amount of character you want to use in your password? (from 8 to 128)'));

    // Check if user selected valid number of characters and not letters
    if (amountOfChar < 8 || amountOfChar > 128 || isNaN(amountOfChar)) {
      alert('Enter valid NUMBER');
      amountOfChar = 0;
      return false;
    } 

    // All prompt assigned to variables
    let specialChar = prompt('Do you want to use SPECIAL CHARACTERS in your password? (YES/NO)');
    let lowrCaseChar = prompt('Do you want to use LOWER CASE CHARACTERS in your password? (YES/NO)');
    let upperCaseChar = prompt('Do you want to use UPPER CASE CHARACTERS in your password? (YES/NO)');
    let numbers = prompt('Do you want to use NUMBERS in your password? (YES/NO)');
  
    // If User entered 'YES' add this type of characters to finallArray using spread operator
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
    
    // Check if user selected at least one group oh characters 
    if (finalArrOfChar.length === 0) {
      alert('You should select AT LEAST ONE group of characters!');
      amountOfChar = 0;
      return false;
    }
}

// Function for getting a random element from an array
function getRandom(arr) {
  // Define variable for array of generated characters
  let password = [];

    // going through the loop (depends which number entered user) times randomly pushing characters to password array
    for (let i = 0; i < amountOfChar; i++) {
      let randomNumber = Math.floor(Math.random() * finalArrOfChar.length);
      password.push(arr[randomNumber]);
    }

    // use join method to convert password array to string
    return password.join('');
}

// Function to generate password with user input
function generatePassword() {
    // after click invoke functions with poromts
    getPasswordOptions();
    // return result of function getRandom passing finalArrChar array as an argument
    return getRandom(finalArrOfChar);
}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');
  finalArrOfChar = [];

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);




