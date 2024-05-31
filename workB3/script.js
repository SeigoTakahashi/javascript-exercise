'use strict';

// 数字の選択肢の数
const boxCount = 90;
// 当てる数字
let target = -1;

// 初期処理で数字選択肢の box を作って追加
let count = 0;
let select = null;
for (let index = 0; index < boxCount; index++) {
    if (index % (boxCount / 10) == 0) {
        select = document.createElement('div');
        select.classList.add('flex_center');
        document.querySelector('.select').append(select);
    }
    const box = document.createElement('div');
    box.classList.add('box');
    box.innerText = 0;
    select.append(box);
    box.addEventListener('click', () => isNumber(box));
}
// 開始時の処理（数字、イベントの設定）
setNumbers();
document.querySelector('#main').addEventListener('click', setNumbers)

////////////////////////////////////////////////////////////////////////////////////////
// ここから下にある TODO コメントの部分を追記・書き換えながら完成させよう
////////////////////////////////////////////////////////////////////////////////////////

/**
 * 開始時の数字、イベントを設定する
 */
function setNumbers() {
    // TODO 当てる数字を設定する (0から boxCount の乱数にする)

    // TODO 数字配列を設定する (0から boxCount までの連番を設定する) # スプレッド構文使うと楽かも！？

    // 数字選択肢の box に数字配列を設定
    document.querySelectorAll('.select .box').forEach((box, i) => {
        // TODO box の表示文言 (innerText) に数字配列の値を設定する # 最初は連番でOK、時間あったらランダムにしてみる
        // TODO box の style.opacity に 1 を設定する (box.style.opacity = 1) ※ opacity 透明度 0 -> 見えない, 1 -> 見える
    });

    // ヒント処理を設定 奇数・偶数
    document.querySelector('#odd').addEventListener('click', () => {
        document.querySelectorAll('.select .box').forEach(v => {
            // TODO target と box.innerText の偶数・奇数が一致しない時に条件を書き換える、完成したら click 時の処理を addEventHint 関数つかうようにしてみる
            if (false) {
                v.style.opacity = 0;
            }
        });
    });
    // ヒント処理を設定 半分以上・以下
    document.querySelector('#herf').addEventListener('click', () => {
        document.querySelectorAll('.select .box').forEach(v => {
            // TODO target と box.innerText の半分以上・以下が一致しない時に条件を書き換える（ヒントは半分で割る）、完成したら click 時の処理を addEventHint 関数つかうようにしてみる
            if (false) {
                v.style.opacity = 0;
            }
        });
    });

    // 表示文言の設定
    document.querySelector('#main').innerText = '？？？';
}

/**
 * ヒント処理です
 * 
 * @param {Function} isIgnore 除外判定処理
 */
function addEventHint(isIgnore) {
    // 数字選択肢 box が除外対象のとき透明に設定
    document.querySelectorAll('.select .box').forEach(v => {
        if (isIgnore(v.innerText)) {
            v.style.opacity = 0;
        }
    });
}

/**
 * 数字が当たってるかの判定処理処理です
 * 
 * @param {HTMLElement} box 数字選択肢 box
 */
function isNumber(box) {
    //TODO 分岐条件を target と box.innerText を使って正解、大小を判定する
    if (false) {
        document.querySelector('#main').innerText = '正解！！またやる？';
    } else if (false) {
        document.querySelector('#main').innerText = `？ ${box.innerText}より小さいよ ？`;
    } else {
        document.querySelector('#main').innerText = `？ ${box.innerText}より大きいよ ？`;
    }
}
