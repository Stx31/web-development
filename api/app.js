const apiKey = "0d1167c50db644714990d8d7ef02e836"; 

const searchButton = document.getElementById("search");
const cityInput = document.getElementById("city");
const resultDiv = document.getElementById("result");

searchButton.addEventListener("click", () => {
  const city = cityInput.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = data.weather[0].description;
      const temp = data.main.temp;
      const feelsLike = data.main.feels_like;
      const humidity = data.main.humidity;

      resultDiv.innerHTML = `
        <p>Clima: ${weather}</p>
        <p>Temperatura: ${temp} °C</p>
        <p>Sensación térmica: ${feelsLike} °C</p>
        <p>Humedad: ${humidity}%</p>
      `;
    })
    .catch(error => {
      resultDiv.innerHTML = "<p>Ha ocurrido un error. Inténtalo de nuevo más tarde.</p>";
      console.error(error);
    });
});