<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['nombre'])) {
        $nombre = htmlspecialchars($_POST['nombre']);
        echo "Hola, $nombre. Los datos fueron recibidos correctamente por el servidor.";
    } else {
        echo "No se recibieron datos.";
    }
} else {
    echo "Método no permitido.";
}
?>
