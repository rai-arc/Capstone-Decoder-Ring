// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  /* Returns false if shift is 0, < -25, > 25
  Makes the input lowercase
  Takes the unicode value of the characters via .map function
  Shifts the values of the characters by the shift if encode = true
  Reverses the shift if encode = false
  Wraps around if the character goes beyond A or Z */

  function caesar(input, shift, encode = true) {
    if (!shift) return false;
    if (shift > 25 || shift === 0 || shift < -25) return false;
    input = input.toLowerCase();
    let result = "";
      for (let i = 0; i < input.length; i++) {
        let turnedNumber = input.charCodeAt(i);
        if (turnedNumber === 32) {
          turnedNumber = " ";
        }
        if (turnedNumber <= 96 || turnedNumber >= 123) {
          turnedNumber = input[i];
        } else {
            if(encode) //encoding
              turnedNumber += shift;
            if(!encode) //decoding
              turnedNumber -= shift;
          if (turnedNumber <= 96) turnedNumber += 26;
          if (turnedNumber >= 123) turnedNumber -= 26;
          turnedNumber = String.fromCharCode(turnedNumber);
        }
        result += turnedNumber;
      }
      return result;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
