import React from 'react';
import styles from './css/Info.css';

const Info = (props) => {

  const p = props.selectedPlant;

  const light = (x) => {
    var string = '';
    var z = 0;
    while (z < x.length) {
      if (string === '') {
        string += x[z]
      } else {
        string += ', ' + x[z];
      }
      z++;
    }
    return string;
  }

  const water = (x) => {
    const string = x.watering[0] == 1 ? x.watering[0] + ' time ' + x.watering[1] : x.watering[0] + ' times ' + x.watering[1];
    return string;
  }


  if (p) {
    return (
      <div className={styles['info-container']}>
        <h1 className={styles['name-txt']} > { p.nickname? `${p.nickname} (${p.name})` : p.name } </h1>
        <img className={styles['large-img']} src={p.photoURL} ></img>
        <div>
          <h3>{ p.light[0] ? `Thrives in ${light(p.light)} light.\n` : null}</h3>
          <h3>{ `Needs water ${water(p)}.` }</h3>
          <h3>{ p.humidity ? `Prefers ${p.humidity} humidity level.` : null }</h3>

          { (props.content !== undefined) ? <div className={styles['close-info']} > <button className={styles['close-info-btn']} onClick={ (e)=> {e.preventDefault(); props.setPlant(null) } }> Put Plant Away </button></div> : null }
        </div>
      </div>
    )
  } else {
    return (
      null
    )
  }
}

export default Info;