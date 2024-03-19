<?php
$conn = mysqli_connect('localhost', 'tu_usuario', 'tu_contraseña', 'login_system');


if (!$conn) {
    die("Error de conexión: " . mysqli_connect_error());
}

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
$result = mysqli_query($conn, $sql);


if (mysqli_num_rows($result) == 1) {
    echo "Inicio de sesión exitoso. Bienvenido, $username!";
} else {
    echo "Nombre de usuario o contraseña incorrectos.";
}

mysqli_close($conn);
?>
