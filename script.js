// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//adding generarePassword func
function generatePassword() {
 console.log ('hello');

 return 'generator password will go here'
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);