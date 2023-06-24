import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

function App() {
 const [data, setData] = useState({})
 const [inp, setInp] = useState('')
let url ='https://api.openweathermap.org/data/2.5/weather?q='+ inp +'&units=metric&appid=33e4873783416ea8ea9252bb78ee6efb'
function searchInp(inp){
    axios.get(url).then(response => {
      setData(response.data)
      console.log(response.data)
    })
}



  return (
    <div className="app">
      <div className="search">
        <input 
        value={inp}
        onChange={event => setInp(event.target.value)}
        placeholder="Enter City" 
        type="text"/>
      </div>
      <button onClick={searchInp} >
        Enter
      </button>
      <div class="container">
        <div class="top">
          <div class="location">
            <h3>{data.name}</h3>
          </div>
          <div class="temp">
            {data.main ? <h1>{data.main.temp.toFixed() }°C</h1> : null}
          </div>
          <div class="description">
            {data.weather ?<p className="cent">{data.weather[0].main}</p> : null }
          </div>
        </div>
        <div class="bottom">
          <div class="feels">
              {data.main ? <p className="bold">{data.main.feels_like.toFixed() }</p> : null}
              <p>&nbsp;&nbsp;Feels Like &nbsp;&nbsp;</p>
          </div>
          <div class="humidity">
             {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>&nbsp;&nbsp;Humidity&nbsp;&nbsp;</p>
          </div>
          <div class="wind">
             {data.wind ? <p className="bold">{(data.wind.speed*3.6).toFixed()}</p> : null}
             <p>&nbsp;&nbsp;Wind speed&nbsp;&nbsp;</p>
             <p>(km/hr)</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
