import React from 'react';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return (
    <div>
      <button onClick={onClose}>X</button>

      <h4>{name}</h4>
      <p>max</p>
      <p>{max}</p>
      <p>min</p>
      <p>{min}</p>

      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Img not found" />

    </div>
  )
};