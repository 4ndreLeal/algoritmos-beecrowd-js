var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');
var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var C = parseInt(lines.shift());
var greater_AB = (A + B + Math.abs(A - B)) / 2;
if(greater_AB >= C) {
    console.log(`${greater_AB} eh o maior`);
}
else {
    console.log(`${C} eh o maior`);
}
