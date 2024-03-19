<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Selección de País y Provincia</title>
    <script>
        function obtenerProvincias() {
            var paisSeleccionado = document.getElementById("pais").value;
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    document.getElementById("provincias").innerHTML = xhr.responseText;
                }
            };
            xhr.open("GET", "obtener_provincias.php?pais=" + paisSeleccionado, true);
            xhr.send();
        }
    </script>
</head>
<body>
    <h2>Selecciona un país:</h2>
    <select id="pais" onchange="obtenerProvincias()">
        <option value="1">País 1</option>
        <option value="2">País 2</option>
        <!-- Agrega más opciones según tus necesidades -->
    </select>

    <h2>Provincias:</h2>
    <div id="provincias"></div>
</body>
</html>
