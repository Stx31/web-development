<?php
$data = "IP del cliente: " . $_SERVER['REMOTE_ADDR'] . "\n";
$data .= "Fecha y hora: " . date("Y-m-d H:i:s") . "\n";
$data .= "Puerto del cliente: " . $_SERVER['REMOTE_PORT'] . "\n";
$data .= "URL de acceso: " . $_SERVER['REQUEST_URI'] . "\n";

$filename = 'registro_accesos.txt';

$file = fopen($filename, 'a');

if ($file) {
    fwrite($file, $data);
    fclose($file);
    echo "Los datos se han guardado correctamente.";
} else {
    echo "Error al intentar abrir el archivo.";
}
?>
