function sum (a, b) {
  return a + b;
}

function multiply (a, b) {
  return a * b;
}
function divide (a, b) {
  return a / b;
}

function average(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  if (arr.some(x => typeof x !== 'number' || isNaN(x))) return null;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}


module.exports = {
  sum, multiply, divide, average};
