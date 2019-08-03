function add (num1, num2) {
	return num1 + num2
}

function subtract (num1, num2) {
	return num1 - num2
}

function sum (arr) {
	return arr.reduce((total, current) => total + current, 0)
}

function multiply (arr) {	// total {}, current []
	// if(arr.length > 0) {
	// 	return arr.reduce((stored, current) => stored * current)
	// } else {
	// 	return 0;
	// }

	return arr.length > 0 
			? arr.reduce((stored, current) => stored * current) 
			: 0;
}

function power(a, b) {
	return Math.pow(a, b)
}

function factorial(num) {
	if(num === 0) return 1;
	let total = 1

	for(i=num; i>0; i--) {
		total = total * i
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}