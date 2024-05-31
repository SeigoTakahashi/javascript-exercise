'use strict';

let num1 = 5;
let num2 = 2;

document.getElementById('work1').innerText =
    '変数 num1 : ' + num1 + ', num2 : ' + num2
    + '\n'
    + '\n' + '足し算 : num1 + num2 = ' + (num1 + num2)
    + '\n' + '引き算 : num1 - num2 = ' + (num1 - num2)
    + '\n' + '掛け算 : num1 * num2 = ' + (num1 * num2)
    + '\n' + '割り算 : num1 / num2 = ' + (num1 / num2)
    + '\n' + '割り算(整数) : num1 / num2 = ' + (parseInt(num1 / num2))
    + '\n' + '割り算(余り) : num1 % num2 = ' + (num1 % num2);
