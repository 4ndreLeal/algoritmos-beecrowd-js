var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var value = input.split('\n');
var N = parseInt(value.shift());
var hundred = 0, fifty = 0, twenty = 0, ten = 0, five = 0, two = 0, one = 0;
var remainder = N;
while(remainder - 100 >= 0) {
    hundred++;
    remainder -= 100;
}
while(remainder - 50 >= 0) {
    fifty++;
    remainder -= 50;
}
while(remainder - 20 >= 0) {
    twenty++;
    remainder -= 20;
}
while(remainder - 10 >= 0) {
    ten++;
    remainder -= 10;
}
while(remainder - 5 >= 0) {
    five++;
    remainder -= 5;
}
while(remainder - 2 >= 0) {
    two++;
    remainder -= 2;
}
while(remainder - 1 >= 0) {
    one++;
    remainder -= 1;
}
console.log(`${N}\n${hundred} nota(s) de R$ 100,00\n${fifty} nota(s) de R$ 50,00\n${twenty} nota(s) de R$ 20,00\n${ten} nota(s) de R$ 10,00\n${five} nota(s) de R$ 5,00\n${two} nota(s) de R$ 2,00\n${one} nota(s) de R$ 1,00`);
