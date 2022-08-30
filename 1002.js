var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var float = input.split('\n');
var radius = parseFloat(float.shift());
var area = 3.14159 * Math.pow(radius, 2);
console.log("A=" + area.toFixed(4));
