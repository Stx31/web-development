<html>
 <body>
  <p>		
  <?php        
   echo "Nombre: ".$_POST['nombre']."<br/>";
   echo "Email: ".$_POST['email'];

   echo $p_username;

  ?>
  <form action="ejemplo6.php" method="post">
    Nombre: <input type="text" name="nombre" /><br />
    Email:  <input type="text" name="email" /><br />
    <input type="submit" name="submit" value="enviar" />
  </form>             
  </p>
 </body>
</html>

