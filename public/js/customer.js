//jshint esversion:6

$(".delBtn").click(function(){
  $(".delDiv").fadeIn(300);
  $(this).fadeOut(300);
});

$(".cancelBtn").click(function(){
  $(".delDiv").fadeOut(300);
   $(".delBtn").fadeIn(300);
});
