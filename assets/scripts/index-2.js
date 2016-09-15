'use strict';

console.log("from index 2");

$(function() {
  $('.scroll-to').on('click', function(){
      let scrollTo = $(this).attr('href');
      $('html, body').animate({
          scrollTop: parseInt($(scrollTo).offset().top-10)
      }, 500);
  });
});
