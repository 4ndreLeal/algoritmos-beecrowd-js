var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var km = input.split('\n');
var distance = parseInt(km.shift());
var time = distance * 2;
console.log(`${time} minutos`);
