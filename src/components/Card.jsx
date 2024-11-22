import React from 'react'
import { useWeather } from '../context/Weather.jsx';

function Card() {
  const weather=useWeather();
  return (
    <div className='items-center justify-center contens-center flex flex-col p-3'>
        <img src={weather.data?.current?.condition.icon}></img>
        <h2>{weather.data?.current?.temp_c}</h2>
        <h5>{weather.data?.location?.name},{weather.data?.location?.country}</h5>

    </div>
  )
}

export default Card