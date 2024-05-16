import { useEffect, useState } from "react"
import { getCurrentWeather } from "../api/weatherapi"
const WeatherCard = () => {

    const [weather, setWeather] = useState(null)

    useEffect(() => {
        const getWeather= async () => {
        const weather = await getCurrentWeather()

        setWeather(weather)
    }

    getWeather()
}, [])

    return (

        <div className="card" style={{width: "18rem"}}>
            <img 
                src={`http:${weather?.current.condition.icon}`} 
                className="card-img-top"
                alt="..."
                style={{height: '200px', width: '200px', margin: 'auto'}}
            />
        <div className="card-body text-center" >
                <h5 className="card-title">{`
                ${weather?.location.name}, 
                ${weather?.location.region} - 
                ${weather?.location.country}
                `}</h5>
                <p className="card-text">
                    {weather?.current.condition.text}
                </p>

                <p className="card-text">
                    <b>
                        <i className="bi bi-thermometer-half text-danger" ></i>
                        {weather?.current.temp_c} °C

                        &nbsp;&nbsp;

                        <i className="bi bi-droplet-half text-primary"></i>
                        {weather?.current.humidity}

                        &nbsp;&nbsp;

                        <i className="bi bi-wind text-success"></i>
                        {weather?.current.wind_kph} kph
                    </b>
                </p>
            
    </div>
</div>

    )
}

export default WeatherCard