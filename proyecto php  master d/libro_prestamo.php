<?php
session_start();
include('db/connect.php');

if (!isset($_SESSION['idUser'])) {
    header("Location: login.php");
    exit();
}

$idUser = $_SESSION['idUser'];

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['prestar'])) {
    $idLibro = $_POST['idLibro'];
    $fecha_prestamo = date('Y-m-d');

    $sql_prestamo = "INSERT INTO prestamos (idUser, idLibro, fecha_prestamo) VALUES ('$idUser', '$idLibro', '$fecha_prestamo')";

    if ($conn->query($sql_prestamo) === TRUE) {
        $sql_update_libro = "UPDATE libros SET disponible=FALSE WHERE idLibro='$idLibro'";
        $conn->query($sql_update_libro);
        echo "<p>Libro prestado con éxito</p>";
    } else {
        echo "Error: " . $sql_prestamo . "<br>" . $conn->error;
    }
}

$sql_libros = "SELECT * FROM libros WHERE disponible=TRUE";
$result_libros = $conn->query($sql_libros);

if ($result_libros->num_rows > 0) {
    while($libro = $result_libros->fetch_assoc()) {
        echo "<div>";
        echo "<h2>" . $libro['titulo'] . "</h2>";
        echo "<p>Autor: " . $libro['autor'] . "</p>";
        echo "<p>Publicado: " . $libro['fecha_publicacion'] . "</p>";
        echo "<form method='POST' action=''>";
        echo "<input type='hidden' name='idLibro' value='" . $libro['idLibro'] . "'>";
        echo "<button type='submit' name='prestar'>Prestar</button>";
        echo "</form>";
        echo "</div>";
    }
} else {
    echo "<p>No hay libros disponibles</p>";
}

$conn->close();
?>
