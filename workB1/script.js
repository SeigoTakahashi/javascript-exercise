'use strict';

// じゃんけん配列（画像ファイル名の拡張子なし）
const janken = ['j_go', 'j_ch', 'j_pa'];

/**
 * じゃんけん開始の処理です
 */
function playJanken() {
    // PCのじゃんけん pc-hand にアニメーション追加(クラス追加)
    document.getElementById('pc-hand').classList.add('rand');
    // 結果 result に文字列を設定
    document.getElementById('result').innerText = '結果はいかに？？'
}

/**
 * じゃんけん選択時の処理です
 * コメントの処理を追加して処理を完成させよう
 * 
 * @param {String} hand じゃんけんの手（グー:j_go , チョキ:j_ch , パー:j_pa）
 */
function selectHand(hand) {
    // PCのじゃんけん pc-hand からアニメーション削除 (クラス削除) ex) classList.remove(クラス名);
    document.getElementById('pc-hand').classList.remove('rand');
    // 変数 pcHand (PCのじゃんけんの手) を 配列 janken より設定 (0から2の乱数を添え字にする)
    let rand = Math.floor(Math.random() * 3);
    let pcHand = janken[rand];
    // PCのじゃんけん pc-hand の背景画像に 変数 pcHand の画像を設定 (url(ファイルパス), pcHand は拡張子なしファイル名なので拡張子は文字列で追加)
    document.getElementById('pc-hand').style.backgroundImage = `url(./${pcHand}.png)`;
    // if 文の条件を追加
    // - hand が選んだ手, pcHand がPCの手の変数で値には 配列 janken のいずれかが入る
    // - かちの条件は配列を見ると次の要素に勝つ並びになっている(最後は 0 の要素に勝つ)
    // - 配列から要素の位置を取得する方法は 配列.indexOf(探したい要素) になる 
    //   #ex) janken.indexOf('j_go'); // 0 になる
    //
    document.getElementById('result').innerText = 'あいこ';
    if (hand == pcHand) {
        document.getElementById('result').innerText = 'あいこ';
    } else if ((janken.indexOf(hand) + 1) % 3 == janken.indexOf(pcHand)) {
        document.getElementById('result').innerText = 'かち';
    } else {
        document.getElementById('result').innerText = 'まけ';
    }
}