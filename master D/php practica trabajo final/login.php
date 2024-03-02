<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty(trim($_POST["usuario"])) || empty(trim($_POST["password"]))) {
        echo "Por favor, introduzca su usuario y contraseña.";
    } else {
        $conexion = mysqli_connect("localhost", "usuario", "contraseña", "basededatos");

        if ($conexion === false) {
            die("ERROR: No se pudo conectar. " . mysqli_connect_error());
        }

        $sql = "SELECT id, usuario, contraseña FROM usuarios WHERE usuario = ?";

        if ($stmt = mysqli_prepare($conexion, $sql)) {
            mysqli_stmt_bind_param($stmt, "s", $param_usuario);

            $param_usuario = trim($_POST["usuario"]);

            if (mysqli_stmt_execute($stmt)) {
                mysqli_stmt_store_result($stmt);

                if (mysqli_stmt_num_rows($stmt) == 1) {
                    mysqli_stmt_bind_result($stmt, $id, $usuario, $hashed_password);
                    if (mysqli_stmt_fetch($stmt)) {
                        if (password_verify($_POST["password"], $hashed_password)) {
                            session_start();

                            $_SESSION["loggedin"] = true;
                            $_SESSION["id"] = $id;
                            $_SESSION["usuario"] = $usuario;

                            header("location: index.html");
                        } else {
                            echo "La contraseña que has introducido no es válida.";
                        }
                    }
                } else {
                    echo "No se encontró una cuenta con ese usuario.";
                }
            } else {
                echo "Algo salió mal. Por favor, inténtelo de nuevo más tarde.";
            }

            mysqli_stmt_close($stmt);
        }

        mysqli_close($conexion);
    }
}
?>
