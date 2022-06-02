// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

/*encoding takes the input and uses the switch case to change letters into letters matching the provided alphabet's index's letter
decoding takes input and uses a different switch case to change letters matching the provided alphabet's index back to the normal alphabet*/

const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    if (!alphabet) return false;
    if (alphabet.length !== 26) return false;
    alphabet = alphabet.toLowerCase()
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = i + 1; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) {
          return false
        }
      }
    }
    input = input.toLowerCase()
    let inputArray = [...input];
    let alphaArray = [...alphabet];
    let code = [];
    if (encode) {
      inputArray.forEach((letter) => {
        switch (letter) {
          case "a":
            code += alphaArray[0];
            break;
          case "b":
            code += alphaArray[1];
            break;
          case "c":
            code += alphaArray[2];
            break;
          case "d":
            code += alphaArray[3];
            break;
          case "e":
            code += alphaArray[4];
            break;
          case "f":
            code += alphaArray[5];
            break;
          case "g":
            code += alphaArray[6];
            break;
          case "h":
            code += alphaArray[7];
            break;
          case "i": 
            code += alphaArray[8];
            break;
          case "j":
            code += alphaArray[9];
            break;
          case "k":
            code += alphaArray[10];
            break;
          case "l":
            code += alphaArray[11];
            break;
          case "m":
            code += alphaArray[12];
            break;
          case "n":
            code += alphaArray[13];
            break;
          case "o":
            code += alphaArray[14];
            break;
          case "p":
            code += alphaArray[15];
            break;
          case "q":
            code += alphaArray[16];
            break;
          case "r":
            code += alphaArray[17];
            break;
          case "s":
            code += alphaArray[18];
            break;
          case "t":
            code += alphaArray[19];
            break;
          case "u":
            code += alphaArray[20];
            break;
          case "v":
            code += alphaArray[21];
            break;
          case "w":
            code += alphaArray[22];
            break;
          case "x":
            code += alphaArray[23];
            break;
          case "y":
            code += alphaArray[24];
            break;
          case "z":
            code += alphaArray[25];
            break;
          default:
            code += letter;
            break;}})
            return code
        }
        if (!encode) {
          inputArray.forEach((letter) => {
            switch (letter) {
              case alphaArray[0]:
                code += "a";
                break;
              case `${alphaArray[1]}`:
                code += "b";
                break;
              case `${alphaArray[2]}`:
                code += "c";
                break;
              case `${alphaArray[3]}`:
                code += "d";
                break;
              case `${alphaArray[4]}`:
                code += "e";
                break;
              case `${alphaArray[5]}`:
                code += "f";
                break;
              case `${alphaArray[6]}`:
                code += "g";
                break;
              case `${alphaArray[7]}`:
                code += "h";
                break;
              case `${alphaArray[8]}`: 
                code += "i";
                break;
              case `${alphaArray[9]}`:
                code += "j";
                break;
              case `${alphaArray[10]}`:
                code += "k";
                break;
              case `${alphaArray[11]}`:
                code += "l";
                break;
              case alphaArray[12]:
                code += "m";
                break;
              case alphaArray[13]:
                code += "n";
                break;
              case alphaArray[14]:
                code += "o";
                break;
              case alphaArray[15]:
                code += "p";
                break;
              case alphaArray[16]:
                code += "q";
                break;
              case alphaArray[17]:
                code += "r";
                break;
              case alphaArray[18]:
                code += "s";
                break;
              case alphaArray[19]:
                code += "t";
                break;
              case alphaArray[20]:
                code += "u";
                break;
              case alphaArray[21]:
                code += "v";
                break;
              case alphaArray[22]:
                code += "w";
                break;
              case alphaArray[23]:
                code += "x";
                break;
              case alphaArray[24]:
                code += "y";
                break;
              case alphaArray[25]:
                code += "z";
                break;
              default:
                code += letter;
                break;}})
              return code}}

    // your solution code here
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
