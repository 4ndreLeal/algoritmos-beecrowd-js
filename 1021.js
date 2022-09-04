var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var value = input.split('\n');
var N = parseFloat(value);
var money = [100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05, 0.01];
var aux = 0;
console.log("NOTAS:");
for(let i = 0; i < 6; i++) {
    aux = parseInt(N / money[i]);
    console.log(`${aux} nota(s) de R$ ${money[i].toFixed(2)}`);
    N = N % money[i];
}
console.log("MOEDAS:");
for(let j = 6; j < money.length; j++) {
    aux = parseInt(N / money[j]);
    console.log(`${aux} moeda(s) de R$ ${money[j].toFixed(2)}`);
    N = N % money[j] + 0.00001;
}
