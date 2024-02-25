<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
</head>
<body>
    <h2>Formulario de Datos</h2>
    <form action="procesar.php" method="post">
        <label for="nombre">Nombre:</label><br>
        <input type="text" id="nombre" name="nombre"><br>
        
        <label for="direccion">Dirección:</label><br>
        <input type="text" id="direccion" name="direccion"><br>
        
        <label for="edad">Edad:</label><br>
        <input type="text" id="edad" name="edad"><br>
        
        <label for="casado">¿Casado?</label>
        <input type="checkbox" id="casado" name="casado"><br>
        
        <input type="submit" value="Enviar">
    </form>
</body>
</html>
