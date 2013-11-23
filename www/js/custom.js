
$(document).ready(function(){

$(".td").click(function(){
	
	var id = $(this).siblings(".active").attr("id");
	var id2 = $(this).attr("id");
	
	$("#"+id).removeClass("active");
	
	$(this).addClass("active");
	
	if(id2 == "indirimbo-p"){
			$("#pl").remove();
			$("#playlist").hide();
			$("#abahanzi").hide();
			$("#shakisha").hide();
			$("#home").show();
			
	}else if(id2 == "abahanzi-p"){
			$("#pl").remove();
			$("#playlist").hide();
			$("#home").hide();
			$("#shakisha").hide();
			$("#abahanzi").show();
	}
	else if(id2 == "shakisha-p"){
			$("#pl").remove();
			$("#playlist").hide();
			$("#home").hide();
			$("#abahanzi").hide();
			$("#shakisha").show();
	}
});
	

$(".plythis").live('click', function() {
		var id = $(this).attr("id");
		$("#abahanzi").hide();
		$("#shakisha").hide();
		$("#home").hide();
		$("#playlist").show();
		$("#pl").show();
		callAjax('#pl',id);
		
	});
	
$("#waveform").live('click', function() {
		var id = $(this).attr("id");
		$("#home").hide();
		$("#abahanzi").hide();
		$("#shakisha").hide();
		$("#playlist").show();
		$("#pl").show();
		//callAjax('#pl',id);
		
});
	
	
	
	
function callAjax(div,cmd){
	 $.ajax({
	 url: remote + "playlists.php",
     data:{
               'action':'do_ajax',
               'fn':'_call',
               'count':'p',
			   'p': cmd
               },
          		success:function(data){
				
				$("#playlist").html(data);
			}
		});
}


});


function loading(div){
	$(div).html('');
	$(div).html('<img src="'+web+'images/loading.gif" width="20">');
}





/*
 <ol class="rectangle-list" id="playlist"></ol>
    <script type="text/javascript">
   	$(document).ready(function(){
    $("#pl").load( remote + "playlists.php?p="+hash[0]);
   	});
	</script>
   <div id="pl" style="display:none"></div>*/