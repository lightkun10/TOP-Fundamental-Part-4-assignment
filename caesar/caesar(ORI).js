const caesar = function(str, shift) {
    // split
    let splitString = str.split('');

    // using MAP(), make a new array, with a CHARCODE for each item
    //      add the charcode if its more than 65 but less than 90, more than 97 but less than 122
    //      if the charcode is more than 90 from 65 OR more than 122 from 97, back to the first number(65 and 97);
    //      BUT not for the symbols one (e.g: ","; " "; "!")
    // all charcode + shift (number)
    // splitString.map((letter) => /*INSERT FUNCTION FOR FILTER HERE + shift */ );
    // return splitString.map((letter) => shiftChar(letter, shift));
    let currentSplit = splitString.map((letter) => shiftChar(letter, shift));

    // using JOIN(), gather all the charcode into a sentence of string
    /*INSERT FUNCTION THE SAME AS ABOVE */
    // split.join('');
    return currentSplit.join('')


    // let currentPerChar = splitString.map((string) => string.charCodeAt() + shift) 
    // let newSplittedString = currentPerChar.map((char) => String.fromCharCode(char))
    // return newSplittedString.join('')
}; // Hello, World! ~> hasil sementara "Mjqqt, 71twqi!"; expected 'Mjqqt, Btwqi!'

let shiftChar = (str, shift) => {
    // // change the string into charCode
    let code = str.charCodeAt(); //<< e = 101 + 5

    // // check if its alphabet lowercase or uppercase
    // while((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    //      // if its alpha low or high code is higher than 'z' or 'Z', back to 'a' or 'A'
    //      if(code > 85 /* && code > 90 */ || code > 117 /* && code > 122 */) {
    //          // 90 - 65 || 122 - 97 = 25 <--
    //         let num = 25;
    //         code = code + shift - num - 1 // W = 87 + shift = 92 - 25 = 67 - 1 = 66 , V = 86 + shift = 91 - 25 = 66 - 1 = 65, X = 88 + shift = 93 - 25 = 68 - 1 = 67
    //         return String.fromCharCode(code);
    //      } else if(code < 85 || code < 117) {
    //         code += shift
    //         return String.fromCharCode(code);
    //      }

    //     //  return String.fromCharCode(code)
    // }

    // check if its alphabet lowercase or uppercase
    if(code >= 65 && code <= 90){ // UPPERCASE
        // if its alpha low or high code is higher than 'z' or 'Z', back to 'a' or 'A'
        if(code > 85 /* && code > 90 */) {
            // 90 - 65 || 122 - 97 = 25 <--
           let num = 25;
           code = code + shift - num - 1 // W = 87 + shift = 92 - 25 = 67 - 1 = 66 , V = 86 + shift = 91 - 25 = 66 - 1 = 65, X = 88 + shift = 93 - 25 = 68 - 1 = 67
           return String.fromCharCode(code);
        } else if(code < 85) {
           code += shift
           return String.fromCharCode(code);
        }
   } else if(code >= 97 && code <= 122) { // LOWERCASE
        // if its alpha low or high code is higher than 'z' or 'Z', back to 'a' or 'A'
        if(code > 117) {
            // 90 - 65 || 122 - 97 = 25 <--
        let num = 25;
        code = code + shift - num - 1 // W = 87 + shift = 92 - 25 = 67 - 1 = 66 , V = 86 + shift = 91 - 25 = 66 - 1 = 65, X = 88 + shift = 93 - 25 = 68 - 1 = 67
        return String.fromCharCode(code);
        } else if(code < 117) {
        code += shift
        return String.fromCharCode(code);
        }
    }
    // return String.fromCharCode(code);


    return str;
}


module.exports = caesar;


// let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' // 65 - 90
// let lowercase = 'abcdefghijklmnopqrstuvwxyz' // 97 - 122
// let misc = ", !" //                         "," = 44 ; " " = 32 ; "!" = 33;

// uppercaseCode.map((letter) => letter.charCodeAt())

// jarak A - Z = 25
// "Z" = 25
// 25 - 25
// FROM V