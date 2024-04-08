<?php
session_start();

if (!empty($_GET['color'])) {
    $_SESSION['color'] = $_GET['color'];
}
?>

<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <a href="color.php">ir a otra página</a>
</body>
</html>
