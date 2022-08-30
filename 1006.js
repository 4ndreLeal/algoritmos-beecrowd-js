var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var real_numbers = input.split('\n');
var A = parseFloat(real_numbers.shift());
var B = parseFloat(real_numbers.shift());
var C = parseFloat(real_numbers.shift());
var average = ((A * 2) + (B * 3) + (C * 5)) / 10;
console.log("MEDIA = " + average.toFixed(1));
