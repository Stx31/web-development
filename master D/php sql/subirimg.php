<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["imagen"])) {
    $nombre_archivo = $_FILES["imagen"]["name"];
    $tipo_archivo = $_FILES["imagen"]["type"];
    $tamano_archivo = $_FILES["imagen"]["size"];
    $temp_archivo = $_FILES["imagen"]["tmp_name"];

    // Valida si es una imagen
    $permitidos = array("image/jpg", "image/jpeg", "image/png", "image/gif");
    if (in_array($tipo_archivo, $permitidos)) {
        
        $directorio_destino = "imagenes/";
        $ruta_destino = $directorio_destino . $nombre_archivo;

        // les da el tamaño
        list($ancho_original, $alto_original) = getimagesize($temp_archivo);
        $nuevo_ancho = 150;
        $factor = $nuevo_ancho / $ancho_original;
        $nuevo_alto = $alto_original * $factor;

        $imagen_redimensionada = imagecreatetruecolor($nuevo_ancho, $nuevo_alto);

        switch ($tipo_archivo) {
            case "image/jpg":
            case "image/jpeg":
                $imagen_original = imagecreatefromjpeg($temp_archivo);
                break;
            case "image/png":
                $imagen_original = imagecreatefrompng($temp_archivo);
                break;
            case "image/gif":
                $imagen_original = imagecreatefromgif($temp_archivo);
                break;
        }

        imagecopyresampled($imagen_redimensionada, $imagen_original, 0, 0, 0, 0, $nuevo_ancho, $nuevo_alto, $ancho_original, $alto_original);

        // Guardar la imagen 
        switch ($tipo_archivo) {
            case "image/jpg":
            case "image/jpeg":
                imagejpeg($imagen_redimensionada, $ruta_destino);
                break;
            case "image/png":
                imagepng($imagen_redimensionada, $ruta_destino);
                break;
            case "image/gif":
                imagegif($imagen_redimensionada, $ruta_destino);
                break;
        }

        
        echo '<h2>Imagen original:</h2>';
        echo '<img src="' . $temp_archivo . '" /><br>';

        echo '<h2>Imagen redimensionada:</h2>';
        echo '<img src="' . $ruta_destino . '" /><br>';
    } else {
        echo "Error: El archivo no es una imagen válida.";
    }
}
?>

<h2>Subir imagen:</h2>
<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post" enctype="multipart/form-data">
    <input type="file" name="imagen" accept="image/*" required><br>
    <input type="submit" value="Subir Imagen">
</form>
