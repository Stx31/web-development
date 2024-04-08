<?php
// session1.php
session_start();
// Guardamos en una variable de sesi�n la hora actual.
$_SESSION['tTime'] = time();
$_SESSION['otraVariable'] = 'variable rellenada en ejemplo22.php';
?>

<html>
	<body>
	<p>		
    <?php echo 'Session guardada. Ahora ves a <a href="ejemplo22b.php">ejemplo22b.php</a>';?>
  	</p>
	</body>
</html>


