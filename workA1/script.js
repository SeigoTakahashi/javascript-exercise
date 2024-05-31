'use strict';

/***********************************************************************************************************************************************/
/** DOM操作 ************************************************************************************************************************************/
/***********************************************************************************************************************************************/

/**
 * ボタンクリック時に input1 に入力した値を work1 に表示します
 * @param {HTMLElement} element DOM属性(クリックしたボタン)
 */
function onClickBtn11(element) {
    // input1 の DOM から入力値を取得
    let input1 = document.getElementById('input1').value;
    // work1 の DOM のテキストに入力した値を設定
    document.getElementById('work1').innerText = input1;
}

/**
 * ボタンクリック時に work1 の色を変えてみよう
 * 
 * - DOM の色を変える方法 ( id は html と合わせる, red は blue/black など色を英語で書く )
 * document.getElementById('id').style.backgroundColor = 'red'
 */
function onClickBtn12(element) {
    document.getElementById('work1').style.backgroundColor = 'red'
}

/**
 * ボタンクリック時に work1 の文字サイズを変えてみよう
 * 
 * - DOM の文字サイズを変える方法 ( id は html と合わせる, 8px/100px/50px など数字にpxつける )
 * document.getElementById('id').style.fontSize = '8px'
 */
function onClickBtn13(element) {
    document.getElementById('work1').style.fontSize = '18px'
}

/**
 * ボタンクリック時に input1 で入力した色で work1 の色を変えてみよう
 * 
 * ※html の id=input1 の type を color に変えるといろんな色にかえれるかも
 */
function onClickBtn14(element) {
    let input1 = document.getElementById('input1').value;
    document.getElementById('work1').style.backgroundColor = input1;
}


/***********************************************************************************************************************************************/
/** DOM追加 ************************************************************************************************************************************/
/***********************************************************************************************************************************************/

/**
 * ボタンクリック時に input1 に入力した値を work1 に追加します
 * @param {HTMLElement} element DOM属性(クリックしたボタン)
 */
function onClickBtn21(element) {
    // input1 の DOM から入力値を取得
    let input1 = document.getElementById('input1').value;
    // work1 に追加する DOM を生成
    let dom = document.createElement('div');
    // 作った DOM のテキストに入力した値を設定
    dom.innerText = input1;
    // work1 に作った DOM を追加
    document.getElementById('work1').append(dom);
}

/**
 * ボタンクリック時に input1 に入力した値を work1 に追加で表示します
 * (追加する DOM の生成を関数にする)
 * @param {HTMLElement} element DOM属性(クリックしたボタン)
 */
function onClickBtn22(element) {
    // input1 の DOM から入力値を取得
    let input1 = document.getElementById('input1').value;
    // work1 に追加する DOM を生成
    let dom = createDivElement(input1);
    // work1 に作った DOM を追加
    document.getElementById('work1').append(dom);
    // 上の二つをまとめてもOK
    // document.getElementById('work1').append(createDivElement(input1));
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

/**
 * ボタンクリック時に input1 に入力した値を work1 に追加で表示し
 * 追加する DOM の色を変えてみよう
 * 
 * ※ document.getElementById('id') で取得した DOM と 
 *    document.createElement('div') で生成した DOM は
 *    同じことができる (テキスト、色、文字サイズの設定などは同じ方法)
 */
function onClickBtn23(element) {
    let input1 = document.getElementById('input1').value;
    let dom = document.createElement('div');
    dom.innerText = input1;
    document.getElementById('work1').append(dom);
    dom.style.backgroundColor = "green";
}

/**
 * ボタンクリック時に input1 に入力した値を work1 に追加で表示し
 * 追加する DOM の文字サイズを変えてみよう
 */
function onClickBtn24(element) {
    let input1 = document.getElementById('input1').value;
    let dom = document.createElement('div');
    dom.innerText = input1;
    document.getElementById('work1').append(dom);
    dom.style.fontSize = "20px";
}

/**
 * ボタンクリック時に input1 に入力した値を work1 に追加で表示し
 * 追加する DOM の色や文字サイズを入力した値に変えてみよう
 * 
 * ※ html に input や button など足してもOK
 */
function onClickBtn25(element) {
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;
    let input3 = document.getElementById('input3').value;
    let dom = document.createElement('div');
    dom.innerText = input1;
    document.getElementById('work1').append(dom);
    dom.style.fontSize = input3 + "px";
    dom.style.backgroundColor = input2;

}

/**
 * onClickBtn25 の処理に追加で1秒ごとに文字サイズを大きくする処理を追加してみよう
 * [ヒント]
 * - px がついてる数字を parseInt すると数字だけになる
 *   例) parseInt('12px') // 12 になる
 * - setInterval(関数, 間隔時間) を使うと間隔時間(ミリ秒)ごとに関数を実行できる
 *   例) setInterval(()=> {console.log('aaaa')}, 1000) // 1秒ごとにログ出力
 */
function onClickBtnXX(element) {
    let input1 = document.getElementById('input1').value;
    let input3 = document.getElementById('input3').value;
    let dom = document.createElement('div');
    dom.innerText = input1;
    document.getElementById('work1').append(dom);
    setInterval(() => {
        dom.style.fontSize = input3 + "px";
        input3 = parseInt(input3) + 1;
    }, 1000)
}
