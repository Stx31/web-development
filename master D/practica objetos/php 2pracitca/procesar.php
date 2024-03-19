<!DOCTYPE html>
<html>
<head>
    <title>Procesar</title>
</head>
<body>
    <h2>Datos recibidos</h2>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nombre = $_POST["nombre"];
        $direccion = $_POST["direccion"];
        $edad = $_POST["edad"];
        $casado = isset($_POST["casado"]) ? "Sí" : "No";
        
        echo "<p>Nombre: $nombre</p>";
        echo "<p>Dirección: $direccion</p>";
        echo "<p>Edad: $edad</p>";
        echo "<p>Casado: $casado</p>";
    }
    ?>
</body>
</html>
