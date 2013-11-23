
$(document).ready(function(){

$(".td").click(function(){
	
	var id = $(this).siblings(".active").attr("id");
	var id2 = $(this).attr("id");
	
	$("#"+id).removeClass("active");
	
	$(this).addClass("active");
	
	if(id2 == "indirimbo"){
			$("#pl").remove();
			$("#playlist").hide();
			$("#home").show();
			
	}
	
	
	
	
	});
	

$(".plythis").live('click', function() {
		var id = $(this).attr("id");
		
		$("#home").hide();
		$("#playlist").show();
		$("#pl").show();
		callAjax('#pl',id);
		
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