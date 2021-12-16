import { AutoComplete } from "antd";
import axios from "axios";
import { useState } from "react";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  const [city, setCity] = useState("");
  const [options, setOptions] = useState([]);
  const [weather, setWeather] = useState();

  function sendCity() {
    let date = getDate();
    axios
      .get(`https://www.metaweather.com/api/location/search/?query=${city}`)
      .then((res) => {
        //console.log(res.data[0].woeid);
        //setId(res.data[0].woeid);
        axios
          .get(
            `https://www.metaweather.com/api/location/${res.data[0].woeid}/${date}/`
          )
          .then((res) => {
            setWeather(res.data[0]);
            console.log(weather);
          });
        // .catch(console.log("No data received"));
      });
    // .catch(console.log("No data received"));
  }

  const onSearch = () => {
    if (city.length >= 2) {
      let newList = [];
      axios
        .get(`https://www.metaweather.com/api/location/search/?query=${city}`)
        .then((res) => {
          if (res.data) {
            //console.log(res.data);
            for (let item of res.data) {
              newList.push({ value: item.title, id: item.woeid });
            }
            setOptions([...newList]);
          }
        });
      // .catch(console.log("No data received"));
    }
  };

  function getDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "/" + mm + "/" + dd;
    return today;
  }

  return (
    <div className="App">
      <div>
        <AutoComplete
          value={city}
          options={options}
          onSelect={(city) => setCity(city)}
          style={{
            width: 200,
          }}
          onSearch={onSearch}
          onChange={(city) => setCity(city)}
        />
        <button
          onClick={() => {
            sendCity();
          }}
        >
          Search
        </button>
      </div>
      <div>
        Weather of {city} on {weather.applicable_date}
      </div>
      <div>
        <div>Max temperature: {Math.round(weather.max_temp)}°C</div>
        <div>Min temperature: {Math.round(weather.min_temp)}°C</div>
        <div>Avg. temperature: {Math.round(weather.the_temp)}°C</div>
        <div>Humidity: {weather.humidity}%</div>
        <div>Weather Condition: {weather.weather_state_name}</div>
        <div>Predictability: {weather.predictability}%</div>
        <div>Wind direction: {weather.wind_direction_compass}</div>
        <div>Wind speed: {Math.round(weather.wind_speed)} mph</div>
        <div>Air pressure: {weather.air_pressure} mbar</div>
        <div>Visibility: {Math.round(weather.visibility)} miles</div>
      </div>
    </div>
  );
}

export default App;
