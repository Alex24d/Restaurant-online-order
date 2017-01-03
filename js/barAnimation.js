$(function() {

  var $orderBar = $(".order-bar");
  var $barToggle = $orderBar.find(".order-bar-toggle");
  var $arrow = $(".order-bar-toggle i");
  var $menu = $(".container > .panel");
  var $afterPay = $("#after-pay");
  var $bookBtn = $(".btn-book");

  $barToggle.on("click", function(){
    // alert("Alert");
    if($orderBar.css("right") == "0px"){
      $orderBar.animate({"right": "-340px"}, 600);
      $menu.animate({"margin-right": "20px"}, 600);
      $arrow.removeClass("glyphicon-triangle-right");
      $arrow.addClass("glyphicon-triangle-left");
    } else {
      $orderBar.animate({"right": "0px"}, 600);
      $menu.animate({"margin-right": "250px"}, 600);
      $arrow.removeClass("glyphicon-triangle-left");
      $arrow.addClass("glyphicon-triangle-right");
    }

  });

  $afterPay.on("click", function(){
    alert("Thank you for choosing our restaurant!\nYour order has been placed successfuly.");
    
  });

  $bookBtn.on("click", function(){
    alert("Your booking has been successful. We are waiting for you!");

  });

});
