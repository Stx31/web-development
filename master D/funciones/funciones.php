<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sumar días a la fecha actual</title>
</head>

<body>
    <h1>Sumar días a la fecha actual</h1>
    <form method="post">
        <label for="numDias">Ingrese el número de días a sumar:</label>
        <input type="number" id="numDias" name="numDias" min="1" required>
        <button type="submit" name="submit">Calcular</button>
    </form>

    <?php

    function sumarDias($numDias)
    {
        $fechaActual = new DateTime();
        $fechaActual->modify('+' . $numDias . ' days');
        return $fechaActual->format('d/m/Y');
    }


    if (isset($_POST['submit'])) {
        $numDias = $_POST['numDias'];
        $resultado = sumarDias($numDias);
        echo "<p>La fecha resultante es: $resultado</p>";
    }
    ?>
</body>

</html>