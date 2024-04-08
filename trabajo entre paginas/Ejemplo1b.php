<?php
			
			session_start();
			    if(!empty($_SESSION["tTime"])) {
			    $hora = date("H:i:s",$_SESSION["tTime"]);
			    $hace = (time() - $_SESSION["tTime"]);
			echo "Hola entraste a pagina1 a las ".$hora." hace ".$hace." segundos.";
			echo "<br />";
			echo "El valor de $_SESSION["otraVariable"] es : ".$_SESSION["otraVariable"];
			} else {
			echo "Todavía no has guardado una varible de sesión. Ve a session1.php";    
			}
			?>