import { useEffect, useState } from 'react'
import Card from './components/Card'
import Input from './components/Input'
import Button from './components/Button'
import { useWeather } from './context/Weather'


function App() {
  const weather=useWeather();
  useEffect(()=>{
    weather.fetchcurrentuserlocationdata()
  },[]);

  return (
    <>
    <div className=' flex flex-col justify-center items-center h-fit shadow-slate-60 border'>
      <h1 className='font-medium'>Weather Forecast</h1>
      <Input placeholder="search"/>
      <Button onClick={weather.fetchdata} value="Search"/>
      <Card/>
      <Button  value='Refresh'/>
      </div>
    </>
  )
}

export default App
