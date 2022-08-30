var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var integers = input.split('\n');
var A = parseInt(integers.shift());
var B = parseInt(integers.shift());
var C = parseInt(integers.shift());
var D = parseInt(integers.shift());
var difference = (A * B) - (C * D);
console.log("DIFERENCA = " + difference);
