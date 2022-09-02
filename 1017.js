var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var inputs = input.split('\n');
var time = parseInt(inputs.shift());
var velocity = parseInt(inputs.shift());
var distance = velocity * time;
var liters = (distance / 12).toFixed(3);
console.log(liters);
