import React, { useEffect, useState } from 'react';

type WeatherData = {
  temperature: number;
  windSpeed: number;
  symbolCode: string;
};

type City = {
  name: string;
  lat: number;
  lon: number;
};

const cities: City[] = [
  { name: 'Tbilisi', lat: 41.7151, lon: 44.8271 },
  { name: 'Batumi', lat: 41.6168, lon: 41.6367 },
  { name: 'Kutaisi', lat: 42.2679, lon: 42.6946 },
  { name: 'Zugdidi', lat: 42.5126, lon: 41.8690 },
  { name: 'Rustavi', lat: 41.5412, lon: 45.0382 },
];

const WeatherApp: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<City>(cities[0]);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchWeather = async (city: City) => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(
        `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${city.lat}&lon=${city.lon}`,
        {
          headers: {
            'User-Agent': 'MyWeatherApp/1.0 ilia@example.com',
          },
        }
      );

      if (!response.ok) throw new Error('Network error');

      const data = await response.json();
      const first = data.properties.timeseries[0];
      const temp = first.data.instant.details.air_temperature;
      const wind = first.data.instant.details.wind_speed;
      const symbol = first.data.next_1_hours?.summary.symbol_code || 'unknown';

      setWeather({
        temperature: temp,
        windSpeed: wind,
        symbolCode: symbol,
      });
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(selectedCity);
  }, [selectedCity]);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-xl shadow-md bg-blue-100 text-center">
      <h1 className="text-2xl font-bold mb-4">ამინდის პროგნოზი</h1>

      <select
        className="mb-4 p-2 rounded border bg-white text-black"
        value={selectedCity.name}
        onChange={(e) => {
          const city = cities.find((c) => c.name === e.target.value);
          if (city) setSelectedCity(city);
        }}
      >
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>

      {loading && <div>Loading weather...</div>}
      {error && <div className="text-red-500">Failed to load data.</div>}

      {weather && !loading && !error && (
        <>
          <div className="text-lg">
            🌡️ ტემპერატურა: <strong>{weather.temperature}°C</strong>
          </div>
          <div className="text-lg">
            💨 ქარი: <strong>{weather.windSpeed} m/s</strong>
          </div>
          <div className="mt-4">
            <img
              src={`https://api.met.no/images/weathericons/png/${weather.symbolCode}.png`}
              alt={weather.symbolCode}
              className="mx-auto w-20 h-20"
            />
            <p className="capitalize mt-2">{weather.symbolCode.replace(/_/g, ' ')}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherApp;