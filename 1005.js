var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var floating_point = input.split('\n');
var A = parseFloat(floating_point.shift());
var B = parseFloat(floating_point.shift());
var average = ((A*3.5) + (B*7.5)) / 11;
console.log("MEDIA = " + average.toFixed(5));

