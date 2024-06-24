import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchBox = ({ updateInfo }) => {
    // const [city, setCity] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "Your Own Key";

    const getWeather = async () => {
        try {
            let result = await fetch(`${URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
            let response = await result.json();
            console.log(response);
            let result1 = {
                place: response.sys.country,
                temp: response.main.temp,
                weather: response.weather[0].description,
                windSpeed: response.wind.speed
            }
            console.log(result1);
            return result1;
        } catch (error) {
            console.lo(error);
        }
    };

    const handleChange = (event) => {
        setLatitude(event.target.value);
    };

    const handleChange2 = (event) => {
        setLongitude(event.target.value);
    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            // setCity("");
            setLatitude("");
            setLongitude("");
            let newInfo = await getWeather();
            updateInfo(newInfo);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField id="city" value={latitude} label="Enter Latitude" placeholder='Eg. 44.34' variant="outlined" required onChange={handleChange} />
                &nbsp;&nbsp;
                <TextField id="city" value={longitude} label="Enter Longitude" placeholder='Eg. 10.99' variant="outlined" required onChange={handleChange2} />
                <br /><br />
                <Button type='submit' variant="contained">
                    Search
                </Button>
            </form>
        </div>
    )
}

export default SearchBox;