<?php
include('includes/header.php');
include('includes/nav.php');
include('db/connect.php');

session_start();

if (!isset($_SESSION['idUser'])) {
    header("Location: login.php");
    exit();
}

$idUser = $_SESSION['idUser'];

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['update'])) {
    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $fecha_nacimiento = $_POST['fecha_nacimiento'];
    $direccion = $_POST['direccion'];
    $sexo = $_POST['sexo'];

    $sql = "UPDATE users_data SET nombre='$nombre', apellidos='$apellidos', email='$email', telefono='$telefono', fecha_nacimiento='$fecha_nacimiento', direccion='$direccion', sexo='$sexo' WHERE idUser='$idUser'";

    if ($conn->query($sql) === TRUE) {
        echo "<p>Perfil actualizado</p>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$sql = "SELECT * FROM users_data WHERE idUser='$idUser'";
$result = $conn->query($sql);
$user = $result->fetch_assoc();
?>

<form method="POST" action="">
    <input type="text" name="nombre" placeholder="Nombre" value="<?php echo $user['nombre']; ?>" required>
    <input type="text" name="apellidos" placeholder="Apellidos" value="<?php echo $user['apellidos']; ?>" required>
    <input type="email" name="email" placeholder="Email" value="<?php echo $user['email']; ?>" required>
    <input type="text" name="telefono" placeholder="Teléfono" value="<?php echo $user['telefono']; ?>" required>
    <input type="date" name="fecha_nacimiento" value="<?php echo $user['fecha_nacimiento']; ?>" required>
    <input type="text" name="direccion" placeholder="Dirección" value="<?php echo $user['direccion']; ?>">
    <select name="sexo" required>
        <option value="Masculino" <?php if($user['sexo'] == 'Masculino') echo 'selected'; ?>>Masculino</option>
        <option value="Femenino" <?php if($user['sexo'] == 'Femenino') echo 'selected'; ?>>Femenino</option>
        <option value="Otro" <?php if($user['sexo'] == 'Otro') echo 'selected'; ?>>Otro</option>
    </select>
    <button type="submit" name="update">Actualizar</button>
</form>

<?php include('includes/footer.php'); ?>
