var Carousel = {

  // 初期値を格納
  $carousel : null,
  $carouselItem : null,

  // カルーセル1つの横幅
  $carouselWidth : null,

  // カルーセルの個数
  $carouselLength : null,

  // カルーセル全ての横幅
  $carouselFullWidth : null,

  // 最後のカルーセルの位置
  $carouselEnd : null,

  // カルーセルの移動距離
  _now : 0,

  // 現在地を数値で取得
  _count : 1,

  // controller
  $next : null,
  $prev : null,

  pager : null,

  init : function (){
    this.$carousel = document.getElementById('js-carousel');
    this.$carouselItem = document.getElementsByClassName('js-carouselItem');
    this.$carouselWidth = this.$carouselItem[0].offsetWidth;
    this.$carouselLength = this.$carouselItem.length;
    this.$carouselFullWidth = this.$carouselWidth * this.$carouselLength;
    this.$carouselEnd = this.$carouselFullWidth - this.$carouselWidth;
    console.log(this.$carouselFullWidth);
    this._now = 0;
    this._count = 1;

    this.$next = document.getElementById ('js-next');
    this.$prev = document.getElementById ('js-prev');

    this.$next.addEventListener("click", this.onClickNext.bind(this) , false);
    this.$prev.addEventListener("click", this.onClickPrev.bind(this) , false);
  },

  onClickNext : function (){
    this._now = this._now - this.$carouselWidth;
    this._count++;
    this.$carousel.style.transform = "translateX(" + this._now + "px)";
    console.log(this._count);

    // 最後のカルーセルまで到達したら最初の状態に戻す
    if(this._count > this.$carouselLength){
      this.$carousel.style.transform = "translateX(0px)";
      this._now = 0;
      this._count = 1;
    }
  },

  onClickPrev : function (){
    this._now = this._now + this.$carouselWidth;
    this._count--;
    this.$carousel.style.transform = "translateX(" + this._now + "px)";
console.log(this._count);
console.log(this._now);
    // 最初のカルーセルでクリックしたら一番最後まで移動する
    if(this._count < 1){
      this.$carousel.style.transform = "translateX(-" + this.$carouselEnd + "px)";
      this._now = - this.$carouselEnd;
      this._count = this.$carouselLength;
    }
  },

  pager : function (){

  }
}
window.onload = function(){
  Carousel.init();

};
