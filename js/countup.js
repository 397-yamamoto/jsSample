// カウントアップ！
const counter = document.querySelector(".js-counter");
// console.log(parseInt(counter.textContent)+1);
// counter.textContent = parseInt(counter.textContent) + 1;

const countupButton = document.querySelector(".js-countup");
countupButton.addEventListener("click", function () {
  const counter = document.querySelector(".js-counter");
  let flag = false;
  let countNum = parseInt(counter.textContent) + 1;

  counter.textContent = countNum;

  if (countNum === 10) {
    alert("ボタンは10まで数えられます");
  } else if (countNum > 10) {
    // countNum = 10;
    flag = true;
  }

  if (flag) {
    countNum = 0;
    counter.textContent = countNum;
  }
});
