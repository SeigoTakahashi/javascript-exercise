'use strict';

/***********************************************************************************************************************************************/
/** 振返 DOM追加, アニメーション設定 ************************************************************************************************************************************/
/***********************************************************************************************************************************************/

/**
 * ボタンクリック時の処理です
 * @param {HTMLElement} element DOM属性(クリックしたボタン)
 */
function onClickBtn1(element) {

    // input1 のDOM の 入力値を取得
    let input1 = document.getElementById('input1').value;
    // input1 を表示するDOMを生成
    let divElement = createDivElement('scriptDom 実行!!' + input1);
    // work1 の DOM に input1 を表示する DOM を追加
    document.getElementById('work1').append(divElement);
}

/**
 * text を表示する DOM属性(div) を生成します
 * @param {String} text 文字列
 * @param {String} backgroundColor 背景色
 * @return {HTMLElement} DOM属性(div)
 */
function createDivElement(text, backgroundColor = 'skyblue') {
    // div の DOM を生成
    let element = document.createElement('div');
    // text を設定
    element.innerText = text;
    // 背景色 を設定
    element.style.backgroundColor = backgroundColor;
    // アニメーションを設定
    setAnimat(element);
    // クリック時のアニメーションを設定
    setAnimatOnclic(element);
    // 生成した DOM を返す
    return element;
}

/**
 * DOMにアニメーションを設定します
 * @param {HTMLElement} element DOM属性
 */
function setAnimat(element) {
    element.animate(
        {
            backgroundColor: ['white', element.style.backgroundColor]
            , transform: ['rotateX(0deg)', 'rotateX(360deg)']
        }
        , {
            duration: 2000,
            iterations: 1
        }
    );
}

/**
 * DOMにクリック時のアニメーションを設定します
 * @param {HTMLElement} element DOM属性
 */
function setAnimatOnclic(element) {
    element.addEventListener('click', () => {
        element.animate(
            {
                backgroundColor: ['white', element.style.backgroundColor]
                , width: ['50%', '100%']
                , opacity: [0.2, 1]
            }
            , {
                duration: 1000,
                iterations: 1
            }
        );
    });
}

/***********************************************************************************************************************************************/
/** DOM操作(取得 querySelector, querySelectorAll) ************************************************************************************************************************************/
/***********************************************************************************************************************************************/

/**
 * ボタンクリック時に id work1 を取得して tag名, 個数 を表示
 * querySelectorAll で取得した list をループして子要素の数を表示 
 * 
 * querySelector, querySelectorAll の引数の書き方
 * ・id指定 => '#id'        ex) document.querySelector('#aaa')
 * ・class指定 => '.class'  ex) document.querySelector('.bbb')
 * ・tag指定 => 'tag'       ex) document.querySelector('div')
 */
function onClickBtn2(element) {
    // querySelector で work1 を取得
    let dom = document.querySelector('#work1');
    // work1 の tag名 を表示
    let divElement1 = createDivElement(dom.tagName);
    document.querySelector('#work1').append(divElement1);

    // querySelectorAll で work1 を取得
    let domList = document.querySelectorAll('#work1');
    // work1 の 個数 を表示
    let divElement2 = createDivElement(domList.length, 'pink');
    document.querySelector('#work1').append(divElement2);
    // querySelectorAll で取得した list をループして処理
    Array.from(domList).forEach(d => {
        let divElement3 = createDivElement(d.children.length, 'green');
        document.querySelector('#work1').append(divElement3);
    });
}

/**
 * 1. ボタンクリック時に tag名 div を querySelector で取得して class名 を表示する
 *    - domからclass名取得方法 ⇒ dom.className
 * 2. 続いて tag名 div を  querySelectorAll で取得した list をループして class名, 子要素の数を表示する
 * 3. 続いて tag名 h1 を querySelector で取得して クリック時のアニメーションを設定する
 *    クリック時のアニメーション設定は用意されてる function 使用（変更してもOK）
 *    - setAnimatOnclic(取得したdom)
 */
function onClickBtn3(element) {
    let dom = document.querySelector('div');
    let divElement1 = createDivElement(dom.className, 'red');
    document.querySelector('#work1').append(divElement1);

    let domList = document.querySelectorAll('div');
    Array.from(domList).forEach(d => {
        let divElement2 = createDivElement('子要素の数：' + d.children.length, 'green');
        let divElement3 = createDivElement('class名：' + d.className, 'blue');
        document.querySelector('#work1').append(divElement2);
        document.querySelector('#work1').append(divElement3);
    });

    let dom2 = document.querySelector('h1');

    setAnimatOnclic(dom2);


}

/***********************************************************************************************************************************************/
/** DOM操作(作成, 追加, 削除) ************************************************************************************************************************************/
/***********************************************************************************************************************************************/

/**
 * ボタンクリック時に labelタグ を作成して divElement に追加, label 押下時に削除
 * (divElement は work1 に追加した divタグ の DOM)
 * 
 * - dom 作成方法
 * document.createElement('tag名');
 * - dom 削除方法
 * dom.remove();
 * - dom イベント追加方法
 * dom.addEventListener('イベント名', (e) => { // e はイベントオブジェクト(省略OK)
 *     処理内容
 * })
 */
function onClickBtn4(element) {
    let divElement = createDivElement('DOM操作用　');
    document.querySelector('#work1').append(divElement);

    // label の DOM を生成
    let dom = document.createElement('label');
    dom.innerText = 'label作成(押下したら削除、マウスオーバーで文字大)'
    // label の DOM を divElement に追加
    divElement.append(dom);
    // label の DOM にクリック時に削除する処理を設定
    dom.addEventListener('click', () => {
        dom.remove();
    });
    // label の DOM にマウスオーバー時に文字サイズ変更する処理を設定
    dom.addEventListener('mouseover', () => {
        dom.style.fontSize = '30px';
    });
}

/**
 * ボタンクリック時に buttonタグ を作成して divElement に追加, 作成した button 押下時に削除する
 * (divElement は work1 に追加した divタグ の DOM)
 */
function onClickBtn5(element) {
    let divElement = createDivElement('DOM操作用　');
    document.querySelector('#work1').append(divElement);

    let dom = document.createElement('button');
    dom.innerText = 'button作成(押下したら削除)'

    divElement.append(dom);

    dom.addEventListener('click', () => {
        dom.remove();
    });

}

/**
 * ボタンクリック時に 入力したタグ名のタグ を作成して divElement に2つ以上追加
 * 作成したタグ 押下時の処理を追加して削除出来ない・出来るを設定する（出来ない時の処理は任意で設定）
 * (divElement は work1 に追加した divタグ の DOM)
 *
 * - input1 入力値を取得
 * let input1 = document.getElementById('input1').value;
 */
function onClickBtn6(element) {
    let divElement = createDivElement('DOM操作用　');
    document.querySelector('#work1').append(divElement);

    let input = document.getElementById('input1').value;
    let dom1 = document.createElement(input);
    let dom2 = document.createElement(input);
    divElement.append(dom1);
    divElement.append(dom2);

    dom1.addEventListener('click', () => {
        dom1.remove();
    });

    let rand = Math.floor(Math.random() * 2);
    let array = [func1, func2];
    dom2.addEventListener('click', () => {
        array[rand](dom2);
    });
}

let func1 = (element) => {
    element.remove();
}

let func2 = (element) => {
    element.style.backgroundColor = 'red';
}
