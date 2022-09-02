// メモアプリ

// console.log(newmemoIn.value);

// クリックイベント
const addmemoButton = document.querySelector(".js-addmemo");
const memoSample = document.querySelector(".js-memoSample");

addmemoButton.addEventListener("click", function () {
  const newmemoIn = document.querySelector(".js-newmemo"); //メモの中身

  const newmemo = document.createElement("li");
  newmemo.textContent = newmemoIn.value;
  newmemo.classList.add("memo-item");

  const memoList = document.querySelector(".memo-list");
  memoList.append(newmemo);

  newmemoIn.value = ""; //これ回答見てやった！
  memoSample.remove();
});
