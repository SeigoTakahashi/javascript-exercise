'use strict';

/**
 * ボタンクリック時の処理です
 * @param {HTMLElement} element DOM属性(クリックしたボタン)
 */
function onClickBtn1(element) {
    let input1 = document.getElementById('input1').value;
    document.getElementById('work1').innerHTML = '';
    document.getElementById('work1').append(createDivElement(input1));
}

/**
 * text を表示する DOM属性(div) を生成します
 * @param {String} text 文字列
 * @return {HTMLElement} DOM属性(div)
 */
function createDivElement(text) {
    let element = document.createElement('div');
    element.innerText = text;
    return element;
}

// cookie 設定
document.cookie = 'key1=値1';
document.cookie = 'key2=値2;max-age=10'; // max-ageは秒数
console.log(document.cookie);
// cookie 全件表示
// 1. ';' で分割(key=value, .. の配列) -> 2. '=' で分割 (key, value の配列)
// ※ キーにスペースが入ってるので trim する必要あり
let cookies = document.cookie.split(';'); // ; で分割して配列作成
cookies.forEach(c => {
    let [key, value] = c.split('=');
    console.log(key.trim() + ':' + value);
});
// cookie key 取り出し
document.cookie.split(';').forEach(c => {
    let [key, value] = c.split('=');
    if (key.trim() === 'key1') {
        console.log(value);
    }
});

// local storage 設定
localStorage.setItem('key1', '値1');
localStorage.setItem('key2', '値2');
console.log(localStorage);
// local storage 全件表示
for (const [k, v] of Object.entries(localStorage)) {
    console.log(k + ':' + v);
}
// local storage 取り出し
console.log(localStorage.getItem('key1'));
// local storage key 指定クリア
localStorage.removeItem('key1');
console.log(localStorage.getItem('key1'));
// local storage 全クリア
localStorage.clear();
console.log(localStorage);
