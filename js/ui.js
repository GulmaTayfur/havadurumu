import { converTimeStamp, convertCountryCode } from "./utils.js";

function updateUI(data, selectors) {
  console.log(data, selectors);
  selectors.city.innerHTML = `${data.name}, ${convertCountryCode(
    data.sys.country
  )}`;
  selectors.datetime.innerHTML = converTimeStamp(data.dt, data.timezone);
  selectors.weatherForecast.innerHTML = `<p>${data.weather[0].main}</p>`;
  selectors.weatherTemperature.innerHTML = `${data.main.temp.toFixed()}&#176`;
  selectors.weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`;
  selectors.weatherMinmax.innerHTML = `<p>Min:${data.main.temp_min.toFixed()}&#176</p>  <p>Max:${data.main.temp_max.toFixed()}&#176</p>`;
  selectors.weatherRealfeel.innerHTML = `${data.main.feels_like.toFixed()}&#176`;
  selectors.weatherHumidity.innerHTML = `${data.main.humidity}%`;
  selectors.weatherWind.innerHTML = `${data.wind.speed} m/s
  `;
  selectors.weatherPressure.innerHTML = `${data.main.pressure} hPa`;
  changeBackground(data.weather[0].main);
}

function changeBackground(weatherCondition) {
  const body = document.body;

  // Temizleme işlemi: Mevcut sınıfları temizle
  body.classList.remove(
    "clear-sky",
    "rain",
    "few-clouds",
    "scattered-clouds",
    "broken-clouds",
    "shower-rain",
    "thunderstorm",
    "snow",
    "mist"
  );

  // Hava durumuna göre sınıf ekleme
  if (weatherCondition === "Clear") {
    body.classList.add("clear-sky");
  } else if (weatherCondition === "Drizzle") {
    body.classList.add("rain");
  } else if (weatherCondition === "Few Clouds") {
    body.classList.add("few-clouds");
  } else if (weatherCondition === "Scattered Clouds") {
    body.classList.add("scattered-clouds");
  } else if (weatherCondition === "Clouds") {
    body.classList.add("broken-clouds");
  } else if (weatherCondition === "Rain") {
    body.classList.add("shower-rain");
  } else if (weatherCondition === "Thunderstorm") {
    body.classList.add("thunderstorm");
  } else if (weatherCondition === "Snow") {
    body.classList.add("snow");
  } else if (weatherCondition === "Mist") {
    body.classList.add("mist");
  }
  // Diğer hava durumu koşullarını da ekleyebilirsiniz

  // Farklı durumlar için farklı arka planlar ekleyebilirsiniz
}

export { updateUI };
