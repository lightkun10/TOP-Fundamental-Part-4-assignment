const removeFromArray = function(...args) {
    // take the first args as a variable
    let array = args[0]

    //filter the array from the arguments
    // store the filtered item into new array
    return array.filter(arr => !args.includes(arr))
}

// const removeFromArray = function(...args) {
//     // the very first item in our list of arguments is the array
//     let array = args[0];
//     // create a new empty array
//     let newArray = [];

//     array.forEach((element) => {
//         if(!args.includes(element)) {
//             newArray.push(element)
//         }

//         return newArray;
//     })
// }

module.exports = removeFromArray