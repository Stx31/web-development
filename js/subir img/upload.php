<?php
if ($_FILES['file']['error'] === UPLOAD_ERR_OK) {
    $uploadDir = 'uploads/';
    $uploadFile = $uploadDir . basename($_FILES['file']['name']);
    
    if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadFile)) {
        echo "Archivo subido con éxito.";
    } else {
        echo "Error al subir el archivo.";
    }
} else {
    echo "Error: " . $_FILES['file']['error'];
}
?>
