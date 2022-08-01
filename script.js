// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  prompt() //Length 8-128
  prompt() // Lowercase, Uppercase, numeric, special characters
  prompt() // Input validated
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
