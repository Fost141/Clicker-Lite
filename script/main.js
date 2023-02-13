let number = document.getElementById("number");
let start = document.getElementById("start");

let lvlUp2 = document.getElementById('2lvl');
let lvlUp3 = document.getElementById('3lvl');
let lvlUp4 = document.getElementById('4lvl');
let lvlUp5 = document.getElementById('5lvl');
let lvlUp6 = document.getElementById('6lvl');
let lvlUp7 = document.getElementById('7lvl');
let lvlUp8 = document.getElementById('8lvl');
let lvlUp9 = document.getElementById('9lvl');
let lvlUp10 = document.getElementById('10lvl');


let count = 0;


start.addEventListener('click', function() {
    count = count + 1; //1
    number.textContent = 'Счет: ' + count;
    if (count > 10) {
        count = count + 1; //2
        lvlUp2.textContent = '2 lvl Score: 10 (1 click = 2 score) - Done';
        lvlUp2.style = 'color: yellow';
    }
    if (count > 50) {
        count = count + 3; //5
        lvlUp3.textContent = '3 lvl Score: 50 (1 click = 5 score) - Done';
        lvlUp3.style = 'color: yellow';
    }
    if (count > 200) {
        count = count + 2; //7
        lvlUp4.textContent = '4 lvl Score: 200 (1 click = 7 score) - Done';
        lvlUp4.style = 'color: yellow';
    }
    if (count > 600) {
        count = count + 3; //10
        lvlUp5.textContent = '5 lvl Score: 600 (1 click = 10 score) - Done';
        lvlUp5.style = 'color: yellow';
    }
    if (count > 1000) {
        count = count + 5; //15
        lvlUp6.textContent = '6 lvl Score: 1000 (1 click = 15 score) - Done';
        lvlUp6.style = 'color: yellow';
    }
    if (count > 1500) {
        count = count + 5; //20
        lvlUp7.textContent = '7 lvl Score: 1500 (1 click = 20 score) - Done';
        lvlUp7.style = 'color: yellow';
    }
    if (count > 2700) {
        count = count + 10; //30
        lvlUp8.textContent = '8 lvl Score: 2700 (1 click = 30 score) - Done';
        lvlUp8.style = 'color: yellow';
    }
    if (count > 4200) {
        count = count + 20; //50
        lvlUp9.textContent = '9 lvl Score: 4200 (1 click = 50 score) - Done';
        lvlUp9.style = 'color: yellow';
    }
    if (count > 8400) {
        count = count + 50; //100
        lvlUp10.textContent = '10 lvl Score: 8400 (1 click = 100 score) - Done';
        lvlUp10.style = 'color: yellow';
    }
});