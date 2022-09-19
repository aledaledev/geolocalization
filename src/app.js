import { Weather } from "./models/Weather.js";
import { Store } from "./models/Store.js";

(async () => {
  const res = await axios.get("http://geoplugin.net/json.gp?")
  const data = await res.data;
  const store = new Store(data);
  const { city, countryCode } = store.getLocationData();
  const weather = new Weather(city, countryCode);

  document.addEventListener("DOMContentLoaded", weather.getWeather());

  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const countryCode = document.getElementById("country-code");
    const city = document.getElementById("city");
    weather.changeLocation(city.value, countryCode.value);
    weather.getWeather();
    store.setLocationData(city.value, countryCode.value);
    form.reset();
  });
})()
