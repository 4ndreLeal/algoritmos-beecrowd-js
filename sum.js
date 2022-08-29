var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var inputs = input.split('\n');
var A = parseInt(inputs.shift());
var B = parseInt(inputs.shift());
var sum = A + B;
console.log("X = " + sum);
