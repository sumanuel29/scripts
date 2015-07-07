
//se debe utilizar algun framework de JQUERY

//Atributo ref=true agregado dentro de la etiqueta <script> ubicada en el <head> de la pagina, con el se puede especificar 
//que el sera alctualizado al momento de cargar el DOM

//Ejemplo
<script ref="true" src="refrescarArchivosJs.js" type="text/javascript"></script>

//-----------------------------------------------------------------------------------

//Contenido del archivo refrescarArchivosJs.js

			function actualizarJs(opcion){

          //esta funcion se encarga de actualizar el archivo .js que queremos o todos
          
					$('script').each(function(entry){ 

						var refres = $(this).attr('ref');
						var url = null;

						url = $(this).attr('src');
						if(refres == "true" && opcion==false){

							$.getScript(url, function(data, textStatus, jqxhr) {
								console.log(url);
							});
						}else if(opcion==true){
							$.getScript(url, function(data, textStatus, jqxhr) {
								console.log(url);
							});
						}
						
					})

				refres = url= opcion = null;
			}

//-----------------------------------------------------------------------------------

//llamar el metodo al cargar el DOM, colocarlo despues de la etiqueta <body>

	<script type="text/javascript">

    $(document).ready(function () {

    //si se pasa el parametro false actulizara todos los .js, si es true solo el que tenga el atributo ref=true
		actualizarJs(false);

     });
    </script>
