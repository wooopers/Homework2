// Assignment Code
var generateBtn = document.querySelector("#generate");

// Get references to the #generate element
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordLength = parseInt(prompt("Choose password length between 8-128 characters:"));
  
  passwordText.value = password;
  
  // Validate password length
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Invalid password length! Please choose a random character between 8-128."));
  }
 // Confirm password  
  var useUppercase = confirm("Include uppercase letters?");
  var useLowercase = confirm("Include lowercase letters?");
  var useNumbers = confirm("Include numbers?");
  var useSymbols = confirm("Include symbols?");
  
  var chars = "";
  
  if (useUppercase) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (useLowercase) {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (useNumbers) {
    chars += "0123456789";
  }
  if (useSymbols) {
    chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  }
  
  if (chars.length === 0) {
    alert("You must select at least one character type.");
    return;
  }
  
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword)
