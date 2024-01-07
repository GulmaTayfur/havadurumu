import fetchWeatherData from "./api.js";
import { updateUI } from "./ui.js";

const selectors = {
  city: document.querySelector(".weather-city"),
  datetime: document.querySelector(".weather-datetime"),
  weatherForecast: document.querySelector(".weather-forecast"),
  weatherTemperature: document.querySelector(".weather-temperature"),
  weatherIcon: document.querySelector(".weather-icon"),
  weatherMinmax: document.querySelector(".weather-minmax"),
  weatherRealfeel: document.querySelector(".weather-realfeel"),
  weatherHumidity: document.querySelector(".weather-humidity"),
  weatherWind: document.querySelector(".weather-wind"),
  weatherPressure: document.querySelector(".weather-pressure"),
  searchForm: document.querySelector(".weather-search"),
  searchInput: document.querySelector(".weather-searchform"),
  unitCelsius: document.querySelector(".weather-units-celsius"),
  unitFarenheit: document.querySelector(".weather-units-farenheit"),
};

let currCtiy = "London";
let units = "metric";

export async function getWeather() {
  const data = await fetchWeatherData(currCtiy, units);
  updateUI(data, selectors);
}

selectors.searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  currCtiy = selectors.searchInput.value;
  //   console.log(currCtiy);
  await getWeather();
  selectors.searchInput.value = "";
});

selectors.unitCelsius.addEventListener("click", () => {
  if (units !== "metric") {
    units = "metric";
    getWeather();
  }
});

selectors.unitFarenheit.addEventListener("click", () => {
  if (units !== "imperial") {
    units = "imperial";
    getWeather();
  }
});

document.body.addEventListener("load", async () => {
  await getWeather();
});
