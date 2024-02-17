<html>
			<head></head>
			<body>
			<script type="text/javascript">
			/*función para crear el objeto de AJAX que permite la conexión*/
			function getHTTPObject(){
			if (window.ActiveXObject)
			return new ActiveXObject("Microsoft.XMLHTTP");
			else if (window.XMLHttpRequest)
			return new XMLHttpRequest();
			else {
			alert("No soportado");
			return null;
			}
			}
			function pasaraPhp(){
			var valor1 = 5;
			var valor2 = 6;
			httpObject = getHTTPObject();
			if (httpObject != null) {
			/*abrimos la conexion AJAX con el Php enviándole las variables*/
			httpObject.open("GET", "suma.php?v1=" + valor1 + "&v2=" +valor2, true);
			httpObject.onreadystatechange = function()
			{
			if(httpObject.readyState == 4)
			/*cuando acabe de cargar suma.php*/
			{
			/*mostramos el contenido generado en suma.php*/
			alert(httpObject.responseText);
			}
			}
			httpObject.send(null);
			}
			}
			</script>
			<a href="#" onclick="pasaraPhp()">probar envío</a>
			/*Este enlace genera el evento que llama al AJAX*/
			</body>
			</html>