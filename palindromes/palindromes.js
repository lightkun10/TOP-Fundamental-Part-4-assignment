const palindromes = function(string) {
    // filtered anything that is not an alphabet
    let filteredString = string.toLowerCase().replace(/[^A-Za-z]/g, "");

    // compare the variable with expected result
    return (
        filteredString.split('').reverse().join('') === filteredString
    )

    // if(filteredString.split('').reverse().join('') === filteredString) {
    //     return true 
    // } else {
    //     return false
    // }
    

}

module.exports = palindromes;