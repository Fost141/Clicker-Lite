let number = document.getElementById("number");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let sto = document.getElementById("sto");
let count = 0;

start.addEventListener('click', function() {
    count++;
    number.textContent = 'Счет: ' + count;
});

stop.addEventListener('click', function() {
    count = 0;
    number.textContent = 'Счет: ' + count;
});

sto.addEventListener('click', function() {
    count = count + 100;
    number.textContent = 'Счет: ' + count;
});