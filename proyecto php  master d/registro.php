<?php
include('includes/header.php');
include('includes/nav.php');
include('db/connect.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $fecha_nacimiento = $_POST['fecha_nacimiento'];
    $direccion = $_POST['direccion'];
    $sexo = $_POST['sexo'];
    $usuario = $_POST['usuario'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO users_data (nombre, apellidos, email, telefono, fecha_nacimiento, direccion, sexo) VALUES ('$nombre', '$apellidos', '$email', '$telefono', '$fecha_nacimiento', '$direccion', '$sexo')";

    if ($conn->query($sql) === TRUE) {
        $idUser = $conn->insert_id;

        $sql_login = "INSERT INTO users_login (idUser, usuario, password, rol) VALUES ('$idUser', '$usuario', '$password', 'user')";

        if ($conn->query($sql_login) === TRUE) {
            echo "<p>Registro exitoso. <a href='login.php'>Inicia sesión aquí</a>.</p>";
        } else {
            echo "Error: " . $sql_login . "<br>" . $conn->error;
        }
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
?>

<form method="POST" action="">
    <input type="text" name="nombre" placeholder="Nombre" required>
    <input type="text" name="apellidos" placeholder="Apellidos" required>
    <input type="email" name="email" placeholder="Email" required>
    <input type="text" name="telefono" placeholder="Teléfono" required>
    <input type="date" name="fecha_nacimiento" required>
    <input type="text" name="direccion" placeholder="Dirección">
    <select name="sexo" required>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
        <option value="Otro">Otro</option>
    </select>
    <input type="text" name="usuario" placeholder="Usuario" required>
    <input type="password" name="password" placeholder="Contraseña" required>
    <button type="submit">Registrarse</button>
</form>

<?php include('includes/footer.php'); ?>
