<?php
session_start();
if (isset($_POST['usuario'])) {
    // UTILIZANDO MYSQLI
    $hostname = 'localhost';
    $username = 'root';
    $password = 'C0ntras3na';
    $dbname = 'libreria';

    $conn = mysqli_connect($hostname, $username, $password, $dbname);

    if ($conn) {
        // seleccionamos la base de datos
        $query = "SELECT usuario, clave, idusuario FROM usuarios WHERE usuario = ? AND clave = ?";
        $stmt = mysqli_prepare($conn, $query);
        mysqli_stmt_bind_param($stmt, "ss", $_POST['usuario'], $_POST['clave']);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);

        if (mysqli_num_rows($result) !== 0) {
            $row = mysqli_fetch_array($result);
            $_SESSION['key_id'] = md5(session_id());
            $_SESSION['idusuario'] = md5($row['idusuario']);
            header('Location: ejemplo38b.php');
            exit();
        } else {
            echo 'Datos de acceso incorrectos';
        }
        mysqli_close($conn);
    } else {
        echo 'Fallo en la conexión';
    }
}
?>
<html>
	<body><p>		        
        <form action="" method="post">
            Usuario <input type="text" name="usuario" /><br />
            Clave <input type="password" name="clave" />
            <input type="submit" />
        </form>
  	</p></body>
</html>
