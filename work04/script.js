'use strict';

let dictionary = {
    'Apple': 'アップル'
    , 'Orange': 'オレンジ'
    , 'Grapes': 'グレープ'
};
let colors = {
    'black': '#000000'
    , 'white': '#ffffff'
    , 'gray': '#808080'
    , 'snow': '#fffafa'
    , 'navy': '#000080'
    , 'blue': '#0000ff'
    , 'skyblue': '#87ceeb'
    , 'green': '#008000'
    , 'lightgreen': '#90ee90'
    , 'greenyellow': '#adff2f'
    , 'yellow': '#ffff00'
    , 'orange': '#ffa500'
    , 'tomato': '#ff6347'
    , 'red': '#ff0000'
    , 'pink': '#ffc0cb'
    , 'purple': '#800080'
};

/**
 * ボタンクリック時の処理です
 * @param {HTMLElement} element DOM属性(クリックしたボタン)
 */
function onClickBtn1(element) {
    // input1 のDOM の 入力値を取得
    let input1 = document.getElementById('input1').value;
    // work1 の DOM を初期化
    document.getElementById('work1').innerHTML = '';
    // work1 の DOM に input1 を表示する DOM を追加
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
