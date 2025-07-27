import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
  const Cold_Img =
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ef6a5ee9-9688-4988-8994-4117834a7b38/d2jd75q-8f67d9f3-5654-4c52-9c0c-7f9e15f11d45.jpg";
  const Hot_Img =
    "https://static.vecteezy.com/system/resources/previews/011/665/201/non_2x/handsome-young-man-suffering-from-heat-wave-stoke-in-very-hot-weather-temperature-because-of-global-climate-change-vector.jpg";
  const Rain_Img =
    "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";
  const Default_Img =
    "https://cdn-icons-png.flaticon.com/512/1163/1163661.png";

  const getWeatherImage = () => {
    if (!info || !info.city) return Default_Img;
    if (info.humidity > 80) return Rain_Img;
    if (info.temp > 15) return Hot_Img;
    return Cold_Img;
  };

  return (
    <div className="weather-card-wrapper">
      <Card
        sx={{
          width: "100%",
          maxWidth: 420,
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "20px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          backdropFilter: "blur(10px)",
          color: "white",
          margin: "1rem auto",
        }}
      >
        <CardMedia
          sx={{ height: 300 }} 
          image={getWeatherImage()}
          title="Weather Image"
        />
        <CardContent>
          {info && info.city ? (
            <>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                {info.city}
                {info.humidity > 80 ? (
                  <ThunderstormIcon />
                ) : info.temp > 15 ? (
                  <WbSunnyIcon />
                ) : (
                  <AcUnitIcon />
                )}
              </Typography>
              <Typography
                variant="body2"
                component="div"
                sx={{
                  textAlign: "left",
                  fontSize: "1rem",
                  lineHeight: 1.6,
                }}
              >
                <p>🌡 Temperature: {info.temp}°C</p>
                <p>💧 Humidity: {info.humidity}%</p>
                <p>📉 Min Temp: {info.tempMin}°C</p>
                <p>📈 Max Temp: {info.tempMax}°C</p>
                <p>
                  🌥 Weather: {info.weather} | Feels like {info.feelsLike}°C
                </p>
              </Typography>
            </>
          ) : (
            <Typography
              variant="body1"
              sx={{ textAlign: "center", color: "#eee" }}
            >
              Search for a city to view weather details
            </Typography>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
