<html>
<head>
    
</head>
<body>
    Prueba de encriptaci�n (clave : espada):<br />
    <?php
    $password = crypt('espada','oo'); 
    
    if (crypt($_POST['clave'], 'oo') == $password) {
       echo "<b>Clave correcta</b>";
    }
    ?>
    <form action="?" method="post">
        <input type="text" name="clave" />
        <input type="submit" />
    </form>
</body>
</html>