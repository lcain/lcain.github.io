// $(document).ready(function () {
//   var bubble = function (event) {
//     // console.log(event.clientX, event.clientY)

//     var $b = $('<div/>').addClass('bubble');

//     var size = Math.random() * 4;

//     $b.css({
//       width: size + 'em',
//       height: size + 'em',
//       left: event.clientX,
//       top: event.clientY 
//     });

//     $('body').append($b);
//     //Clean up after ourselves.

//     // setTimeout( functionToCall, delayUntilCalled );

//     setTimeout(function() {


//       // .animate( objectOfChanges, timeOfAnimation, aSuccessFunction )

//       $b.animate({
//        top: -1000  //Dissapear off the top of the screen
//       }, 2000, function() {
//         $b.remove();
//       });

//     }, 1400);

//   };

//   $(window).on('mousemove', bubble);
// });

// My code below.

$(document).ready(function () {
  var bubble = function (event) {
    // console.log(event.clientX, event.clientY)

    var $b = $('<div/>').addClass('bubble');

    var size = Math.random() * 4;

    $b.css({
      width: size + 'em',
      height: size + 'em',
      left: event.clientX,
      top: event.clientY 
    });

    $('body').append($b);
    //Clean up after ourselves.

    // setTimeout( functionToCall, delayUntilCalled );

    setTimeout(function() {


      // .animate( objectOfChanges, timeOfAnimation, aSuccessFunction )

      $b.animate({
       top: -1000  //Dissapear off the top of the screen
      }, 2000, function() {
        $b.remove();
      });

    }, 1400);

  };

  $(window).on('mousemove', bubble);
});

//Make a div that appears on click of the aboutMe p tag