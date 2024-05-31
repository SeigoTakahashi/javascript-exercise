// box 色クラス
const boxColorClass = ['box-white', 'box-black'];
// 新規問題を設定
newQuestion();
// box にイベント設定
document.querySelectorAll('.box').forEach(b => b.addEventListener('click', () => changeBox(b)));

////////////////////////////////////////////////////////////////////////////////////////
// ここから下にある TODO コメントの部分を追記・書き換えながら完成させよう
////////////////////////////////////////////////////////////////////////////////////////

/**
 * 新規問題の設定します
 */
function newQuestion() {
    // 結果文言の初期化
    document.getElementById('result').innerText = 'できるかな．．．';
    // box の白黒を初期化
    // box の白黒を初期化	// box の白黒を初期化
    document.querySelectorAll('.box').forEach(b => {
        // box に設定してある色クラスを全て外す	
        // TODO box に設定してある色クラスを全て外す（設定してあるしてないに関わらず DOM.classList から remove）
        boxColorClass.forEach(color => {
            if (b.classList.contains(color)) {
                b.classList.remove(color);
            }
        });

        // box に色クラスを乱数を使って設定する
        let rand = Math.floor(Math.random() * 2);
        b.classList.add(boxColorClass[rand]);

    });

}
/**
 * box と上下左右の box を変更します
 * 変更後に全ての box が白になってるかを確認します
 * 
 * @param {HTMLElement} box 変更する中心のbox
 */
function changeBox(box) {
    // TODO box に設定してある色クラスを変更する（DOM.classList の toggle を使うとなければ追加、あれば削除になる）
    boxColorClass.forEach(v => box.classList.toggle(v));
    // TODO 上下左右の box に設定してある色クラスを変更する（html を見て box の id に着目）

    let id = box.id;
    let row = parseInt(id.charAt(0));
    let col = parseInt(id.charAt(1));

    let topBox = document.getElementById(`${row - 1}${col}`);
    let bottomBox = document.getElementById(`${row + 1}${col}`);
    let leftBox = document.getElementById(`${row}${col - 1}`);
    let rightBox = document.getElementById(`${row}${col + 1}`);

    if (topBox) {
        boxColorClass.forEach(color => {
            topBox.classList.toggle(color);
        });
    }
    if (bottomBox) {
        boxColorClass.forEach(color => {
            bottomBox.classList.toggle(color);
        });
    }
    if (leftBox) {
        boxColorClass.forEach(color => {
            leftBox.classList.toggle(color);
        });
    }
    if (rightBox) {
        boxColorClass.forEach(color => {
            rightBox.classList.toggle(color);
        });
    }

    // 条件を全ての box に白のクラスが入ってるかで判定する
    let allWhite = true;
    document.querySelectorAll('.box').forEach(b => {
        if (!b.classList.contains('box-white')) {
            allWhite = false;
        }
    });

    if (allWhite) {
        document.getElementById('result').innerText = '全部、白！クリア！！！！！';
    } else {
        document.getElementById('result').innerText = 'できるかな．．．';
    }
}
