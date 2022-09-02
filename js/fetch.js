//   async　await

async function showJsonText(guestName) {
  // thenで繋げていた部分を　awaitを置いてる！　thenと同じ役割を持っている！えらい！
  // await　で非同期処理の実行を待機。
  // async　の中の関数でしか　awaitは使えない！

  guestName = "" || "ゲスト";

  const response = await fetch("https://397-yamamoto.github.io/jsSample/json/sample.json");
  const json = await response.json();
  const resultBox = document.querySelector(".Fetch__inner");
  resultBox.innerHTML = `${json.text}
  <p class="guestText">${guestName}さん、チャレンジして書いてみよう。</p>`;
}
showJsonText();

let guestName = "ゲスト";
let color = "";
console.log(guestName);
const entryButton = document.querySelector(".js-entry"); //ボタン

entryButton.addEventListener("click", () => {
  const nameIn = document.querySelector(".js-name"); //inputの中身
  const guestText = document.querySelector(".guestText");

  randomColor();
//   console.log(color); //色とれてる

  guestName = nameIn.value;
  //   console.log(nameIn.value);
  //   console.log(guestName);
  if (guestName.length === 0) {
    guestName = "ゲスト";
  }
  
  guestText.textContent = `${guestName}さん　you、やっちゃいなよ！！！！！！`;
  guestText.style.color=`${color}`;
//   console.log(guestText);

  nameIn.value = "";
  guestName = false;
});


async function randomColor() {
  const response = await fetch("https://397-yamamoto.github.io/jsSample/json/sample.json");
  const json = await response.json();

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  let num = getRandomIntInclusive(0, 2);
  color = json.color[num];
  //   console.log(color);
}
