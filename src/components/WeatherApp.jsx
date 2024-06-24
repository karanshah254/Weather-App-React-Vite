import React, { useState } from 'react'
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

const WeatherApp = () => {
    const [weatherInfo, setInfo] = useState({
        place: "IT",
        temp: 14.66,
        weather: "moderate rain",
        windSpeed: 1.57
    });

    const updateInfo = (newInfo) => {
        setInfo(newInfo);
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Weather App!</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}

export default WeatherApp;