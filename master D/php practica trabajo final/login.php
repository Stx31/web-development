<?php

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Sesión</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="noticias.html">Noticias</a></li>
                
            </ul>
        </nav>
    </header>
    <main>
    
        <h1>Iniciar Sesión</h1>
        <form action="login.php" method="post">
            <label for="usuario">Usuario:</label>
            <input type="text" id="usuario" name="usuario" required><br>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required><br>
            <input type="submit" value="Iniciar Sesión">
        </form>
    </main>
    <footer>
        
        <p>Derechos de autor &copy; 2024 - Tu Empresa</p>
    </footer>
</body>
</html>
