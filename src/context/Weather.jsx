import { createContext, useContext, useState } from "react";
import { Getweatherdataforcity ,Getweatherdataforlocation} from "../Api/Index";

const Weathercontext=createContext(null);
export const useWeather=()=>{
    return useContext(Weathercontext);
};

export const WeatherProvider=(props)=>{
    const[data,setData]=useState(null);
    const[SearchCity,setSearchCity]=useState(null);

const fetchdata=async ()=>{
    const response=await Getweatherdataforcity(SearchCity);
    setData(response);
}
const fetchcurrentuserlocationdata=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        Getweatherdataforlocation(
            position.coords.latitude,
        position.coords.longitude).then(data=>setData(data));
    });
}
   return <Weathercontext.Provider 
   value={{
    data,
    SearchCity,
    setSearchCity,
    fetchdata,
    fetchcurrentuserlocationdata}}>
        {props.children}
        </Weathercontext.Provider>
};