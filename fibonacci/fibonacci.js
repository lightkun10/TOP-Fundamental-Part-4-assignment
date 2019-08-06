const fibonacci = function(count) {
    if(count < 0) return 'OOPS'

    // fibonacci start from 0 and 1
    let firstPlace = 0;
    let nextPlace = 1;
    // 0, 1, 1, 2, 3, 5
    for(i=1; i<count; i++) {
        let store = nextPlace;
        nextPlace = firstPlace + nextPlace // 0 + 1 = 1
        firstPlace = store // x = 1
    }

    return nextPlace;
}

module.exports = fibonacci
