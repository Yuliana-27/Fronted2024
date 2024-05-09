const getWeather = async () => {
const response = await fetch ('http://api.weatherapi.com/v1/current.json?key=5947320eed19400aafe01229240905&q=Tuxtepec&aqi=no');
const weather = await response.json()

    console.log(weather)
}

getWeather()


const App = () => {
  return (
    <div>Weather API</div>
  )
}

export default App