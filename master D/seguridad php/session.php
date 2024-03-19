<?php 
session_start();
if ($_POST['usuario']){
    if ($_POST['usuario'] == 'prueba' && $_POST['clave'] == 'espada'){
        $encriptada = md5(session_id());            
        $_SESSION['cadena_encr'] = $encriptada;            
        $resultado = 'claves correctas';
    }else{
        $resultado = 'claves erroneas';
    }
}else{
    $resultado = 'rellene usuario y clave';
}
?>
<html>
<head>
    
</head>
<body>
    Prueba de md5 (usuario : prueba y clave : espada):<br />
    <?php
    
    echo $resultado;
    ?>
    <form action="?" method="post">
        usuario <input type="text" name="usuario" /><br />
        clave <input type="text" name="clave" />
        <input type="submit" />
    </form>
    <br /><br />
    <a href="ejemplo36b.php">Ir a ejemplo36b</a>
</body>
</html>