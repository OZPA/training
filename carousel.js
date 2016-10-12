
var $carouselItem = document.getElementsByClassName('js-carousel');
var $prev = document.getElementById('js-prev')
var $next = document.getElementById('js-next')

carousel();

function carousel(){

  slide();

  function slide(){
    $next.addEventListener('click', moveNext);
    $prev.addEventListener('click', movePrev);

    function moveNext(){
      for(var i = 0; $carouselItem.length > i; i++){
        $carouselItem[i].classList.add('moveNext');
        $carouselItem[i].classList.remove('movePrev');
      };
    };

    function movePrev(){
      for(var i = 0; $carouselItem.length > i; i++){
        $carouselItem[i].classList.add('movePrev');
        $carouselItem[i].classList.remove('moveNext');
      };
    };

  };
};
