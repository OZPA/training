var Carousel = {

  // 初期値を格納
  $carousel : null,
  $carouselItem : null,


  init : function (){
    this.$carousel = document.getElementById('js-carousel');
    this.$carouselItem = document.getElementsByClassName('js-carouselItem');
console.log($carousel);
console.log($carouselItem);
  }
}
window.onload = function(){
  Carousel.init();
};
