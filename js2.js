jQuery(document).ready(function() {
		jQuery(".obtenerdatos").on("click", function(){
		var id=jQuery(this).attr("id");
		
		 if(id=="nombre"){
			 traerdatos("nombre.php");
		 }
			 else{
				 traerdatos("edad.php");
			
		}	
		
		});
		
		function traerdatos(ruta){
			
			jQuery.post('http://localhost/botonjquery/'+ruta,{ action:'salida'},			
            function(data){
				alert("hola");
			///jQuery(".datos").html(data.valor)
			},"json");
			
		}
});
