{
  console.log("読み込みテストです");
}
//
//
// フォトビュアー
{
  class PhotoViewer {
    constructor(rootElm, images, list, time, nextButton,prevButton) {
      //クラスの外から渡せるものをここに！
      this.rootElm = rootElm;
      this.images = images;
      this.currentIndex = 0;
      this.imageElm = list;
      this.time = time || 3000;
      this.nextButton = nextButton;
      this.prevButton=prevButton;
    }
    init() {
      
      this.nextButton.addEventListener("click", () => {
        this.next();
      });
      
      this.prevButton.addEventListener("click", () => {
        this.prev();
      });

      this.renderImageUrls(); //urlたち

      this.updatePhoto();
      this.rootElm.classList.add("screenWidth");
    }

    clickAction() {
      this.nextButton.addEventListener("click", () => {
        this.next();
      });
      this.prevButton.addEventListener("click", () => {
        this.prev();
      });

      this.renderImageUrls(); //urlたち

      this.updatePhoto();
      this.rootElm.classList.add("screenWidth");
    }

    updatePhoto() {
      const frameElm = this.rootElm.querySelector(".js-frame");
      const image = this.images[this.currentIndex];
      const imageIndex = this.currentIndex + 1;

      frameElm.innerHTML = `
        <div class="currentImage">
          <p style="font-size:16px; line-height:4;text-align: center;">${imageIndex}枚目</p>
          <img src="${image}">
        </div>
      `;
      this.startTimer();
    }

    startTimer() {
      if (this.timerkey) {
        clearTimeout(this.timerkey);
      }

      this.timerkey = setTimeout(() => {
        this.next();
      }, this.time);
    }

    renderImageUrls() {
      // const imagesElm = document.querySelector(".js-images");
      const imagesElm = this.imageElm;
      let imageUrlsHtml = "";
      for (const image of this.images) {
        imageUrlsHtml += `<li><a href="${image}" target="_blank">${image}</a></li>`;
      }
      imagesElm.innerHTML = imageUrlsHtml;
    }

    next() {
      const lastIndex = this.images.length - 1;
      this.currentIndex === lastIndex //循環
        ? (this.currentIndex = 0)
        : this.currentIndex++;
      this.updatePhoto();
    }

    prev() {
      const lastIndex = this.images.length - 1;
      this.currentIndex === 0 //循環
        ? (this.currentIndex = lastIndex)
        : this.currentIndex--;

      this.updatePhoto();
    }
  } //クラス終わり

  const images = [
    "http://127.0.0.1:5500/img/01.jpg",
    "http://127.0.0.1:5500/img/02.jpg",
    "http://127.0.0.1:5500/img/03.jpg",
    "http://127.0.0.1:5500/img/04.jpg",
  ];

  new PhotoViewer(
    document.getElementById("js-photoViewer"),
    images,
    document.getElementById("js-images"),
    5000,
    document.querySelector(".js-nextButton"),
    document.querySelector(".js-prevButton")
  ).init(); //おおおおおお！すげーー！！！

  new PhotoViewer(
    document.getElementById("js-photoSlider"),
    images,
    document.getElementById("js-list"),
    10000,
    document.querySelector(".js-nextButton2"),
    document.querySelector(".js-prevButton2")
  ).init();
} //終わり 2個目クリックできるようにしたぜ！
