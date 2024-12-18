import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "4dde05e1257b037bb6e53be280c142f8";
    let getWeatherInfo = async () => {
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
        }
        catch (err) {
            throw err;
        }
    }
    let handleChange = (event) => {
        setCity(event.target.value);
    };
    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
        }
        catch (err) {
            setError(true);
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="Search City" variant="outlined" value={city} name='city' onChange={handleChange} required />
                <br /><br />
                <Button variant="outlined" type='submit'>Search</Button>
                {error && <p style={{ color: "red" }}>No such place exists!</p>}
            </form>
        </>
    )
}