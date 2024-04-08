<?php
session_start();
if (!empty($_SESSION['color'])){
    $color = $_SESSION['color'];
}else{
    $color='Vacio';
}
?>
<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <?php echo $color ?>
</body>
</html>
