<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Procesar Datos</title>
</head>
<body>
    <h2>Datos Recibidos</h2>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nombre = $_POST["nombre"];
        $direccion = $_POST["direccion"];
        $edad = $_POST["edad"];
        $casado = isset($_POST["casado"]) ? "Sí" : "No";
        
        echo "<p><strong>Nombre:</strong> $nombre</p>";
        echo "<p><strong>Dirección:</strong> $direccion</p>";
        echo "<p><strong>Edad:</strong> $edad</p>";
        echo "<p><strong>Casado:</strong> $casado</p>";
    } else {
        echo "<p>No se recibieron datos.</p>";
    }
    ?>
</body>
</html>
