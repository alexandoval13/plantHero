import React, { useState } from 'react';
import styles from './css/PlantList.css';
import PlantListBar from './PlantListBar.jsx';
import Plant from './Plant.jsx';
import Water from './Water.jsx';

const PlantList = (props) => {
  const [mode, setMode] = useState('ViewMode');

  return (
    <div className={styles['plant-list-comp']}>
      <PlantListBar setPlant={props.setPlant} setMode={setMode} />
      <div className={styles['plant-box']}>
        {mode === 'ViewMode' ? (
          <Plant
            plants={props.plants}
            setPlant={props.setPlant}
            setContent={props.setContent}
            handleMouse={props.handleMouse}
            filter={props.filter}
            categories={props.categories}
            plantImg={props.plantImg}
          />
        ) : null}
        {mode === 'WaterMode' ? (
          <Water
            date={props.date}
            handleWater={props.handleWater}
            plants={props.plants}
            setPlant={props.setPlant}
            setContent={props.setContent}
            handleMouse={props.handleMouse}
            filter={props.filter}
            plantImg={props.plantImg}
          />
        ) : null}
      </div>
    </div>
  );
};

export default PlantList;
