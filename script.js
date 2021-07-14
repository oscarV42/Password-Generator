// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordChar = {
  result: [],
  specialCharacters: '!@#$%^&*()_+=~{}',
  numberCharacters: '0123456789',
  uppercaseCharacters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercaseCharacters: 'abcdefghijklmnopqrstuvwxyz',
}


function check_boolean(x){
  if(x === true){
    return true;
  }else{
    return false;
  }
}

function generatePassword(){

  var pass_length = prompt("Enter a password length: 8-128 characters.");

  if(!pass_length){
    return;
  }else if(pass_length < 8){
    alert("Password has to be at least 8 characters!");
    return;
  }else if (pass_length > 128){
    alert("Password requires 128 characters at most!");
    return;
  }else if(isNaN(pass_length)){
    alert("You must enter a numeric\nvalue between 8-128 characters.");
    return;
  }
  console.log('Password length: '+pass_length)

  var is_special = check_boolean(confirm("Would you like special characters?"));
  console.log('Special characters: '+is_special);

  var has_numbers = check_boolean(confirm("Would you like numbereric characters?"));
  console.log('Numeric characters: '+has_numbers);

  var is_uppercase = check_boolean(confirm("Would you like uppercase letters?"));
  console.log('Uppercase characters: '+is_uppercase);

  var is_lowercase = check_boolean(confirm("Would you like lowercase letters?"));
  console.log('Lowercase characters: '+is_lowercase);

  if (!is_special &&
    !has_numbers &&
    !is_uppercase &&
    !is_lowercase){
      alert("Pasaword must have\none special character, one number,\none uppercase character, or one lowercase character");
      return;
    }else{
       var possibleCharacters = '';
       var guaranteedCharacters = [];
      if (is_special) {
       possibleCharacters = possibleCharacters.concat(passwordChar.specialCharacters);
       guaranteedCharacters.push(passwordChar.specialCharacters.charAt(Math.floor(Math.random() * passwordChar.specialCharacters.length)));
      }
      if (has_numbers) {
        possibleCharacters = possibleCharacters.concat(passwordChar.numberCharacters);
        guaranteedCharacters.push(passwordChar.numberCharacters.charAt(Math.floor(Math.random() * passwordChar.numberCharacters.length)));
      }
      if (is_uppercase) {
        possibleCharacters = possibleCharacters.concat(passwordChar.uppercaseCharacters);
        guaranteedCharacters.push(passwordChar.uppercaseCharacters.charAt(Math.floor(Math.random() * passwordChar.uppercaseCharacters.length)));
       }
      if (is_lowercase) {
        possibleCharacters = possibleCharacters.concat(passwordChar.lowercaseCharacters);
        guaranteedCharacters.push(passwordChar.lowercaseCharacters.charAt(Math.floor(Math.random() * passwordChar.lowercaseCharacters.length)));
      }
      console.log('Possible characters: '+possibleCharacters);
      console.log('Guaranteed characters: '+guaranteedCharacters);

      for(var i = 0; i < pass_length; i++){
        passwordChar.result[i] = possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
      }
      for(var i = 0; i < guaranteedCharacters.length; i++){
        passwordChar.result[i] = guaranteedCharacters[i];
      }
      var final_result = passwordChar.result.join('');
      console.log('User password: '+final_result);
      return final_result;
    }
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if(password != undefined){
    passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
