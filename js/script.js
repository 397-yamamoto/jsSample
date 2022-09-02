console.log("hello");
// a
{
  const a = document.querySelector(".js-Header__button");
  console.log(a);

  a.textContent = "じゃあこうしてみよう";
}

// b
{
  const b = document.querySelector(".Dom__image--01");

  console.log(b);
  b.width = 1000;
}

// c
{
  const c = document.querySelector(".Dom__image--02");
  console.log(c.dataset.id);
  console.log(c.dataset.userName);

  c.dataset.id = 555;
  c.dataset.userName = "taka";
}

// d
{
  const d = document.querySelector(".Dom__score");

  const score = d.dataset.score;
  console.log(score);

  d.dataset.score = 79;
  if (score >= 80) {
    d.style.color = "blue";
  }
}

// e
{
  const e = document.querySelector(".Dom__style--01");
  e.classList.remove("normal");
  e.classList.add("warning");

  //   ひっくり返してみると？
  e.classList.replace("warning", "normal");

  const style = getComputedStyle(e);
  console.log(style.color);
  console.log(style.fontSize);
}

// f
// prepend(),append(),before(),after()　がある。
{
  const f = document.createElement("p");
  console.log(f);
  f.textContent = "＋ 新しく追加だ";
  f.classList.add("Dom__add-hello");

  const f2 = document.querySelector(".Dom__add");
  //   後に追加
  f2.append(f);

  const f3 = document.querySelector(".Dom__add-hello");
  //   これさ、一度作った要素使うと、もう使えないんだね。
  //   だからクローン作らなきゃなのかーーい！

  const newf = f.cloneNode(true);
  f3.classList.replace("Dom__add-hello", "Dom__add-goodMorning");
  //   要素の後に追加
  f3.before(newf);
}

// g
// 削除
{
  const g = document.querySelector(".first");
  g.remove();

  const g2 = document.querySelector(".Dom__remove");
  let g3 = g2.children;
  //   childrenは配列でかえってくるのか〜〜

  for (i of g3) {
    i.style.color = "green";
    i.style.fontSize = "16px";
  }
}

// h
// 要素置換
{
  const h = document.querySelector(".Dom__replace");
  h.style.padding = "60px";

  const h3 = document.querySelector(".Dom__replace .first");

  const newh = document.createElement("p");
  newh.textContent = "あんぱん";

  h3.replaceWith(newh);
}

// event ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
// i
{
  const i = document.querySelector(".DOM__button");
  function alertMessage() {
    alert("ボタンをクリックしました");
  }
  i.addEventListener("click", alertMessage);

  i.removeEventListener("click", alertMessage);
}

// j
{
  const j = document.querySelector(".DOM__button2");
  j.addEventListener("click", () => {
    alert("ボタンをクリックしましたよ？気づいてますか??");
  });
}

// k
// clickイベント
{
  const k = document.querySelector(".DOM__button3");

  k.addEventListener("click", function () {
    console.log("クリックしました");
  });
}

// l
// inputイベント フォームの入力欄にデータが入力された時発生！
{
  const l = document.querySelector(".DOM__input");
  l.addEventListener("input", function (event) {
    const value = event.currentTarget.value;
    console.log(`入力内容：${value}`);
  });

  const m = document.querySelectorAll(".DOM__radio");
  for (let radio of m) {
    radio.addEventListener("input", function (event) {
      const value = event.currentTarget.value;
      console.log(`${value}がチェックされました`);
    });
  }

  const n = document.querySelectorAll(".DOM__checkbox");

  for (let check of n) {
    check.addEventListener("input", function (event) {
      const value = event.currentTarget.value;
      console.log(`${value}がチェックされました`);
    });
  }

  const o = document.querySelector(".select");
  o.addEventListener("input", function (event) {
    const value = event.currentTarget.value;
    console.log(`${value}が選択されました`);
  });
}

// p
// keyupイベント
{
  const p = document.querySelector(".DOM__key");
  p.addEventListener("keydown", function (event) {
    console.log(event.key);
  });
}

// q
// mousemoveイベント お絵描きグラフィックイベントで使えるよ
{
  const q = document.querySelector(".DOM__mouse");
  q.addEventListener("mousemove", function (event) {
    console.log(`MOVE: x=${event.offsetX},y=${event.offsetY}`);
  });

  q.addEventListener("mousedown", function (event) {
    console.log(`DOWN: x=${event.offsetX},y=${event.offsetY}`);
  });

  q.addEventListener("mouseup", function (event) {
    console.log(`UP: x=${event.offsetX},y=${event.offsetY}`);
  });
}

// r
// scrollイベント
{
  const r = document.querySelector(".DOM__scroll");

  for (let i = 0; i < 800; i++) {
    r.textContent += `テキスト${i}`;
  }
  window.addEventListener("scroll", function () {
    console.log(`スクロール量は${window.scrollY}pxです`);
  });
}

// イベントオブジェクトについて
// s
{
  // 一回だけなのね〜
  const s = document.querySelector(".DOM__button4");

  
  s.addEventListener("click", function (event) {
    const sButton = event.currentTarget;
    

    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }
    let num = getRandomIntInclusive(1, 9);
    let text;
    for(let i=1;i<=9;i++){
      (num===1)? text="天才やな！！！"
      :(num===2)? text="素晴らしいね！！"
      :(num===3)? text="神じゃん"
      :(num===4)? text="最高の1日を！"
      :(num===5)? text="わくわくっ✨"
      :(num===6)? text="全集中じゃないかすげーよ！"
      :(num===7)? text="ナイスアクション"
      :(num===8)? text="うおお！！すごい発見だ！"
      :text="世界のために最高の自分を発揮します…";
    }

    sButton.textContent = `自分よ、${text}`;
    
  });
}






//非同期処理だぜ！!
// t
{
  // ログの出力の仕方が違う。おお〜！
  function syncAlert(){
    alert("アラートを表示");
    console.log("ログを出力");
  }
  syncAlert();


  function asyncAlert(){
    setTimeout(()=>{
      alert("アラートを表示");
    },0);
    console.log("ログを出力");
  }
  asyncAlert();
}



