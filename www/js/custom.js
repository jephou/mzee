
$(document).ready(function(){

$(".td").click(function(){
	
	var id = $(this).siblings(".active").attr("id");
	
	if($(this).hasClass("active")){
		return false;
		}
	$("#"+id).removeClass("active");
	
	$(this).addClass("active");
	
	alert(id);
	});
	
});