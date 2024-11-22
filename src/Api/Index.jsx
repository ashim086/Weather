const BaseURL   ="https://api.weatherapi.com/v1/current.json?key=3ed7fc223b874089b13112806241911";


export const Getweatherdataforcity=async(city)=> {
    const response =await fetch(`${BaseURL}&q=${city}&aqi=yes`);
    return await response.json();
}
export const Getweatherdataforlocation=async(lat,lon)=> {
    const response =await fetch(`${BaseURL}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
}