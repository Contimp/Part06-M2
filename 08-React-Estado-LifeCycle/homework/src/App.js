import React, {useState} from 'react';
import './App.css';

import Nav from './components/Nav';
import Cards from './components/Cards';

export default function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=d786ca6e0e2851e455708aea88bc1069&units=metric`)
     .then(res => res.json())
     .then (recurso => {
      const ciudad = {
        min: Math.round(recurso.main.temp_min),
        max: Math.round(recurso.main.temp_max),
        img: recurso.weather[0].icon,
        id: recurso.id,
        wind: recurso.wind.speed,
        temp: recurso.main.temp,
        name: recurso.name,
        weather: recurso.weather[0].main,
        clouds: recurso.clouds.all,
        latitud: recurso.coord.lat,
        longitud: recurso.coord.lon
      };

       setCities(oldCities => [...oldCities, ciudad]);
     })

     
  }
  function onClose(id) {
    
  }


  return (
    <div className="App">
     <Nav onSearch={onSearch} />
     <Cards cities={cities} />
    </div>
  );
}
