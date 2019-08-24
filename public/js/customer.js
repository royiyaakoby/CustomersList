//jshint esversion:6

let linkClick = 1;
let attr = $("body").attr('dir');
// let try1 =  document.getElementsByClassName("linkName")
// let try1 =  document.getElementsByClassName("linkName")



$(".delBtn").click(function(){
  $(".delDiv").fadeIn(300);
  $(this).fadeOut(300);
});

$(".cancelBtn").click(function(){
  $(".delDiv").fadeOut(300);
   $(".delBtn").fadeIn(300);
});

// $(".btnRemEdit").click(function(){
//   $("."+this.value).remove();
// });


$(".addLink").click(function(){
if(attr === "ltr") {
$(this).before("<div class='form-row addLink"+linkClick+"'><div class='col-md-3 mb-3'><label> Link name:</label> <input type='text' class='form-control' placeholder='Link Name' name='links["+linkClick+"][linkName]' ></div><div class='col-md-6 mb-3'><label >Add Link Here:</label><input type='text' class='form-control' placeholder='Link' name='links["+linkClick+"][linkLink]'></div><button type='button' class='btn btn-success btnRem' value='"+linkClick+"'>-</button></div>");

} else if (attr === "rtl"){
$(this).before("<div class='form-row addLink"+linkClick+"'><div class='col-md-3 mb-3'><label> שם הלינק:</label> <input type='text' class='form-control' placeholder='Link Name' name='links["+linkClick+"][linkName]' ></div><div class='col-md-6 mb-3'><label >העתק לינק לכאן:</label><input type='text' class='form-control' placeholder='Link' name='links["+linkClick+"][linkLink]'></div><button type='button' class='btn btn-success btnRem' value='"+linkClick+"'>-</button></div>");}
// $(this).before("<button type='button' class='btn btn-danger remove"+linkClick+"'>-</button>");
$(".btnRem").css({
  "margin-left": "10px",
  "margin-top": "35px",
  "padding-bottom":"13px",
  "height": "35px",
  "width": "40px",
  "border-radius":"30%",
  "text-align": "center"
});
linkClick++;
$(".btnRem").click(function(){
$(".addLink"+this.value).remove();
});

});


 let linkEditName=()=>{
  for (let i=0; i< linkName.length; i++ ){
    linkDiv[i].className +=" addLink"+linkClick;
    linkName[i].name = "links["+linkClick+"][linkName]";
      linkLink[i].name = "links["+linkClick+"][linkLink]";
      btnRemEdit[i].value = linkClick;
    linkClick++;
  }
};

$(".btnRemEdit").click(function(){
$(".addLink"+this.value).remove();
});
