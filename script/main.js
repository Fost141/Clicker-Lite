let number = document.getElementById("number");
let start = document.getElementById("start");

let lvlUp2 = document.getElementById('2lvl');
let lvlUp3 = document.getElementById('3lvl');
let lvlUp4 = document.getElementById('4lvl');
let lvlUp5 = document.getElementById('5lvl');


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
        lvlUp5.textContent = '4 lvl Score: 200 (1 click = 7 score) - Done';
        lvlUp5.style = 'color: yellow';
    }
});