import React from 'react'

export default function Botton(props) {
  return (
    <button onClick={props.onClick} >{props.value}</button>
  )
}
