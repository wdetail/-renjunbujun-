$(function(){			
	$(".popup").hide();
	$(".others1").click(function(){
		var control = $(this).find(".popup");
		$(control).toggle(100)
	});			
})