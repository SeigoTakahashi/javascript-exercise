// 'use strict';

// 変数宣言
let x = 100;
// 定数宣言
const ONE_DAY_SECONDS = 86400;

// 変数の値をかえる
x = 500;
// 定数の値はかえるとエラー
// ONE_DAY_SECONDS = 24;

// 変数 x を work1 に表示
document.getElementById('work1').innerText = x;
// 変数 x, ONE_DAY_SECONDS を work1 に表示（'\n' で改行）
document.getElementById('work1').innerText =
    '変数 x = ' + x
    + '\n' + '変数 ONE_DAY_SECONDS = ' + ONE_DAY_SECONDS;
