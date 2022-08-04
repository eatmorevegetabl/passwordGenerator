// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var passwordCharacters;

function selectChar() {
  //Character type prompt, at least 1 char type must be selected:
  //lowercase, uppercase, numeric, or special characters
  passwordCharacters = String(window.prompt("What type of characters would you like in your password?\nSelect from: Uppercase, lowercase, numeric, or special characters"));
}

//Password character type
//var charType = window.prompt();

//var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
//var uppercase = lowercase.toUpperCase();
//var numeric = Number[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//var specialCharacters = String[" !#$%&'()*+,-./:;<=>?@[]^_`{|}~" + '"' + "\\"];

function selectLength() {
  //Password length prompt, between 8-128 characters
  passwordLength = Number(window.prompt("How many characters should this password have?\nMust be between 8 - 128"));

  if (passwordLength >= 8 && passwordLength <= 128) {
    window.alert(`Your password is going to be ${passwordLength} characters long.`);
  } else {
    window.alert("Please enter a number between 8 - 128");
  }
}

//generatePassword function
//function generatePassword() {
  
//}

// Write password to the #password input
function writePassword() {
  selectLength();
  selectChar();
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);