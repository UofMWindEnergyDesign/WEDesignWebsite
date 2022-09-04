window.jQuery = window.$ = require( "jquery" );
require( "velocity-animate/velocity.js" );
require( "lazysizes" );
require( "lazysizes/plugins/unveilhooks/ls.unveilhooks.js" );

$(document).ready(function () {
  $(window).on('load scroll', function () {
    var scrolled = $(this).scrollTop();
    // $('#title').css({
    //   'transform': 'translate3d(0, ' + -(scrolled * 0.2) + 'px, 0)', //20% Scroll rate
    //         'opacity': 1 - scrolled / 400 //Fade out 400px from the top
    // });
    $('#parallax').css('transform', 'translate3d(0, ' + -(scrolled * 0.25) + 'px, 0)');
  });
});