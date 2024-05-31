'use strict';

let a1 = 1;

// if 文
if (a1 === 1) {
    console.log('条件が true のとき');
}
// if else 文
if (a1 === 2) {
    console.log('条件が true のとき');
} else {
    console.log('条件が false のとき');
}
// if else if 文
if (a1 === 2) {
    console.log('条件が true のとき');
} else if (a1 === 1) {
    console.log('if条件が false で else if が true のとき');
} else {
    console.log('上記以外 のとき');
}

let a2 = 2;

// AND 条件
if (a1 === 1 && a2 > 1) {
    console.log('両方が true のとき');
}
// OR 条件
if (a2 < 1 || a2 === 2) {
    console.log('どちらかが true のとき');
}

// ===, == の違い
if ('3' === 3) {
    console.log('=== だとtrueではない');
} else {
    console.log('=== 文字列と数字は違うものと判断 false');
}
if ('3' == 3) {
    console.log('== だと文字列と数字でも中身が同じなら true');
} else {
    console.log('== だとfalseではない');
}

// ! で true になるもの, 空チェックに使う時がある
console.log(!null);
console.log(!undefined);
console.log(!'');
console.log(!NaN); // Not-a-Number 数値型だけど数字じゃない特殊型(計算できない値 'a' / 2 etc..)
console.log(!false);
console.log(!0);

// for文
for (let i = 0; i < 5; i++) {
    console.log('for : ' + i);
}

// while文
let i = 0;
while (i < 5) {
    console.log('while : ' + i);
    i++;
}

let array = ['a', 'b', 'c', 'd', 'e'];

// forEach
array.forEach((v, i) => {
    console.log('forEach : v = ' + v + ', i = ' + i);
});

// for of
for (const v of array) {
    console.log('for of : v = ' + v);
}

// for in
for (const i in array) {
    console.log('for in : i = ' + i + ', array[i] = ' + array[i]);
}

// 現在日付
let day1 = new Date();
console.log(day1);

// 年末（2022/12/31）
let day2 = new Date(2022, 12 - 1, 31);
console.log(day2.toLocaleDateString());
console.log(day2.getFullYear());
console.log(day2.getMonth());
console.log(day2.getDate());

// 文字列 yyyy/mm/dd を日付に変換
// string.split(文字) で文字ごとに分割される '2022/5/7'.split('/') -> [2022, 5, 7]
let dateArray = '2022/5/7'.split('/');
console.log(new Date(dateArray[0], dateArray[1] - 1, dateArray[2]));

// 正規表現 RegExp 宣言 yyyy/mm/dd
// ^：文頭　$：文末　\d：数字(0-9)　 {1,2}：文字数  [0-2]：対応する値
const DAY_FORMAT = new RegExp('^\\d{4}\/(\\d{1}|1[0-2])\/(\\d{1}|[1-2]\\d{1}|3[0-1])$');
// フォーマット確認 test (引数)
if (DAY_FORMAT.test('2022/4/5')) {
    console.log('true : ' + '2022/4/5');
}
if (DAY_FORMAT.test('2022/12/31')) {
    console.log('true : ' + '2022/12/31');
}
if (DAY_FORMAT.test('2022/13/31')) {
    // 13月はない
} else {
    console.log('false : ' + '2022/13/31');
}
if (DAY_FORMAT.test('2022/12/32')) {
    // 32日はない
} else {
    console.log('false : ' + '2022/12/32');
}

