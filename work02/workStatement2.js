'use strict';

// 変数を宣言
let number1 = 100; // Number
let boolean1 = true; // Boolean
let string1 = 'aaa'; // String
let undefined1; // undefined
let null1 = null; // null

// 変数の型を work1 に表示
document.getElementById('work1').innerText = typeof (number1);
// 変数の型を複数 work1 に表示
document.getElementById('work1').innerText =
    '変数 number1 : ' + (typeof (number1))
    + '\n' + '変数 boolean1 : ' + (typeof (boolean1))
    + '\n' + '変数 string1 : ' + (typeof (string1))
    + '\n' + '変数 undefined1 : ' + (typeof (undefined1))
    + '\n' + '変数 null1 : ' + (typeof (null1));

// 数字 + 文字列の確認
let x1 = 100;
let x2 = '100';
console.log(x1 + x2);
console.log(x1 + parseInt(x2));
