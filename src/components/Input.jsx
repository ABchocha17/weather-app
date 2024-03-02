import React from 'react';
import { useWeather } from '../context/Wether';

export default function Input() {
  const Wether = useWeather(); 
  
  const handleChange = (e) => {
    Wether.setSearchCity(e.target.value);
  };

  return (
    <input 
      type="text" 
      placeholder='Serch Hear'
      value={Wether.searchCity} 
      onChange={handleChange} 
    />
  );
}
