var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var age = parseInt(lines.shift());
var years = parseInt(age / 365);
var months = parseInt((age % 365) / 30);
var days = parseInt((age % 365) % 30);
console.log(`${years} ano(s)`);
console.log(`${months} mes(es)`);
console.log(`${days} dia(s)`);
