
import WeatherCard from "./components/WeatherCard";
import './assets/css/index.css' 



const App = () => {
  
  return (
    <div className="container">
      <h1>Weather App</h1>
      <hr />
      <div className="row">
        <div className="col">
                <WeatherCard/> 
            
            
        </div>
      </div>
    </div>
  )
}

export default App