import React from 'react';
import styles from './Card.module.css';

export default function Card (props) {
  const {max, min, name, img, onClose, primary } = props;
  // acá va tu código
  return (
    <div className={`${styles.card} ${primary ? styles.primary : ''}`}>
        <span className={styles.name}>
          {name}
       <button className={styles.btnClose} onClick={onClose}>
        X
        </button>
          </span>
        <img 
        src={`http://openweathermap.org/img/wn/${img}@2x.png`} 
        alt="Img not found" 
        />
        <div className={styles.temps}>
        <Temp Label='Min' temp={min} />
        <Temp Label='Max' temp={max} />
        </div>
        </div>
  );
}

//mala practica ALERT
// esto debería estar en un archivo aparte

function Temp({Label, temp}) {
  return (
    <div className={styles.temp}>
        <span>{Label}</span>
        <span>{temp}</span>
      </div>
  );
}
