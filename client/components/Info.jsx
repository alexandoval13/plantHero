import React from 'react';
import styles from './css/Info.css';

const Info = (props) => {
  const p = props.selectedPlant;
  const light = (x) => {
    x.light = null;
    // x.exposure = null;
    if (x.light && x.exposure) {
      return `Thrives in ${x.light}, ${x.exposure} light.`;
    } else if (x.light || x.exposure) {
      return `Thrives in ${x.light || x.exposure} light.`;
    }
    return null;
  };

  const water = (x) => {
    let times = x['watering_times'];
    let days = x['watering_days'];
    if (days === 1 && times === 1) {
      return `Needs water once a day.`;
    } else if (days === 1) {
      return `Needs water ${times} times a day.`;
    } else if (times == 1 && days == 7) {
      return `Needs water once a week.`;
    } else if (times == 1) {
      return `Needs water once every ${days / 7} weeks.`;
    } else if (times > 1 && days > 7) {
      return `Needs water ${times} times every ${days / 7} weeks.`;
    } else {
      return `Needs water ${times} times a week.`;
    }
  };

  if (p) {
    return (
      <div className={styles['info-container']}>
        <h1 className={styles['name-txt']}>
          {' '}
          {p.nickname
            ? `${p.nickname} (${p['plant_name']})`
            : p['plant_name']}{' '}
        </h1>
        <img
          className={styles['large-img']}
          src={p.photourl || props.plantImg}
        ></img>
        <div>
          <h3>{light(p)}</h3>
          <h3>{water(p)}</h3>
          <h3>{p.humidity ? `Prefers ${p.humidity} humidity level.` : null}</h3>

          {props.content !== undefined ? (
            <div className={styles['close-info']}>
              {' '}
              <button
                className={styles['close-info-btn']}
                onClick={(e) => {
                  e.preventDefault();
                  props.setPlant(null);
                }}
              >
                {' '}
                Put Plant Away{' '}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Info;
