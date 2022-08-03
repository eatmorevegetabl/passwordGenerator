// Assignment Code
var generateBtn = document.querySelector("#generate");

//Password length prompts, between 8-128 characters
var passwordLength = Number(window.prompt("How many characters should this password have?\nMust be between 8 - 128"));

if (passwordLength >= 8 && passwordLength <= 128) {
  window.alert(`Your password is going to be ${passwordLength} characters long.`);
} else {
  window.alert("Please enter a number between 8 - 128");
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var passwordChar; //outside function

  passwordText.value = password;

}

// Validate input
//prompt() // Lowercase, Uppercase, numeric, special characters


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

