$(document).ready(function() {
  	$(".about").mouseenter(function() {
  	$(this).css("background-color","white");
	$(this).css("text-align","center");
	$(this).css("font-weight","bold");
  	});
});
$(".about").mouseleave(function(){
    $(this).css("background-color", "#fff2cc");
	$(this).css("text-align","left");
	$(this).css("font-weight","normal");
});