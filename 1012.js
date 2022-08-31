var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');
var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());
var triangle = (A * C / 2).toFixed(3);
var circle = (3.14159 * Math.pow(C, 2)).toFixed(3);
var trapezium = ((A + B) * C / 2).toFixed(3);
var square = (Math.pow(B, 2)).toFixed(3);
var rectangle = (A * B).toFixed(3);
console.log(`TRIANGULO: ${triangle}\nCIRCULO: ${circle}\nTRAPEZIO: ${trapezium}\nQUADRADO: ${square}\nRETANGULO: ${rectangle}`);

