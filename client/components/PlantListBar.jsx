import React, { useState } from 'react';
import styles from './css/PlantListBar.css';

const PlantListBar = (props) => {
  return (
    <div className={styles['mode-bar']}>
      <div
        className={styles['mode-select']}
        name="viewMode"
        onClick={() => {
          props.setMode('ViewMode');
          props.setPlant(null);
        }}
      >
        View Mode
      </div>
      <div
        className={styles['mode-select']}
        name="waterMode"
        onClick={() => {
          props.setMode('WaterMode');
          props.setPlant(null);
        }}
      >
        Water Mode
      </div>
    </div>
  );
};

export default PlantListBar;
