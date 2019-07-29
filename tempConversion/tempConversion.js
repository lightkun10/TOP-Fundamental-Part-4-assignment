const ftoc = function(num) {
  // ([°F] − 32) × ​5⁄9
  let number = (num - 32) * 5/9
  return Math.round(number * 10) / 10;
  // number.toFixed(1);
  // return (Math.round(number * 10) / 10).toFixed(1)
}

const ctof = function(num) {
// [°F] = [°C] × ​9⁄5 + 32 
  let number = num * 9/5 + 32;
  return Math.round(number * 10) / 10;
  // number.toFixed(1);
  // return (Math.round(number * 10) / 10).toFixed(1)
}

module.exports = {
  ftoc,
  ctof
}
