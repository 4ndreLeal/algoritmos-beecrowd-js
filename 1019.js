var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var data = input.split('\n');
var time = parseInt(data.shift());
var hours = 3600, minutes = 60, seconds = 1;
var h = 0, min = 0, sec = 0;
while(time - hours >= 0) {
    h++;
    time -= hours;
}
while(time - minutes >= 0) {
    min++;
    time -= minutes;
}
while(time - seconds >= 0) {
    sec++;
    time -= seconds;
}
console.log(`${h}:${min}:${sec}`);
