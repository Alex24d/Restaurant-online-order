$(function(){

  var $scroll = $(".categories li a");
  var $btnScroll = $(".btn-scroll");

  $scroll.click(function(){
    $('html, body').animate({
        scrollTop: $($(this).attr("data-cat")).offset().top - 55
    }, 1500);
  });

  $btnScroll.click(function(){
    $('html, body').animate({
        scrollTop: $($(this).attr("data-id")).offset().top - 55
    }, 1500);
  });

});
