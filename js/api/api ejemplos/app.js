function searchWeather() {
    const apiKey = 'd9fb6ff62647eedeebd9d9f45eae280c';
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;

    
    if (cityName.trim() === '') {
        alert('Please enter a city name');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            
            document.querySelector('.temp').innerText = `${data.main.temp}°C`;
            document.querySelector('.city').innerText = data.name;
            document.querySelector('.humidity').innerText = `${data.main.humidity}%`;
            document.querySelector('.wind').innerText = `${data.wind.speed}km/h`;

           
            document.querySelector('.weather-icon').src = 'img/rain.png';
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again later.');
        });
}
