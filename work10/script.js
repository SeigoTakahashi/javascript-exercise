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
    let divElement = createDivElement('scriptApi ' + '実行!!' + input1);
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
/** Web API ************************************************************************************************************************************/
/***********************************************************************************************************************************************/

/**
 * api を実行して json を処理します
 * @param {String} url リクエストURL
 * @param {function}} functionJson json に対する処理
 * @param {Array} params リクエストURL実行時のパラメータ
 * @param {Array} options リクエストURL実行時のオプション
 */
function apiJson(url, functionJson, params = {}, options = {}) {
    let requestUrl = url;
    if (!params?.length) {
        requestUrl = url + '?' + new URLSearchParams(params);
    }
    fetch(requestUrl, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status + ':' + response.statusText);
            }
            return response.json();
        })
        .then(json => functionJson(json))
        .catch((error) => {
            console.log(error);
            alert(error)
        });
}

/**
 * html 読込時の処理
 */
window.addEventListener('load', (e) => {

    showLoading();

    // 猫取得API実行して carousel 紹介を更新
    let carousels = [...document.querySelectorAll('.carousel-item')];
    carousels.forEach(function (item, index) {
        apiJson('https://api.thecatapi.com/v1/images/search'
            , (json) => {
                console.log(json);
                item.querySelector('img').src = json[0].url;
                item.querySelector('img').onload = () => hideLoading();
                clickImgViewModal(item.querySelector('img'));
            });
    });

    // 人取得API実行して team 紹介を更新
    let teames = [...document.querySelectorAll('.team-member')];
    let params = {
        results: teames.length
    };
    apiJson('https://randomuser.me/api'
        , (json) => {
            console.log(json);
            teames.forEach(function (item, index) {
                item.querySelector('img').src = json.results[index].picture.large;
                item.querySelector('h4').textContent = json.results[index].name.first + '.' + json.results[index].name.last;
                item.querySelector('p').textContent = json.results[index].gender;
                item.querySelector('img').onload = () => hideLoading();
                clickImgViewModal(item.querySelector('img'));
            });
        }
        , params);

    // キツネ取得API実行して featurette 紹介を更新
    let featurettes = [...document.querySelectorAll('.featurette-item')];
    featurettes.forEach(function (item, index) {
        apiJson('https://randomfox.ca/floof/'
            , (json) => {
                console.log(json);
                item.querySelector('img').src = json.image;
                item.querySelector('img').onload = () => hideLoading();
                clickImgViewModal(item.querySelector('img'));
            });
    });
});

/**
 * IMGのクリック時にモーダル表示を設定します
 * @param {HTMLElement} img IMGタグ
 */
function clickImgViewModal(img) {
    img.dataset.bsToggle = 'modal';
    img.dataset.bsTarget = '#md1';
    img.addEventListener('click', e => {
        document.querySelector('#md1 img').src = e.currentTarget.src;
    });
}

/**
 * ローディングを表示します
 */
function showLoading() {
    document.querySelector('body').classList.add('no-scroll');
    document.querySelector('#loading').classList.remove('d-none');
}

/**
 * ローディングを非表示にします
 */
function hideLoading() {
    let imageCompleteds = [...document.querySelectorAll('img')].map(d => d.complete);
    if (imageCompleteds.includes(false)) return;
    document.querySelectorAll('img').forEach(img => img.onload = '');
    document.querySelector('body').classList.remove('no-scroll');
    document.querySelector('#loading').classList.add('d-none');
}
