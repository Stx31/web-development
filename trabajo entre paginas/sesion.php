<?php
			session_start();
			// Guardamos en una variable de sesión la hora actual.
			$_SESSION["tTime"] = time();
			$_SESSION["otraVariable"] = "variable rellenada en ejemplo22.php";
			?>
		<html>
			<body>
			        <p>
			        <?php echo "Session guardada. Ahora ves a 
			        <a href="Ejemplo1b.php"> Ejemplo1b.php</a>";?>
			        </p>
			</body>
			
        </html>