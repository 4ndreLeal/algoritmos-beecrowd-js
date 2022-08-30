var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var integers = input.split('\n');
var value1 = parseInt(integers.shift());
var value2 = parseInt(integers.shift());
var product = value1 * value2;
console.log("PROD = " + product);
