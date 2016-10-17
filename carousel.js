var Carousel = {

  $carouselWrap : null,
  $carouselItem : null,
  $prev : null,
  $next : null,
  carouselWidth : 0,
  _now : 0,
  _count : 0,

  init : function(i_item){
    this.$carouselWrap = document.getElementById('js-carousel');
    this.$carouselItem = document.getElementsByClassName(i_item);
    this.carouselLength = this.$carouselItem.length;
    this.$prev = document.getElementById('js-prev');
    this.$next = document.getElementById('js-next');
    this.carouselWidth = this.$carouselItem[0].offsetWidth;
    this._now = 0;
    this.count = 0;
    this.carouselWrapWidth = this.carouselWidth * this.carouselLength;

    this.$next.addEventListener('click', this.onClickNext.bind(this), false);
    this.$prev.addEventListener('click', this.onClickPrev.bind(this), false);

  },

  onClickNext : function (){
    this._now = this._now - this.carouselWidth;
    this.count++;

    if(this.count != this.carouselLength) {
      this.$carouselWrap.style.transform = "translateX("+ this._now + "px)";
    } else {
      this.$carouselWrap.style.transform = "translateX(0px)";
      this.count = 0;
      this._now = 0;
    }
  },

  onClickPrev : function (){
    this._now = this._now + this.carouselWidth;
    var lastItem = this.carouselWrapWidth - this.carouselWidth
    this.count--;

    if(this.count = -1) {
      this.$carouselWrap.style.transform = "translateX(-"+ lastItem +"px)";
      this.count = this.carouselLength -1;
      this._now = this.carouselWrapWidth;
    } else {
      this.$carouselWrap.style.transform = "translateX("+ this._now + "px)";
    }
  }

  //----------------------------------------------
  // timer
  // //----------------------------------------------
  timer : function(loopTime){
    var loopNext = this.onClickNext.bind(this);
    var counter = 2;
    var carouselLength = this.$carouselItem.length;

    var autoLoop = function(){
      var count = counter++;
      setTimeout(loopNext, loopTime);
      var timer_id = setTimeout(autoLoop, loopTime);
      if(count == carouselLength){
        clearTimeout(timer_id);
      }
    };
    autoLoop();
  },

  //----------------------------------------------
  // loop
  //----------------------------------------------
  // loop : function(){
  //
  //   if(this.count == 1){
  //     this.$prev.addEventListener('click', this.onClickLast);
  //   }
  //   function onClickLast (){
  //     this.$carouselWrap.style.transform = "translateX("+ this.carouselWrapWidth +"px)";
  //   };
  //
  //   if(this.count == this.carouselLength) {
  //     this.$next.addEventListener('click', this.onClickFirst);
  //   }
  //   function onClickFirst (){
  //     this.$carouselWrap.style.transform = "translateX(0px)";
  //   };
  //
  //
  // }

};

window.onload = function(){
  Carousel.init('js-carouselItem');
  // Carousel.timer(2000);
};
