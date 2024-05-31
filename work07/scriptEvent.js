'use strict';

/***********************************************************************************************************************************************/
/** 振返 DOM追加, アニメーション設定 ************************************************************************************************************************************/
/***********************************************************************************************************************************************/

/**
 * ボタンクリック時の処理です
 * @param {Event} event イベント情報
 * @param {HTMLElement} element DOM属性(クリックしたボタン)
 */
function onClickBtn1(event, element) {

    // input1 のDOM の 入力値を取得
    let input1 = document.getElementById('input1').value;
    // input1 を表示するDOMを生成
    let divElement = createDivElement('scriptEvent ' + event.currentTarget.innerText + '!!' + input1);
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
/** イベント ************************************************************************************************************************************/
/***********************************************************************************************************************************************/

/**
 * ボタンクリック時に以下の処理をする
 * ・work1 に子供のDOM追加してイベント情報, クリックしたDOM情報 を取得して表示する
 * ・追加したDOMにマウスオーバーのイベント複数、マウスアウトのイベント一つ追加する
 * ・work1 にマウスオーバーのイベントを追加する（コメントアウトで追加したDOMに伝搬止めるイベントを追加している）
 * ・input1 のキーダウンでイベント操作キャンセルのイベントを追加する
 * @param {Event} event イベント情報
 * @param {HTMLElement} element DOM属性(クリックしたボタン)
 */
function onClickBtn2(event, element) {
    // querySelector で work1 を取得
    let dom = document.querySelector('#work1');
    // work1 の イベントの種類(type), クリックしたDOMのテキスト を表示
    let divElement1 = createDivElement(event.type + ':' + element.innerText);
    document.querySelector('#work1').append(divElement1);

    // divElement1 にマウスオーバーの処理を複数登録
    // e.currentTarget でイベント実行してるDOMを取得
    divElement1.addEventListener('mouseover', (e) => {
        e.currentTarget.innerText = e.type;
    });
    divElement1.addEventListener('mouseover', (e) => {
        e.currentTarget.style.opacity = 0.5;
    });
    // 上で追加した divElement1 にマウスアウトの処理を登録
    divElement1.addEventListener('mouseout', (e) => {
        e.currentTarget.innerText = e.type;
        e.currentTarget.style.opacity = 1.0;
    });

    document.querySelector('#work1').addEventListener('mouseover', (e) => {
        e.currentTarget.style.fontSize = '50px';
    });
    divElement1.addEventListener('mouseover', (e) => {
        // // 自身以外のイベント伝搬の制御
        e.stopPropagation();
        // // 自身以降のイベント伝搬の制御
        e.stopImmediatePropagation();
    });
    divElement1.addEventListener('mouseover', (e) => {
        e.currentTarget.style.backgroundColor = 'pink';
    });

    // テキストの入力イベントをキャンセル
    document.querySelector('#input1').addEventListener('keydown', (e) => {
        if (e.key === 'a') {
            e.preventDefault();
        }
    });
}

/**
 * ボタンクリック時に以下の処理をする
 * ・クリックしたボタンの表示をイベント情報に変更する
 * ・クリックしたボタンにマウスオーバーのイベントを追加して表示をイベント情報に変更する
 * ・クリックしたボタンにマウスアウトのイベントを追加して表示をイベント情報に変更する
 * @param {Event} event イベント情報
 * @param {HTMLElement} element DOM属性(クリックしたボタン)
 */
function onClickBtn3(event, element) {
    let divElement1 = createDivElement(event.type + ':' + element.innerText);
    document.querySelector('#work1').append(divElement1);

    divElement1.addEventListener('click', (e) => {
        e.currentTarget.style.backgroundColor = 'green';
    })

    divElement1.addEventListener('mouseover', (e) => {
        e.currentTarget.style.backgroundColor = 'blue';
    })

    divElement1.addEventListener('mouseout', (e) => {
        e.currentTarget.style.backgroundColor = 'red';
    })

    document.querySelector('#work1').addEventListener('click', (e) => {
        e.currentTarget.style.fontSize = '30px';
    })


}

/**
 * ボタンクリック時に以下の処理をする
 * ・クリックしたボタンにクリック時のアニメーションを追加する(setAnimat, setAnimatOnclic参考)
 * ・クリックしたボタンに子供のボタン(表示'中止')を追加してクリック時にイベントの伝搬をとめる
 * @param {Event} event イベント情報
 * @param {HTMLElement} element DOM属性(クリックしたボタン)
 */
function onClickBtn4(event, element) {
    let dom = document.createElement('div');
    dom.innerText = event.type + ':' + element.innerText;
    document.querySelector('#work1').append(dom);

    dom.addEventListener('click', (e) => {
        setAnimat4(e.currentTarget);
        setAnimatOnclic4(e.currentTarget);
    })

    element.addEventListener('click', (e) => {
        let dom = document.createElement('button');
        dom.innerText = '中止';
        element.append(dom);
        dom.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
        })

    })







}

/**
 * DOMにアニメーションを設定します
 * @param {HTMLElement} element DOM属性
 */
function setAnimat4(element) {
    element.animate(
        {
            backgroundColor: ['pink', element.style.backgroundColor]
            , transform: ['rotateX(0deg)', 'rotateX(180deg)']
        }
        , {
            duration: 1000,
            iterations: Infinity
        }
    );
}

/**
 * DOMにクリック時のアニメーションを設定します
 * @param {HTMLElement} element DOM属性
 */
function setAnimatOnclic4(element) {
    element.addEventListener('click', () => {
        element.animate(
            {
                backgroundColor: ['pink', element.style.backgroundColor]
                , width: ['10%', '30%', '50%', '70%', '100%']
                , opacity: [0.5, 1]
            }
            , {
                duration: 2000,
                iterations: Infinity
            }
        );
    });
}

/**
 * ボタンクリック時に以下の処理をする
 * ・テキスト input1 に対して 0～9 の数字を入力できないようにする
 * @param {Event} event イベント情報
 * @param {HTMLElement} element DOM属性(クリックしたボタン)
 */
function onClickBtn5(event, element) {
    document.querySelector('#input1').addEventListener('keydown', (e) => {
        if (/\d/.test(e.key)) {
            e.preventDefault();
        }
    });
}

/**
 * ・ウィンドウ読み込み時に work の背景色を変更する
  - ウィンドウの読み込み時の処理を設定する方法
*/
window.addEventListener('load', (e) => {
    document.querySelector('#work1').style.backgroundColor = 'gray';
});
/**・ウィンドウ読み込み時に wokr の背景色を1秒ごとに変更する
*   - 一定間隔ごとに変更する方法
*/

setInterval(
    () => {
        let n = [...Array(3).keys()].map(i => Math.floor(Math.random() * 256));
        let color = 'rgb(' + n.join(',') + ')';
        document.querySelector('#work').style.backgroundColor = color;
    }
    , 1000 // 処理する間隔(ミリ秒)　
);
/**   - ランダムな色の生成方法
 *   let n = [...Array(3).keys()].map(i => Math.floor(Math.random() * 256));
 *   let color = 'rgb(' + n.join(',') + ')';
 */
console.log('{}で括らずに直接かくことでファイル読み込み時に実行される');
