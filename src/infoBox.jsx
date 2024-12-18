import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    const Cold_Img = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ef6a5ee9-9688-4988-8994-4117834a7b38/d2jd75q-8f67d9f3-5654-4c52-9c0c-7f9e15f11d45.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VmNmE1ZWU5LTk2ODgtNDk4OC04OTk0LTQxMTc4MzRhN2IzOFwvZDJqZDc1cS04ZjY3ZDlmMy01NjU0LTRjNTItOWMwYy03ZjllMTVmMTFkNDUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gVvozPG-xO1aq1Ap84EsL6KrJbgqCw6V_dWhxTcoHR8";
    const Hot_Img = "https://static.vecteezy.com/system/resources/previews/011/665/201/non_2x/handsome-young-man-suffering-from-heat-wave-stoke-in-very-hot-weather-temperature-because-of-global-climate-change-vector.jpg";
    const Rain_Img = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";
    return (
        <>
            <br /><br />
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? Rain_Img : info.temp > 15 ? Hot_Img : Cold_Img}
                    title="WeatherImg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}{info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
                    </Typography>
                    <div>
                        <p>Temperature : {info.temp}&deg;C</p>
                        <p>Humidity : {info.humidity}%</p>
                        <p>Min temp : {info.tempMin}&deg;C</p>
                        <p>Max temp : {info.tempMax}&deg;C</p>
                        <p>Today's weather is {info.weather} and feels like {info.feelsLike}&deg;C</p>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}