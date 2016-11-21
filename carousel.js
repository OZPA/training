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

  $pager : null,

  init : function (i_item){
    this.$carousel = document.getElementById('js-carousel');
    this.$carouselItem = document.getElementsByClassName(i_item);
    this.$carouselWidth = this.$carouselItem[0].offsetWidth;
    this.$carouselLength = this.$carouselItem.length;
    this.$carouselFullWidth = this.$carouselWidth * this.$carouselLength;
    this.$carouselEnd = this.$carouselFullWidth - this.$carouselWidth;
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

    // 最後のカルーセルまで到達したら最初の状態に戻す
    if(this._count > this.$carouselLength){
      this.$carousel.style.transform = "translateX(0px)";
      this._now = 0;
      this._count = 1;
    }

    Carousel.pagerCurrent();
  },

  onClickPrev : function (){
    this._now = this._now + this.$carouselWidth;
    this._count--;
    this.$carousel.style.transform = "translateX(" + this._now + "px)";

    // 最初のカルーセルでクリックしたら一番最後まで移動する
    if(this._count < 1){
      this.$carousel.style.transform = "translateX(-" + this.$carouselEnd + "px)";
      this._now = - this.$carouselEnd;
      this._count = this.$carouselLength;
    }

    Carousel.pagerCurrent();
  },

  timer : function (loopTime){
    var loopNext = this.onClickNext.bind(this);
    var autoLoop = function(){
      setTimeout(loopNext, loopTime);
      var timer_id = setTimeout(autoLoop, loopTime);
      if(this._count > this.$carouselLength){
        clearTimeout(timer_id);
      }
    };
    autoLoop();
  },

  pager : function (){
    var pager = document.getElementById('js-pager');

    // pagerアイテムを作成
    for (var i = 1; i <= this.$carouselLength; i++){
      var createItems = document.createElement('div');
      createItems.className = 'pager__item';
      pager.appendChild(createItems);
    }
    for (var j = 0; j <= this.$carouselLength; j++){
      var pagerItems = document.getElementsByClassName('pager__item')
      pagerItems[0].className = 'pager__item is-current';
    }
  },

  pagerCurrent : function (){
    for (var i = 0; i < this.$carouselLength; i++){
      var item = document.getElementsByClassName('pager__item');
      item[i].className = 'pager__item';
    }
    var pager_count = this._count - 1;
    item[pager_count].className = 'pager__item is-current';
  }
}

window.onload = function(){
  Carousel.init("js-carouselItem");
  Carousel.timer(3000);
  Carousel.pager();

};
