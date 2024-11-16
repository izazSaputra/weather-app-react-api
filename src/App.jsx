import { useState } from "react";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    if (!city) return;

    const apiKey = "88bc7cfcb6b9e1a5796742cc05c3fa0b";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();``
    console.log(data);

    if (data.cod === 200) {
      setWeather(data);
    } else {
      setWeather(null);
      alert("City not found");
    }
  };

  return (
    <div className="container">
      <h1>Aplikasi Cuaca Sederhana</h1>
      <input
        type="text"
        id="city-input"
        placeholder="Masukkan nama kota..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button id="get-weather" onClick={getWeather}>
        Dapatkan Cuaca
      </button>
      <div id="weather-info" className="weather-info">
        <p>
          <strong>Kota:</strong>{" "}
          {weather ? weather.name : "Data tidak tersedia"}
        </p>
        <p>
          <strong>Suhu:</strong>{" "}
          {weather
            ? weather.main.temp.toFixed(2) + " °C"
            : "Data tidak tersedia"}
        </p>
        <p>
          <strong>Kelembaban:</strong>{" "}
          {weather ? weather.main.humidity + "%" : "Data tidak tersedia"}
        </p>
        <p>
          <strong>Cuaca:</strong>{" "}
          {weather ? weather.weather[0].description : "Data tidak tersedia"}
        </p>
        <p>
          <strong>Kecepatan Angin:</strong>{" "}
          {weather ? weather.wind.speed + " m/s" : "Data tidak tersedia"}
        </p>
      </div>
    </div>
  );
}
