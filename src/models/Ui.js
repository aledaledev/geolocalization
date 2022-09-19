export class Ui { 
  constructor() {
    this.location = document.getElementById("weather-location");
    this.description = document.getElementById("weather-description");
    this.temperature = document.getElementById("weather-temperature");
    this.humidity = document.getElementById("weather-humidity");
    this.windSpeed = document.getElementById("weather-wind");
  }
  showWeather({ name, weather, main, wind, sys }) {
    this.location.innerHTML = `${name} / ${sys.country}`
    this.description.innerHTML = weather[0].description
    this.temperature.innerHTML = main.temp+' °C';
    this.humidity.innerHTML = `Humidity: ${main.humidity} %`;
    this.windSpeed.innerHTML = `Wind: ${wind.speed} m/s`;
  }
}
