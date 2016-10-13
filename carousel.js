var Carousel = {

  $carouselWrap : null,
  $carouselItem : null,
  $prev : null,
  $next : null,
  carouselWidth : 0,
  _now : 0,

  init : function(i_item){
    this.$carouselWrap = document.getElementById('js-carousel');
    this.$carouselItem = document.getElementsByClassName(i_item);
    this.$prev = document.getElementById('js-prev');
    this.$next = document.getElementById('js-next');
    this.carouselWidth = this.$carouselItem[0].offsetWidth;
    this._now = 0;

    this.$next.addEventListener('click', this.moveNext.bind(this), false);
    this.$prev.addEventListener('click', this.movePrev.bind(this), false);
  },

  moveNext : function (){
    this._now = this._now - this.carouselWidth;
    this.$carouselWrap.style.transform = "translateX("+ this._now + "px)";
  },

  movePrev : function (){
    this._now = this._now + this.carouselWidth;
    this.$carouselWrap.style.transform = "translateX("+ this._now +"px)";
  }

};

window.onload = function(){
  Carousel.init('js-carouselItem');
};
