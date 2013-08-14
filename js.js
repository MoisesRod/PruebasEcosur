jQuery(document).ready(function() {
	jQuery("#evalua").on("click", function(){
		if(jQuery("#evalua").val()=="si"){
			jQuery("#evalua").val("no");
			jQuery("#leyendo").html("te vas");	
		}
		else{ jQuery("#evalua").val("si");
				jQuery("#leyendo").html("te quedas");	
	
		}
	});
	
	jQuery("#dice").on("click", function(){
     alert("estado: " + $("#evalua").val());
		if(jQuery("#evalua").val()=="si"){
    		jQuery("#dice").val("estado del boton 1");
			jQuery("#estado").html("si");	
	}
	else{ jQuery("#evalua").val("no");
			jQuery("#estado").html("no");
	
		}	
	});
	
	
	jQuery(".botones").on("click", function(){	
		if(jQuery("#leyendo").hasClass("evalua"))
		jQuery("#leyendo").removeClass("evalua");
		 else jQuery("#leyendo").addClass("evalua");
		
	});
		jQuery(".ejecutar").on("click", function(){
		suma();
		});
		
function suma(){
var total=0;
		jQuery(".suma").each(function(){			 
		 total+=parseFloat(jQuery(this).val()); 		     
		 jQuery("#total").html(total);
		});
}

jQuery(".suma").change(function () {    
    suma(); 
    });
});
