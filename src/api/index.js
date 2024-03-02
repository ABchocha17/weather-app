const baseURL = "https://api.weatherapi.com/v1/current.json?key=63f211f137034d5ab9745632240203&q"
export const getWetherDataForCity = async(city)=> {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await response.json();
}


export const getWetherDataForLocation = async(lat,lon)=> {
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
}
