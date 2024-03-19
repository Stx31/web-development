<!DOCTYPE html>
<html>
<head>
    <title>Datos Recibidos</title>
</head>
<body>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
    $direccion = isset($_POST['direccion']) ? $_POST['direccion'] : '';
    $edad = isset($_POST['edad']) ? $_POST['edad'] : '';
    $casado = isset($_POST['casado']) ? 'Sí' : 'No';

    echo "<h2>Datos Recibidos:</h2>";
    echo "<p><strong>Nombre:</strong> $nombre</p>";
    echo "<p><strong>Dirección:</strong> $direccion</p>";
    echo "<p><strong>Edad:</strong> $edad</p>";
    echo "<p><strong>Casado:</strong> $casado</p>";
} else {
    echo "No se han recibido datos.";
}
?>

</body>
</html>
