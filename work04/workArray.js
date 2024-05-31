'use strict';

// 配列宣言
let array1 = [1, 2, 3, 4, 5, 6];
let array2 = new Array(1, 2, 3, 4, 5, 6);
console.log(array1);
console.log(array2);
let array3 = [];
let array4 = new Array();
console.log(array3);
console.log(array4);
let array6 = [3];
let array7 = new Array(3);
console.log(array6);
console.log(array7);

// 配列の値取得
let jaDay = ['日', '月', '火', '水', '木', '金', '土'];
console.log(jaDay[0]);
console.log(jaDay[3]);

// 配列使った for文
// forEach
jaDay.forEach((v, i) => {
    console.log('forEach : v = ' + v + ', i = ' + i);
});

// for of
for (const v of jaDay) {
    console.log('for of : v = ' + v);
}

// for in
for (const i in jaDay) {
    console.log('for in : i = ' + i + ', jaDay[i] = ' + jaDay[i]);
}

// 連想配列
let associates = {
    name: 'さとう'
    , sex: '男'
    , age: '18'
}
console.log(associates.name);
console.log(associates.sex);
console.log(associates.age);
console.log(associates['name']);
console.log(associates['sex']);
console.log(associates['age']);

// key があるか確認
if ('name' in associates) {
    console.log('name あり associates[name] = ' + associates['name']);
}
if ('guilty' in associates) {
    // guilty はないので else にいく
} else {
    console.log('guilty なし associates[guilty] = ' + associates['guilty']);
}

// 配列使った for文
// for in これのみそのまま使える
for (const k in associates) {
    console.log('for in : k = ' + k + ', associates[k] = ' + associates[k]);
}

// forEach  Object.values で 値 の 配列にする
Object.values(associates).forEach((v) => {
    console.log('forEach Object.values : v = ' + v);
});
// forEach  Object.keys で key の 配列にする
Object.keys(associates).forEach((k) => {
    console.log('forEach Object.keys : k = ' + k + ', associates[k] = ' + associates[k]);
});
// forEach  Object.entries で [key, value] の配列にする
Object.entries(associates).forEach(([k, v]) => {
    console.log('forEach Object.entries : k = ' + k + ', v = ' + v);
});

// for of Object.values
for (const v of Object.values(associates)) {
    console.log('for of Object.values : v = ' + v);
}
// for of Object.keys
for (const k of Object.keys(associates)) {
    console.log('for of Object.keys : k = ' + k + ', associates[k] = ' + associates[k]);
}
// for of Object.entries
for (const [k, v] of Object.entries(associates)) {
    console.log('for of Object.entries : k = ' + k + ', v = ' + v);
}

// ちょっと変わった配列宣言 [1,2,3,・・,9]になる 
// ...Array(数字).keys() で 0 から連番 => [0,1,2,・・・8]
// map(i => 処理) で新しい値入れた配列を作成 => [0,1,2,・・・8] をもとに [1,2,3,・・・9] になる
let array10 = [...Array(9).keys()].map(i => ++i);
console.log(array10);

// 配列.join(文字列) で文字連結　1::2::3・・・8::9 になる
console.log(array10.join('::'));
