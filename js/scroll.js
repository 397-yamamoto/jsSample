// スクロールイベント

const winHeight = document.body.clientHeight;
console.log(winHeight);

window.addEventListener("scroll", function () {
  //windowは省略可能でも見づらい
  // addEventListener("scroll", function () {
  const button = document.querySelector(".js-scrollTop");

  if (window.scrollY >= winHeight / 2) {
    button.style.opacity = "1";
    button.style.transition = ".3s";
    // button.style.cssText = "display:block;";
  } else {
    // button.style.display = "none";
    button.style.opacity = "0";
    button.style.transition = ".3s";
  }
});

const button = document.querySelector(".js-scrollTop");
button.addEventListener("click", function () {
  // window.scrollTO()メソッド！スクロール位置を操作できる。へ〜
  window.scrollTo({
    top: 0, //たて leftで横
    behavior: "smooth", //指定するとなめらなkになる
  });
});
