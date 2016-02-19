// var darkeners = ['body', '.wave2', '.wave3', '.x1', '.x2', '.x3', '.x4', '.x5'];
// var initDCs = darkeners.map(function(darkener) {
//   return $(darkener).css('background-color');
// });
var dark = false;

var bottom = innerHeight * 0.3;

for (var i = 0; i < 40; i++) {
  $('body').append($('<p class="star hidden">&#10023;</p>').css({
    "transform": 'rotate(' + Math.floor(Math.random() * 90) + 'deg)',
    "font-size": Math.floor(Math.random() * 40) + 'px',
    "top": Math.floor(Math.random() * bottom) + 'px',
    "left": Math.floor(Math.random() * innerWidth) + 'px'
  }));
}

$(document).mousemove(function(event) {
  //console.log(event.pageX, event.pageY);
  // if (event.pageX >= innerWidth * 0.2 && event.pageX <= innerWidth* 0.8) {
  //   var percentDarken =  50 * ((event.pageX / innerWidth) - 0.2);
  //   console.log('percentDarken', percentDarken);
  //   darkeners.forEach(function(darkener, i) {
  //     var darkenedColor = tinycolor(initDCs[i]).darken(percentDarken).toString();
  //     $(darkener).css({'background-color': darkenedColor});
  //     $(darkener + ':after').css({'background-color': darkenedColor})
  //   })
  // }
  if ((event.pageX >= innerWidth/2) && (dark === false)) {
    $('.cloud').addClass('darkCloud');
    $('.wave2').addClass('dwave2');
    $('.wave3').addClass('dwave3');
    $('body').addClass('dbody');
    $('.star').removeClass('hidden');
    dark = true;
  } else if ((event.pageX <= innerWidth/2) && (dark === true)) {
    $('.cloud').removeClass('darkCloud');
    $('.wave2').removeClass('dwave2');
    $('.wave3').removeClass('dwave3');
    $('body').removeClass('dbody');
    $('.star').addClass('hidden');
    dark = false;
  }
});