const caesar = function(str, shift) {
    // split
    let splitString = str.split('');
    let currentSplit = splitString.map((letter) => shiftChar(letter, shift));
    return currentSplit.join('')
}; 

let shiftChar = (str, shift) => {
    // // change the string into charCode
    let code = str.charCodeAt(); 

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

// let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' // 65 - 90
// let lowercase = 'abcdefghijklmnopqrstuvwxyz' // 97 - 122
// let misc = ", !" //                         "," = 44 ; " " = 32 ; "!" = 33;


// from 'Mjqqt, Btwqi!'
// expect: 'Hello, World!'
// current result: "Hello, =oXld!"
// fix: B, w