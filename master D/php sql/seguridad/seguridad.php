<?php
    session_start();        
    if ($_SESSION['cadena_encr'] == md5(session_id())){
        $resultado = 'sesion correcta';
    }else{
        $resultado =  'Error en session <a href="ejemplo36.php">Volver</a>';
    }
?>
<html>
<head>
    
</head>
<body>
    Prueba de md5:<br />
    <?php
    echo $resultado;
    ?>    
</body>
</html>