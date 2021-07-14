// Assignment Code
var generateBtn = document.querySelector("#generate");

// function checks boolean status and returns true or false 
// depending onthe status of the passed in variable
function check_boolean(x){
  if(x === true){
    return true;
  }else{
    return false;
  }
}

// generate password function after generate button is clicked
function generatePassword(){

  //declaring our password structures
  var passwordChar = {
    result: [],
    specialCharacters: '!@#$%^&*()_+=~{}',
    numberCharacters: '0123456789',
    uppercaseCharacters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercaseCharacters: 'abcdefghijklmnopqrstuvwxyz',
  }

  // declaring password length variable with the value of
  // a number after the user is prmpted with a question
  var pass_length = prompt("Enter a password length: 8-128 characters.");
  // checks if user clicked cancel on prompt message
  if(!pass_length){
    return;
  // checks if passed in length was less than 8
  }else if(pass_length < 8){
    alert("Password has to be at least 8 characters!");
    return;
  // checks if passed in length is greater than 128
  }else if (pass_length > 128){
    alert("Password requires 128 characters at most!");
    return;
  // checks if passed in lengthed is not a number(isNaN)
  }else if(isNaN(pass_length)){
    alert("You must enter a numeric\nvalue between 8-128 characters.");
    return;
  }
  // logs users passed in length
  console.log('Password length: '+pass_length)

  // declaring special character boolean
  // brings up confirm message and sends its status to 
  // check boolean function 
  var is_special = check_boolean(confirm("Would you like special characters?"));
  // logs boolean status
  console.log('Special characters: '+is_special);

  // declaring number character boolean
  // brings up confirm message and sends its status to 
  // check boolean function 
  var has_numbers = check_boolean(confirm("Would you like numbereric characters?"));
  console.log('Numeric characters: '+has_numbers);

  // declaring uppercase character boolean
  // brings up confirm message and sends its status to 
  // check boolean function 
  var is_uppercase = check_boolean(confirm("Would you like uppercase letters?"));
  console.log('Uppercase characters: '+is_uppercase);

  // declaring lowercase character boolean
  // brings up confirm message and sends its status to 
  // check boolean function 
  var is_lowercase = check_boolean(confirm("Would you like lowercase letters?"));
  console.log('Lowercase characters: '+is_lowercase);

  // checks if all confirm messages came back false
  if (!is_special &&
    !has_numbers &&
    !is_uppercase &&
    !is_lowercase){
      // alerts the user that they must meet requirements
      alert("Password must have\none special character, one number,\none uppercase character, or one lowercase character");
      return;
    }else{
      //declaring our possible charcter
      // and guaranteed character variables
       var possibleCharacters = '';
       var guaranteedCharacters = [];
       // checks if special character 
       // boolean is true
      if (is_special) {
       // adds all special characters to possible characters
       possibleCharacters = possibleCharacters.concat(passwordChar.specialCharacters);
       // adds a character at a random number in special characters
       // to guaranteed array
       guaranteedCharacters.push(passwordChar.specialCharacters.charAt(Math.floor(Math.random() * passwordChar.specialCharacters.length)));
      }
       // checks if number character 
       // boolean is true
      if (has_numbers) {
        // adds all number characters to possible characters
        possibleCharacters = possibleCharacters.concat(passwordChar.numberCharacters);
        // adds a character at a random number in number characters
        // to guaranteed array
        guaranteedCharacters.push(passwordChar.numberCharacters.charAt(Math.floor(Math.random() * passwordChar.numberCharacters.length)));
      }
       // checks if suppercase character 
       // boolean is true
      if (is_uppercase) {
        // adds all uppercase characters to possible characters
        possibleCharacters = possibleCharacters.concat(passwordChar.uppercaseCharacters);
        // adds a character at a random number in uppercase characters
        // to guaranteed array
        guaranteedCharacters.push(passwordChar.uppercaseCharacters.charAt(Math.floor(Math.random() * passwordChar.uppercaseCharacters.length)));
       }
      // checks if lowercase character 
      // boolean is true
      if (is_lowercase) {
        // adds all lowercase characters to possible characters
        possibleCharacters = possibleCharacters.concat(passwordChar.lowercaseCharacters);
        // adds a character at a random number in lowercase characters
        // to guaranteed array
        guaranteedCharacters.push(passwordChar.lowercaseCharacters.charAt(Math.floor(Math.random() * passwordChar.lowercaseCharacters.length)));
      }
      // logs possible characters
      console.log('Possible characters: '+possibleCharacters);
      // logs guaranteed character array
      console.log('Guaranteed characters: '+guaranteedCharacters);

      // loops through password length
      for(var i = 0; i < pass_length; i++){
        // adds characters to result array at a random
        // number in possible characters
        passwordChar.result[i] = possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
      }
      // loops through guaranteed character array
      for(var i = 0; i < guaranteedCharacters.length; i++){
        // setting ith result character to the ith
        // guarenteed character
        passwordChar.result[i] = guaranteedCharacters[i];
      }
      // setting our array to a string into a varaible
      var final_result = passwordChar.result.join('');
      // logs the user password
      console.log('User password: '+final_result);
      // returns the password string
      return final_result;
    }
  
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();

  // checks if password is not undefined
  if(password != undefined){
    // displays the users password onto the html id #password
    passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
