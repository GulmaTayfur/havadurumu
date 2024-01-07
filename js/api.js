const API_KEY = "";

async function fetchWeatherData(city, units) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
    );
    // console.log(response.json());
    if (!response.ok) {
      throw new Error("İstek başarılı değil");
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export default fetchWeatherData;
