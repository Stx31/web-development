<html>
	<body><p>		
        <?php
        echo 'Bienvenido '.$_POST['nombre'].' '.$_POST['apellidos'].'<br/>';
        echo 'Tu edad es '.$_POST['edad'].' a�os'.'<br/>';
        echo 'Tu color favorito es el '.$_REQUEST['color'].'<br/>';
        if ($_POST['cine'] == 'on'){
            echo 'te gusta el cine <br/>';
        }else{
            echo 'no te gusta el cine<br/>';
        }
        echo ' y te describes como '.$_REQUEST['descripcion'];
        
        ?>
  	</p></body>
</html>


