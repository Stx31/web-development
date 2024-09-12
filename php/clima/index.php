<?php
$apiKey = '';
$city = isset($_GET['city']) ? $_GET['city'] : 'Madrid';
$apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=$city&appid=$apiKey&units=metric&lang=es";

$response = file_get_contents($apiUrl);
$weatherData = json_decode($response, true);

$temperature = $weatherData['main']['temp'];
$description = $weatherData['weather'][0]['description'];
$icon = $weatherData['weather'][0]['icon'];
$cityName = $weatherData['name'];
$country = $weatherData['sys']['country'];
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clima en <?php echo htmlspecialchars($cityName); ?></title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <h1>Clima en <?php echo htmlspecialchars($cityName); ?>, <?php echo $country; ?></h1>

    <div class="weather-container">
        <img src="https://openweathermap.org/img/wn/<?php echo $icon; ?>@2x.png" alt="Icono del clima" class="icon">
        <div class="temperature"><?php echo round($temperature); ?>°C</div>
        <div class="description"><?php echo ucfirst($description); ?></div>
    </div>

    <form method="GET" action="">
        <input type="text" name="city" placeholder="Ingresa una ciudad" value="<?php echo htmlspecialchars($city); ?>" required>
        <button type="submit">Buscar</button>
    </form>

</body>
</html>
