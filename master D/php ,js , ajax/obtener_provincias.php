<?php
$host = 'localhost';
$dbname = 'nueva';
$username = 'usuario';
$password = 'contraseña';

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $paisId = $_GET['pais'];
    $query = $conn->prepare("SELECT * FROM provincias WHERE pais_id = :paisId");
    $query->bindParam(':paisId', $paisId);
    $query->execute();
    $provincias = $query->fetchAll();

    $options = '';
    foreach ($provincias as $provincia) {
        $options .= '<option value="' . $provincia['id'] . '">' . $provincia['nombre'] . '</option>';
    }

    echo '<select>' . $options . '</select>';
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
