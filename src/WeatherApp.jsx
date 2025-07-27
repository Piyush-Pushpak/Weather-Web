import SearchBox from "./searchBox";
import InfoBox from "./infoBox";
import { useEffect, useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "",
    feelsLike: "",
    temp: "",
    tempMin: "",
    tempMax: "",
    humidity: "",
    weather: ""
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  // 🔁 Fetch default city on first load (e.g., Delhi)
  useEffect(() => {
    const getDefaultWeather = async () => {
      try {
        const API_URL = "https://api.openweathermap.org/data/2.5/weather";
        const API_KEY = "4dde05e1257b037bb6e53be280c142f8";
        const city = "Delhi";

        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();

        let defaultInfo = {
          city: city,
          temp: jsonResponse.main.temp,
          tempMin: jsonResponse.main.temp_min,
          tempMax: jsonResponse.main.temp_max,
          humidity: jsonResponse.main.humidity,
          feelsLike: jsonResponse.main.feels_like,
          weather: jsonResponse.weather[0].description
        };

        setWeatherInfo(defaultInfo);
      } catch (error) {
        console.error("Failed to load default city weather:", error);
      }
    };

    getDefaultWeather();
  }, []);

  return (
    <div className="card">
      <h2>Weather App by Piyush</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
