'use strict';

/***********************************************************************************************************************************************/
/** 振返 DOM追加 ************************************************************************************************************************************/
/***********************************************************************************************************************************************/

/**
 * ボタンクリック時に input1 に入力した値を work1 に追加します
 * @param {HTMLElement} element DOM属性(クリックしたボタン)
 */
function onClickBtn1(element) {
    // input1 のDOM の 入力値を取得
    let input1 = document.getElementById('input1').value;
    // input1 を表示するDOMを生成
    let divElement = createDivElement('scriptArray 実行!!' + input1);
    // work1 の DOM に input1 を表示する DOM を追加
    document.getElementById('work1').append(divElement);
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
/** 配列 ************************************************************************************************************************************/
/***********************************************************************************************************************************************/

/**
 * ボタンクリック時に work1 に配列の値を表示
 */
function onClickBtn2(element) {
    // 配列の宣言
    let jaDay = ['日', '月', '火', '水', '木', '金', '土'];
    // 配列への追加
    jaDay.push('？');
    // 位置指定
    let divElement0 = createDivElement('位置指定 : jaDay[0] = ' + jaDay[0]);
    document.getElementById('work1').append(divElement0);
    let divElement3 = createDivElement('位置指定 : jaDay[3] = ' + jaDay[3]);
    // forEach
    jaDay.forEach((v, i) => {
        let divElement = createDivElement('forEach : v = ' + v + ', i = ' + i);
        document.getElementById('work1').append(divElement);
    });
}

/**
 * ボタンクリック時に work1 に配列[1,2,3,4,5,6,7,8,9]を宣言して表示
 */
function onClickBtn3(element) {
    let num = [];
    for (let i = 1; i <= 10; i++) {
        num.push(i);
    }
    num.forEach((v, i) => {
        let divElement = createDivElement('forEach : v = ' + v + ', i = ' + i);
        document.getElementById('work1').append(divElement);
    });
}

/***********************************************************************************************************************************************/
/** 連想配列 ************************************************************************************************************************************/
/***********************************************************************************************************************************************/

/**
 * ボタンクリック時に work1 に連想配列のキー、値を表示
 */
function onClickBtn4(element) {
    // 連想配列の宣言
    let dictionary = {
        'Apple': 'アップル'
        , 'Orange': 'オレンジ'
        , 'Grapes': 'グレープ'
    };
    // 連想配列の追加
    dictionary['Pear'] = 'なし';
    // キー指定
    let divElementKey1 = createDivElement('キー指定 : dictionary[Apple] = ' + dictionary['Apple']);
    document.getElementById('work1').append(divElementKey1);
    // キーの存在確認
    let str = 'Orange';
    if (str in dictionary) {
        let divElement = createDivElement('存在あり : ' + str + ' = ' + dictionary[str]);
        document.getElementById('work1').append(divElement);
    } else {
        let divElement = createDivElement('存在なし : ' + str + ' = ' + dictionary[str]);
        document.getElementById('work1').append(divElement);
    }
    // forEach  Object.entries で [key, value] を取得して繰り返す
    Object.entries(dictionary).forEach(([k, v]) => {
        let divElement = createDivElement('forEach Object.entries : key = ' + k + ', value = ' + v);
        document.getElementById('work1').append(divElement);
    });
}

/**
 * ボタンクリック時に work1 に 連想配列 colors の「キー：値」をすべて表示（背景色を値で変更）
 */
function onClickBtn5(element) {
    let colors = {
        'gray': '#808080'
        , 'snow': '#fffafa'
        , 'navy': '#000080'
        , 'blue': '#0000ff'
        , 'skyblue': '#87ceeb'
    };
    Object.entries(colors).forEach(([k, v]) => {
        let dom = document.createElement('div');
        dom.innerText = 'キー:' + k + ', 値:' + v;
        document.getElementById('work1').append(dom);
        dom.style.backgroundColor = colors[k];
    })
}

/**
 * ボタンクリック時に work1 に以下を追加で表示
 * ・input1 に入力した値が連想配列 colors のキーに存在する場合、「キー：値」を表示（背景色を値で変更）
 * ・上記以外の場合、input1 に入力した値を表示
 */
function onClickBtn6(element) {
    let colors = {
        'gray': '#808080'
        , 'snow': '#fffafa'
        , 'navy': '#000080'
        , 'blue': '#0000ff'
        , 'skyblue': '#87ceeb'
    };
    let input1 = document.getElementById('input1').value;
    if (input1 in colors) {
        let dom = document.createElement('div');
        dom.innerText = input1 + ':' + colors[input1];
        dom.style.backgroundColor = colors[input1];
        document.getElementById('work1').append(dom);
    }

}

/**
 * ボタンクリック時に input1 に入力した値を work1 に追加で表示し
 * 追加する DOM を変化させながら表示します
 * 
 * - DOM に動きをつける方法（dom は getElementById や createElement の取得/作った dom）
 * dom.animate(キーフレーム, タイミングプロパティ)
 * （例）
 * dom.animate(
 *     // 変化させるスタイルを指定(キーフレーム)  スタイル名: [値1, 値2...]  #値1～2～...と徐々に変化
 *     {
 *         backgroundColor: ['red', 'blue', 'red']
 *         , fontSize: ['10px', '50px']
 *     }
 *     // 変化の仕方を指定(タイミングプロパティ)　タイミング名: 値
 *     , {
 *         duration: 3000           // 変化の間隔（ms）
 *         iterations: Infinity     // 繰り返し回数, Infinityは無限
 *     }
 * )
 */
function onClickBtnX1(element) {
    let input1 = document.getElementById('input1').value;
    let divElement = createDivElement('scriptArray 実行!!' + input1);
    document.getElementById('work1').append(divElement);

    divElement.animate(
        {
            backgroundColor: ['red', 'blue', 'red']
            , fontSize: ['10px', '50px']
            , transform: ['rotate(0deg)', 'rotate(360deg)']
            , width: ['10%', '50%', '100%', '50%', '10%']
        }
        , {
            duration: 3000,
            iterations: Infinity
        }
    );
}

/**
 * onClickBtnX1 の animate の引数を以下のようにする
 * ・キーフレームのスタイルの値を変数宣言した配列に変更
 * ・タイミングプロパティを変数宣言した連想配列に変更
 */
function onClickBtnX2(element) {
    let input1 = document.getElementById('input1').value;
    let divElement = createDivElement('scriptArray 実行!!' + input1);
    document.getElementById('work1').append(divElement);
    let backgroundColors = ['#87ceeb', 'blue', 'fffafa'];
    let fontSizes = ['10px', '20px', '30px'];
    let transforms = ['rotate(0deg)', 'rotate(360deg)'];
    let widths = ['10%', '30%', '50%', '100%', '50%', '30%', '10%'];
    divElement.animate(
        {
            backgroundColor: backgroundColors
            , fontSize: fontSizes
            , transform: transforms
            , width: widths
        }
        , {
            duration: 1000,
            iterations: Infinity
        }
    );
}
