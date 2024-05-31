'use strict';

/***********************************************************************************************************************************************/
/** 振返 DOM追加 ************************************************************************************************************************************/
/***********************************************************************************************************************************************/

/**
 * ボタンクリック時の処理です
 * @param {HTMLElement} element DOM属性(クリックしたボタン)
 */
function onClickBtn1(element) {
    // input1 のDOM の 入力値を取得
    let input1 = document.getElementById('input1').value;
    // input1 を表示するDOMを生成
    let divElement = createDivElement('scriptFunction 実行!!' + input1);
    // work1 の DOM に input1 を表示する DOM を追加
    document.getElementById('work1').append(divElement);
    // 追加した DOM の背景色, 文字サイズ を設定
    divElement.style.backgroundColor = 'skyblue';
    divElement.style.fontSize = 20 + 'px';
}

/**
 * text を表示する DOM属性(div) を生成します
 * @param {String} text 文字列
 * @return {HTMLElement} DOM属性(div)
 */
function createDivElement(text) {
    // div の DOM を生成
    let element = document.createElement('div');
    // text を設定
    element.innerText = text;
    // 生成した DOM を返す
    return element;
}

/***********************************************************************************************************************************************/
/** 関数(メソッド) ************************************************************************************************************************************/
/***********************************************************************************************************************************************/

/**
 * ボタンクリック時に func1, func2, createDivElement を実行
 */
function onClickBtn2(element) {
    // 引数ないメソッドの呼び出し
    func1();
    // 引数ありメソッドの呼び出し(初期値あり)
    func2();
    func2('引数渡す1');
    func2('引数渡す1', '引数渡す2');
    func2(undefined, '引数渡す2(1はundefined)');
    func2('引数渡す1(2はundefined)', undefined);
    // 戻り値ありメソッドの呼び出し
    let divElement = createDivElement('戻り値ありのメソッド実行');
    document.getElementById('work1').append(divElement);
}
/** func1 引数なし */
function func1() {
    let divElement = createDivElement('func1 引数なし');
    document.getElementById('work1').append(divElement);
}
/** func2 引数に初期値を設定 */
function func2(str1 = '初期値1', str2 = '初期値2') {
    let divElement = createDivElement('func2 str1：' + str1 + ' - str2:' + str2);
    document.getElementById('work1').append(divElement);
}

/**
 * ボタンクリック時に func3, func4, func5, func6 を作成して実行
 * func3 は引数なし
 * func4 の引数 fontSize, color に好きな値を設定
 * func5 の引数 fontSize に input の入力値を設定(未入力時は引数なしにする)
 * func6 の引数 color に好きな値, count に input1 の入力値を設定(未入力時は引数なしにする)
 * 
 * - func3 の内容
 *   ・引数なしのメソッドを作成し work1 に 'func3つくった' を表示
 * - func4 の内容
 *   ・引数2つ(fontSize, color)のメソッドを作成し work1 に 'func4つくった' を
 *     文字サイズを引数 fontSize, 背景色を引数 color で表示
 * - func5 の内容
 *   ・引数1つ(fontSize 初期値 15)のメソッドを作成し work1 に 'func5つくった' を
 *     文字サイズを引数 fontSize で表示
 * - func6 の内容
 *   ・引数2つ(color, count 初期値 2)のメソッドを作成し work1 に 'func6つくった' を
 *     背景色 を引数color で 引数 count の個数分を表示
 */
function onClickBtn3(element) {
    func3();
    func4(50, 'red');
    let input = document.getElementById('input1').value;
    if (input == '') {
        func5();
        func6('green', undefined);
    } else {
        func5(input);
        func6('green', input);
    }





}

function func3() {
    let divElement = createDivElement('func3つくった');
    document.getElementById('work1').append(divElement);
}

function func4(fontSize, color) {
    let divElement = createDivElement('func4つくった');
    document.getElementById('work1').append(divElement);
    divElement.style.fontSize = fontSize + 'px';
    divElement.style.backgroundColor = color;
}

function func5(fontSize = 15) {
    let divElement = createDivElement('func5つくった');
    document.getElementById('work1').append(divElement);
    divElement.style.fontSize = fontSize + 'px';
}

function func6(color, count = 2) {

    for (let i = 0; i < Number(count); i++) {
        let divElement = createDivElement('func6つくった');
        divElement.style.backgroundColor = color;
        document.getElementById('work1').append(divElement);
    }

}