import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "4dde05e1257b037bb6e53be280c142f8";

  const getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Search City"
          variant="outlined"
          value={city}
          name="city"
          onChange={handleChange}
          required
          sx={{
            input: {
              color: 'white',
            },
            label: {
              color: 'white',
            },
            '& label.Mui-focused': {
              color: '#ff8c42',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: '#ff8c42',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#ff8c42',
              },
            },
          }}
        />
        <br /><br />
        <Button
          variant="outlined"
          type="submit"
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': {
              borderColor: '#ff8c42',
              backgroundColor: 'rgba(255, 140, 66, 0.1)',
            },
          }}
        >
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such place exists!</p>}
      </form>
    </>
  );
}
