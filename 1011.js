var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var radius = parseFloat(lines.shift());
var volume = (4.0 / 3) * 3.14159 * (Math.pow(radius, 3));
console.log(`VOLUME = ${volume.toFixed(3)}`);
