import React from 'react'
import { useWeather } from '../context/Weather'

function Search() {
    const weather = useWeather();
    console.log(weather);

    return (
        <div>
            <input type='text'
                placeholder={"search here"}
                value={weather.SearchCity}
                onChange={(e) =>  weather.setSearchCity( e.target.value )}
                className='border-black border'></input>
        </div>
    )
}

export default Search