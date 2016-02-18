

  // Contact and About Me Pop up

  var contact = function(){
    $('.popup-with-zoom-anim').magnificPopup({
      type: 'inline',

      fixedContentPos: false,
      fixedBgPos: true,

      overflowY: 'auto',

      closeBtnInside: true,
      preloader: false,
      
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in'
    });
  }

 var shark = function(){
  $('#shark').append('<img src="/assets/sharkfin2.png" class="shark2">');
 }


setTimeout(function(){
    $('#arrowkeys').addClass('hiding');
}, 3000);