'use strict';

/**
 * onClickWork1, 1_X は全部おなじこと
 */
function onClickWork1() {
    console.log('onClickWork1');
    document.getElementById('work1').append(createDivElement('押した！'));
}
let onClickWork1_1 = function () {
    console.log('onClickWork1_1');
    document.getElementById('work1').append(createDivElement('押した！'));
}
let onClickWork1_2 = () => {
    console.log('onClickWork1_2');
    document.getElementById('work1').append(createDivElement('押した！'));
}

/**
 * onClickWork2, 2_X は全部おなじこと
 * (変数1, 変数2, ・・) で引数を設定できる
 */
function onClickWork2(s) {
    console.log('onClickWork2');
    document.getElementById('work1').append(createDivElement(s));
}
let onClickWork2_1 = function (s) {
    console.log('onClickWork2_1');
    document.getElementById('work1').append(createDivElement(s));
}
let onClickWork2_2 = (s) => {
    console.log('onClickWork2_2');
    document.getElementById('work1').append(createDivElement(s));
}

/**
 * onClickWork3, 3_X は全部おなじこと
 * 引数 = 初期値 で引数ない時の値を設定できる
 */
function onClickWork3(s1 = '！', s2 = '！！') {
    console.log('onClickWork3');
    document.getElementById('work1').append(createDivElement(s1 + s2));
}
let onClickWork3_1 = function (s1 = '！', s2 = '！！') {
    console.log('onClickWork3_1');
    document.getElementById('work1').append(createDivElement(s1 + s2));
}
let onClickWork3_2 = (s1 = '！', s2 = '！！') => {
    console.log('onClickWork3_2');
    document.getElementById('work1').append(createDivElement(s1 + s2));
}

/**
 * 変数に関数が設定できる
 * JavaScript だと結構、使うことがあります
 */
function onClickWork4() {
    // 変数に設定するときは括弧をつけない
    let func1 = onClickWork1;
    let func2 = onClickWork2_1;
    let func3 = onClickWork3_2;
    // 変数(引数, ・・) で実行できる
    func1();
    func2('work4 こんな実行方法もある2');
    func3('work4 こんな実行方法もある3', ' 引数も設定できる');

    // その場で関数を作れる
    let funcNew1 = function () {
        console.log('その場で作った funcNew1')
    };
    let funcNew2 = (s1, s2) => {
        console.log('その場で作った funcNew2 引数もＯＫ： s1 : ' + s1 + ' s2 : ' + s2);
        return '戻り値もＯＫ:' + (s1 * s2);
    }
    // その場で作った関数を実行
    funcNew1();
    let funcNew2Return = funcNew2(2, 5);
    console.log(funcNew2Return);

    // 関数を渡せる（引数にもできる）
    functionArg(onClickWork1);
    functionArg(onClickWork3);
}

/**
 * 関数を引数に設定できます
 * @param {Function} func 関数の引数
 */
function functionArg(func) {
    console.log('functionArg:' + typeof (func) + ':' + func.name);
    func(3, 4);
}

/**
 * text を表示する DOM属性(div) を生成します
 * @param {String} text 文字列
 * @return {Element} DOM属性(div)
 */
function createDivElement(text) {
    let element = document.createElement('div');
    element.innerText = text;
    return element;
}
