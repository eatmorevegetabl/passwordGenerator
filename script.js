// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;

//Password character type
var charType = window.prompt();

var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var uppercase = lowercase.toUpperCase();
var numeric = Number[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = String[" !#$%&'()*+,-./:;<=>?@[]^_`{|}~" + '"' + "\\"];


//generatePassword function
function generatePassword() {

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function selectLength() {
  //Password length prompts, between 8-128 characters
  passwordLength = Number(window.prompt("How many characters should this password have?\nMust be between 8 - 128"));

  if (passwordLength >= 8 && passwordLength <= 128) {
    window.alert(`Your password is going to be ${passwordLength} characters long.`);
  } else {
    window.alert("Please enter a number between 8 - 128");
  }
}
