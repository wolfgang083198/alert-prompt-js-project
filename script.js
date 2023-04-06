// Assignment code here
var lowerCase = "abcdefghijklmnopqurstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChar = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//adding generarePassword func
function generatePassword() {
 //console log is just to show my button is matched to function
 console.log ('hello world ;)');
    //1. prompt user about 8-128, checks if number meets criteria, returns or continues to next alert.
   var length = prompt ('Please enter a number between 8 and 128 for your password length.');
        console.log (length);
            if (length < 8 || length > 128){
                alert ('Please make sure your password is from 8 to 128 numbers')
                return generatePassword();
            }
//confirms if the users wants lowercase
   var lowerCase = confirm ('Do you want to use LOWERCASE letters in your password ? For yes click "okay", for no click "cancle"');   
            if (lowerCase = true) {
                for ( var i = 0; i < lowerCase.length; i++) {
                    temp.push(lowerCase[i]);
                }
            }
//confirms if the users wants uppercase
   var  upperCase = confirm ('Do you want to use UPPER letters in your password ? For yes click "okay", for no click "cancle"');
            if (upperCase = true ) {
                for (var i = 0; i < upperCase.length; i++){
                    temp.push(upperCase[i]);
                }
            }
//confirms if the users wants numbers   
   var numbers = confirm ('Do you want to us NUMBERS in your password ? For yes click "okay", for no click "cancle" ')
            if (numbers = true ) {
                for (var i = 0; numbers.length; i++){
                    temp.push(numbers[i]);
                }
            }
//confirms if the users wants special characters
   var specialChar = confirm ('Do you want to use SPECIAL CHARACTERAS in your password ? For yes click "okay", for no click "cancle" ')
            if ( specialChar = true ) {
                for (var i = 0; specialChar.length; i++;){
                    temp.push(specialChar[i]);
                
                }
            }
        

 // validate input 

 // display password on the page.


// what shows up in the box
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