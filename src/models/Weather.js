import { Ui } from "./Ui.js";
export class Weather {
  constructor(city, countryCode) {
    this.key = "127fd72465dd1cc689b3373ee5f764e5";
    this.city = city;
    this.countryCode = countryCode;
  }
  getWeather() {
    const fetchData = async () => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.key}&units=metric`
      );
      const data = await res.data;
      const ui = new Ui();
      ui.showWeather(data);
    };
    fetchData();
  }
  changeLocation(city, countryCode) {
    if(!city || !countryCode) return
    this.city = city;
    this.countryCode = countryCode;
  }
}
