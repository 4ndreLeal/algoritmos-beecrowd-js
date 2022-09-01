var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var data = input.split('\n');
var length = parseInt(data.shift());
var fuel = parseFloat(data.shift());
var consumption = (length / fuel).toFixed(3);
console.log(`${consumption} km/l`);
