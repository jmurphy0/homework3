
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var specialChar = '~!@#$%^&*()_+<>?'.split('')
var nums = '0123456789'.split('')
var canUse = ['']

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  // getting user input for lenth
  pwLenth = parseInt(prompt('Choose the length of your password (8-128 characters)'));
  // check user Response 
  if (!pwLenth){
    alert('Invalid entry.  Must be between 8 and 128')
    return 'usuck';
  }
  // check lenth is greater than 8 but less than 128
  else if (pwLenth<8 || pwLenth>128){
    alert('Invalid entry.  Must be between 8 and 128');
    return;
  }

  // prompting the user for conditions
  else{
    withLower = confirm('Do you want lowercase letters in your password?')
    withUpper = confirm('Do you want uppercase letters in your password?')
    withSpecial = confirm('Do you want special characters in your password?')
    withNums = confirm('Do you want numbers in your password?')
  }

 // start checking next conditions
  if (withLower){
    canUse = canUse.concat(alphabet)
  }
  if (withUpper){
    canUse = canUse.concat(upperAlphabet)
  }
  if (withNums){
    canUse = canUse.concat(nums)
  }
  if (withSpecial){
    canUse = canUse.concat(specialChar)
  }
  else if (!withNums && !withLower && !withUpper && !withSpecial){
    alert('We cannot make a password out of thin air. Try again.')
    return;
  }

//creating the password 
  var password = ""
  for (var i=0; i<pwLenth; i++){
    var charPick = Math.floor(Math.random()*canUse.length)
    password += canUse[charPick]
  }
 return password;
}