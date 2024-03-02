import React, { createContext, useContext, useState } from 'react';
import { getWetherDataForCity,getWetherDataForLocation } from '../api/index';

const WetherContext = createContext(null);

export const useWeather = () => {
  return useContext(WetherContext);
}

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState('');

    const fetchData = async () => {
        const response = await getWetherDataForCity(searchCity);
        setData(response);
    }

    const fetchCurrentUserLocation =()=>{
      navigator.geolocation.getCurrentPosition((position)=>{
        getWetherDataForLocation(position.coords.latitude,position.coords.latitude)
        .then(data => setData(data));
      })
    }

    return (
      <WetherContext.Provider value={{ data, searchCity, setSearchCity, fetchData,fetchCurrentUserLocation }}>
        {props.children}
      </WetherContext.Provider>
    );
  }