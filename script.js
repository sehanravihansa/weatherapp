const apiKey = '4e3dd198f29bf5fb0768d524df1a0833'; // Your API key

// Select elements from the DOM
const searchBtn = document.querySelector('.search-bar-container button');
const cityInput = document.querySelector('.search-bar-container input');

// Add event listener for the search button
searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim(); // Trim to avoid extra spaces
  if (city) {
    fetchWeather(city);
  } else {
    alert('Please enter a city name!');
  }
});

// Fetch weather data from the API
function fetchWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        // Create and display a simple alert box for weather information
        alert(
          `Weather in ${data.name}\n` +
          `Temperature: ${data.main.temp}°C\n` +
          `Condition: ${data.weather[0].description}\n` +
          `Humidity: ${data.main.humidity}%\n` +
          `Wind Speed: ${data.wind.speed} m/s`
        );
      } else {
        alert('City not found! Please try again.');
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      alert('Unable to fetch weather data. Please try again later.');
    });
}
