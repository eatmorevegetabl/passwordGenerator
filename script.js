// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var finalCharacterArray;

function selectChar() {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var lowercase = alphabet.split(''); //lowercase alphabet array
  var uppercase = alphabet.toUpperCase().split(''); //uppercase alphabet array
  var numeric = [0,1,2,3,4,5,6,7,8,9]; //numeric array
  var list = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var specialCharacters = list.split(''); //special character array
  
  //Character type prompt, at least 1 char type must be selected:
  //lowercase, uppercase, numeric, or special characters
      finalCharacterArray = [];
  var lowerAnswer = window.confirm("Would you like lowercase characters?");
  if (lowerAnswer) {
      console.log("Answer is yes");
      finalCharacterArray.push(...lowercase); //lowercase appended to finalcharacterarray
  } else {
    console.log("Answer is no");
  }
  
  var upperAnswer = window.confirm("Would you like uppercase characters?");
  if (upperAnswer) {
      console.log("Answer is yes");
      finalCharacterArray.push(...uppercase); //uppercase appended to finalcharacterarray
  } else {
    console.log("Answer is no");
  }

  var numericAnswer = window.confirm("Would you like numeric characters?");
  if (numericAnswer) {
      console.log("Answer is yes");
      finalCharacterArray.push(...numeric); //numeric appended to finalcharacterarray
  } else {
    console.log("Answer is no");
  }

  var specialAnswer = window.confirm("Would you like special characters?");
  if (specialAnswer) {
      console.log("Answer is yes");
      finalCharacterArray.push(...specialCharacters); //specialCharacters appended to finalcharacterarray
  } else {
    console.log("Answer is no");
  }
    
  //   if (passwordCharacters === "Uppercase" || passwordCharacters === "lowercase" || passwordCharacters === "numeric") {
  //   window.alert("Your password will contain " + passwordCharacters + " characters.");
  // } else if (passwordCharacters === "special characters") {
  //   window.alert("Your password will contain " + passwordCharacters + ".");
  // } else {
  //   window.alert("Please enter one of the four type of characters");
  // }
};

function selectLength() {
  //Password length prompt, between 8-128 characters
  passwordLength = Number(window.prompt("How many characters should this password have?\nMust be between 8 - 128"));

  if (passwordLength >= 8 && passwordLength <= 128) {
    window.alert(`Your password is going to be ${passwordLength} characters long.`);
  } else {
    window.alert("Please enter a number between 8 - 128");
  }
};

// generatePassword function
function generatePassword() {
  var randomArray = [];
  for (i = 0; i < passwordLength; i++) {
    randomArray[i] = finalCharacterArray[Math.floor(Math.random()*finalCharacterArray.length)];
  }
  var randomArrayString = randomArray.join('');
  return randomArrayString;
}

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