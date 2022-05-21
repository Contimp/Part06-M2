import React from "react";
import s from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  // acá va tu código
  
const handleOnSearch = () => {
  const input = document.getElementById('searchInput')
  onSearch(input.value);
  input.value='';
};

  return (
    <div className={s.container}>
      <input className={s.input} type="text" placeholder=" Ingrese ciudad..." 
      autoComplete='off'
      onKeyPress={(e) => {
        if (e.key === 'Enter') handleOnSearch();
      }}
      />
      <button className={s.btnSearch} onClick={() => onSearch('Agregando ciudad...')}>Agregar</button>
    </div>
  );
}