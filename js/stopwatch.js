{
  console.log("読み込みテストです");
}

// クラスについて
{
  class TextDecorator {
    // コンストラクタ newされた時に呼ばれる
    constructor(name) {
      console.log("コンストラクタが呼ばれました");
      this.name = name;
    }

    // メソッド
    decorate() {
      console.log(`decorateが呼ばれました ${this.name}`);
      return `■■■ ${this.name} ■■■`;
    }
  }

  //
  // thisについて
  const td = new TextDecorator("JS! "); //newでインスタンス化=新しいオブジェクト作る
  console.log(td.name);
  let str = td.decorate();
  console.log(str);
}

//
// リファクタリングし、クラスを適用する
{
  class StopWatch {
    constructor(options = {}) {
      //オプションが渡される>インスタンス変数(this.optionのこと)に保持
      this.options = options;
    }

    init() {
      //dom要素を初期化してイベントハンドラを仕掛ける　作った処理が入ってる
      let { color, backgroundColor } = this.options;
      color = color || "lightblue";
      backgroundColor = backgroundColor || "black";

      const display = document.querySelector(".display");
      display.style.color = color;
      display.style.backgroundColor = backgroundColor;
      // let log = document.querySelector(".js-log");
      this.logElm = document.querySelector(".js-log"); //インスタンス変数にlogを入れた　他でも使いたいから。あとこれ初期化される

      let timer = null;
      const startButton = document.querySelector(".js-start");
      startButton.addEventListener("click", () => {
        // console.log("start");
        if (timer === null) {
          let seconds = 0;
          display.innerText = seconds;

          timer = setInterval(function () {
            seconds++;
            display.innerText = seconds;
            // console.log(seconds);
          }, 1000);

          // console.log("start" + timer);
          this.addMessage(" 開始");
        }
      });

      const stopButton = document.querySelector(".js-stop");
      stopButton.addEventListener("click", () => {
        // console.log("stop");
        if (timer !== null) {
          // console.log("stop" + timer);
          clearInterval(timer);
          timer = null;

          this.addMessage(" 終了");
        }
      });
    }

    addMessage(message) {
      //一つのメソッドとした
      let el = document.createElement("p");
      let now = new Date();

      el.innerText =
        now.getHours() +
        "時" +
        now.getMinutes() +
        "分" +
        now.getSeconds() +
        "秒" +
        message;
      el.classList = ["message"];
      if(message===" 開始"){
        el.style.color="#8b8b8b";
      }
      this.logElm.prepend(el); //インスタンス変数を使った
    }
  }

  // オプション準備
  const options = {
    color: "#86ff86",
    backgroundColor: "#333",
  };

  const stopWatch = new StopWatch(options); //optionsのオブジェクトを渡す
  stopWatch.init(); //initを呼び出す
}
