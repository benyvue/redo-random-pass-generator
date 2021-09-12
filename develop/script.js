//Declared variables
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var numberChar = "0123456789";
var specialChar = "!#$%&()*+,-./:;<>=?@[]^_`|}{~";
var pass = "";
var randomNum = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Creating password
var generatePassword = function() {
  var passLength = window.prompt("Please choose a password length of 8-128 characters.");
  //
  if (passLength >= 8 && passLength <= 128) {
    window.alert("Thank you, a password of " + passLength + " characters will be generated, please answer the following questions for your password.");
  } else {
    window.alert("Please try again.");
  generatePassword();
  }
  
  var upperCaseChoice = window.confirm("Would you like to add uppercase letters to your password?");

  //Adding or omitting upper case letters
  if (upperCaseChoice) {
    window.alert("Thank you, you chose to add uppercase letters to your password.");
    pass = upperCaseChar += pass;
  } else {
    window.alert("You chose not to add upper case letters.");
  }

  var lowerCaseChoice = window.confirm("Would you like to add lowercase letters to your password?");

  //Adding or omitting lower case letters
  if (lowerCaseChoice) {
    window.alert("Thank you, you chose to add lowercase letters to your password.");
    pass = lowerCaseChar += pass;
  } else {
    window.alert("You chose not to add lower case letters.");
  }

  var numChoice = window.confirm("Would you like to add numbers to your password?");

  //Adding or omitting numbers
  if (numChoice) {
    window.alert("Thank you, you chose to add numbers to your password.");
    pass = numberChar += pass;
  } else {
    window.alert("You chose not to add numbers to your password.");
  }

  var specialCharChoice = window.confirm("Would you like to add special characters to your password?");
  
  //Adding or omitting special characters
  if (specialCharChoice) {
    window.alert("Thank you, you chose to add special characters to you password.");
    pass = specialChar += pass;
  } else {
    window.alert("You chose not to add special characters.");
  }

  //Determining if at least one choice was confirmed
  if (pass) {
  window.alert("Brewing up your magical password for you...");
  } else {
    window.alert("Please select at least one of the 4 options to add characters.");
    generatePassword();
  }

var finalize = new Array();
//Randomize characters for password
for (let i = 0; i < passLength; i++) {
  randomNum = Math.floor(Math.random() * pass.length);
  arrayNum = pass[randomNum];
  finalize.push(arrayNum);
}

// Adjust password
password = finalize.join( " " );
return password; 
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);