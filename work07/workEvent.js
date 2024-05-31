'use strict';

/**
 * html ボタンクリック時の処理です
 * @param {Event} event イベント
 * @param {HTMLElement} element DOM属性(クリックしたボタン)
 */
function onClickHtml1(event, element) {
    document.getElementById('work1').append(createDivElement(event.type + ':' + element.id));
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

// JavaScript ボタンクリック時の処理 関数定義 addEventListner で () いらない
function onClickJS1(e) {
    document.getElementById('work2').append(createDivElement(e.type + ':' + e.currentTarget.id));
}
let btn1 = document.createElement('button');
btn1.id = 'btn_js_1';
btn1.innerText = '実行 js1';
btn1.addEventListener("click", onClickJS1);
document.getElementById('work2').append(btn1);

// JavaScript ボタンクリック時の処理 直接かく () => {処理}
let btn2 = document.createElement('button');
btn2.id = 'btn_js_2';
btn2.innerText = '実行 js2';
btn2.addEventListener("click", (e) => {
    document.getElementById('work2').append(createDivElement(e.type + ':' + e.currentTarget.id));
});
document.getElementById('work2').append(btn2);

// JavaScript ボタンクリック時の処理 変数設定 関数定義と同様で () いらない
let onClickJS3 = (e) => {
    document.getElementById('work2').append(createDivElement(e.type + ':' + e.currentTarget.id));
}
let btn3 = document.createElement('button');
btn3.id = 'btn_js_3';
btn3.innerText = '実行 js3';
btn3.addEventListener("click", onClickJS3);
document.getElementById('work2').append(btn3);

// onClickWork3 一番親のクリックイベント
function onClickWork3(event, element) {
    document.getElementById('work4').append(createDivElement(event.type + ':' + element.id));
}
// onClickWork3_1 子供のクリックイベント stopPropagation イベントを親に伝搬させない
function onClickWork3_1(event, element) {
    document.getElementById('work4').append(createDivElement(event.type + ':' + element.id));
    event.stopPropagation();
}
// onClickWork3_2 子供のクリックイベント 何もしない
function onClickWork3_2(event, element) {
    document.getElementById('work4').append(createDivElement(event.type + ':' + element.id));
}
// onClickWork3_3 子供のクリックイベント stopImmediatePropagation イベントを伝搬させない
let onClickWork3_3_1 = (e) => {
    document.getElementById('work4').append(createDivElement('3_3_1:' + e.type + ':' + e.currentTarget.id));
    // e.stopImmediatePropagation();
    // e.stopPropagation();
}
let onClickWork3_3_2 = (e) => {
    document.getElementById('work4').append(createDivElement('3_3_2:' + e.type + ':' + e.currentTarget.id));
}
let div3_3 = document.createElement('div');
div3_3.id = 'work3_3_jk';
div3_3.innerText = 'wk3_3 jk';
div3_3.style.backgroundColor = 'pink';
div3_3.addEventListener("click", onClickWork3_3_1);
div3_3.addEventListener("click", onClickWork3_3_2);
document.getElementById('work3_2').append(div3_3);

// onKeyDown5 preventDefault　デフォルト操作をキャンセル
function onKeyDown5(event, element) {
    if (event.key === "a") {
        console.log(event.key);
        event.preventDefault();
    }
}

// onClickWork6 setTimeOut で確認
function funcTest1() {
    alert('いつ出てくる？ funcTest1');
}
let funcTest2 = () => {
    alert('いつ出てくる？ funcTest2');
}
function funcTest3() {
    return () => {
        alert('いつ出てくる？ funcTest3');
    }
}

function onClickWork6(event, element) {
    // setTimeout(funcTest1(), 2000); // すぐでる
    // setTimeout(funcTest1, 2000); // 2秒後にでる
    // setTimeout(alert('いつ出てくる？ 直接かく'), 2000); // すぐにでる
    // setTimeout(() => alert('いつ出てくる？ 直接かく'), 2000); // 2秒後にでる
    // setTimeout(function () { alert('いつ出てくる？ 直接かく') }, 2000); // 2秒後にでる

    // setTimeout(funcTest2(), 2000);
    // setTimeout(funcTest2, 2000);
    // setTimeout(funcTest3(), 2000);
    // setTimeout(funcTest3, 2000);
}

