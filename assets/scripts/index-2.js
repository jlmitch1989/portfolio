'use strict';

$(function() {
  $('.scroll-to').on('click', function(){
      let scrollTo = $(this).attr('href');
      $('html, body').animate({
          scrollTop: parseInt($(scrollTo).offset().top)
      }, 2000);
  });
});
