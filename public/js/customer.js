//jshint esversion:6

let linkClick = 1;
let attr = $("body").attr('dir');

$(".delBtn").click(function(){
  $(".delDiv").fadeIn(300);
  $(this).fadeOut(300);
});

$(".cancelBtn").click(function(){
  $(".delDiv").fadeOut(300);
   $(".delBtn").fadeIn(300);
});

$(".addLink").click(function(){
if(attr === "ltr") {
$(this).before("<div class='form-row addLink'><div class='col-md-3 mb-3'><label for='meetingDateInput'> Link name:</label> <input type='text' class='form-control' placeholder='Link Name' name='linkName"+linkClick+"' required></div><div class='col-md-6 mb-3'><label for='meetingTitleInput'>Add Link Here:</label><input type='text' class='form-control' placeholder='Link' name='linkLink"+linkClick+"' required></div></div>");
} else{
  $(this).before("<div class='form-row addLink'><div class='col-md-3 mb-3'><label for='meetingDateInput'> תאור לינק:</label> <input type='text' class='form-control' placeholder='Link Name' name='linkName"+linkClick+"' required></div><div class='col-md-6 mb-3'><label for='meetingTitleInput'>הוסף לינק פה:</label><input type='text' class='form-control' placeholder='Link' name='linkLink"+linkClick+"' required></div></div>");
}
linkClick++;
});


$("saveMeet").click(function(){
  linkClick = 1;
});
