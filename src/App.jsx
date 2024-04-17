import React, { useState } from 'react'

const api = {
  key: '195cf468ac1ec6168831956e8443ef73',
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {

  const [search, setSearch] = useState ('')
  const [weather, setWeather] = useState ({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=imperial&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      setWeather(result);
    })
  };

  return (
    <div className='app'>
    <div className='container'>
    <div className="searchBox">
      <input className='inputBar'
      type = 'text'
      placeholder='Enter City/Town...'
      onChange={(e) => setSearch(e.target.value)}
      />
      <button className='buttonSearch' onClick={searchPressed}>Search</button>
      </div>

      {typeof weather.main !== 'undefined' ? (
        <div className="top">
          <div className="location">
            <p>{weather.name}</p>
          </div>
          <div className="temp">
           <h1>{weather.main.temp.toFixed()}°F</h1>
          </div>
          <div className="description">
            <p>{weather.weather[0].main}</p>
          </div>
        </div>
      ) : ( 
      ''
      )}


{typeof weather.main !== 'undefined' ? (
        <div className="bottom">
        <div className="feels">
          <p className='boldPlease'>{weather.main.temp.toFixed()}°F</p>
          <p className='shift-left-Feels'>Feels Like</p>
        </div>
      <div className="humidity">
        <p className='boldPlease'>{weather.main.humidity}%</p>
        <p className='shift-left-Humidity'>Humidity</p>
      </div>
      <div className="wind">
        <p className='boldPlease'>{weather.wind.speed.toFixed()} MPH</p>
        <p className='shift-right-Wind'>Wind Speed</p>
      </div>
        </div>
    ) : ( 
    ''
    )}
    </div>
    </div>
  )
}

export default App
