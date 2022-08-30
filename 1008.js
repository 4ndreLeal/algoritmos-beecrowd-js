var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var integers = input.split('\n');
var number = parseInt(integers.shift());
var hours = parseInt(integers.shift());
var bucks = parseFloat(integers.shift());
var salary = hours * bucks;
console.log("NUMBER = " + number);
console.log("SALARY = U$ " + salary.toFixed(2));
