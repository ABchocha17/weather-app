import React from 'react'
import { useWeather } from '../context/Wether';


export default function Card() {
  const Wether = useWeather(); 
  return (
    <div className='card'>
        <img src={Wether?.data?.current?.condition?.icon} alt="" />
        <h2>{Wether?.data?.current?.temp_c} C</h2>
        <h5>{Wether?.data?.location?.name}</h5>
    </div>
  )
}
