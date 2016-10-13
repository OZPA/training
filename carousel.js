window.onload = function(){

  var $carouselItem = document.getElementsByClassName('js-carouselItem');
  var $prev = document.getElementById('js-prev')
  var $next = document.getElementById('js-next')

  carousel();

  function carousel(){

    slide();

    function slide(){
      $next.addEventListener('click', moveNext);
      $prev.addEventListener('click', movePrev);

      var carouselWidth =  ($carouselItem[0].currentStyle || document.defaultView.getComputedStyle($carouselItem[0], '')).width;
      console.log(carouselWidth);

      function moveNext(){
        for(var i = 0; $carouselItem.length > i; i++){
          $carouselItem[i].style.transform = "translateX("+ carouselWidth +")";
        };
      };

      function movePrev(){
        for(var i = 0; $carouselItem.length > i; i++){
          $carouselItem[i].style.transform = "translateX(-"+ carouselWidth +")";
        };
      };
    };
  };
};
