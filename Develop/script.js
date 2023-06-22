// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


function generatePassword() {
  var userChoice1 = window.prompt("How many characters would you like your content to contain?");
  var userChoice2 = window.confirm("Click ok to confirm including special characters");
  var userChoice3 = window.confirm("Click ok to confirm including numeric chracters");
  var userChoice4 = window.confirm("Click ok to confirm including lowercase characters");
  var userChoice5 = window.confirm("Click ok to confirm including uppercasecharacters");
  var alphabetNumericCharacters = 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9';
  var passwordLength = 128 
  var password = " "
  alphabetNumericCharacters.charAt();
  var passwordText = document.querySelector("#password")
  
  for (var counter = 0; counter < passwordLength; counter++) {
   var randomCharacters = Math.floor(Math.random()* alphabetNumericCharacters.length);
   password += 
   alphabetNumericCharacters.charAt(randomCharacters);
   passwordText.value = password;

  }

}


// passwordText.value = "!#$%&*?";
// passwordText.value = "1234567890";
// passwordText.value = "abcdefghijklmnopqrstuvwxyz";
// passwordText.value = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page