import React, { useEffect } from 'react';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Botton';
import { useWeather } from './context/Wether';


export default function App() {
  const Weather = useWeather();
  useEffect(() => {
    const fetchData = async () => {
      const weatherData = await Weather.fetchCurrentUserLocation();
      // Do something with weatherData if needed
    };
  
    fetchData();
  
    // Cleanup function if needed
    return () => {
      // Cleanup logic here
    };
  }, []);

  return (
    <div className="app">
      <div className="container">
        <h1>Weather Forecast</h1>
        <div className="search">
          <Input />
          <Button value="Search" onClick={Weather.fetchData} />
        </div>
        <Card />
        <Button value="Refresh" />
      </div>
    </div>
  );
}