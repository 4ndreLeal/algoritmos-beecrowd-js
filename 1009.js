var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var inputs = input.split('\n');
var name = inputs.shift().toString();
var fixed_salary = parseFloat(inputs.shift());
var total_sales_value = parseFloat(inputs.shift());
var final_value = fixed_salary + 0.15 * total_sales_value;
console.log("TOTAL = R$ " + final_value.toFixed(2));
