import React from 'react';
import styles from './css/Plant.css';

const Plant = (props) => {
  const plants = props.plants;
  const filter = props.filter;

  return (
    <div className={styles['plants-container']}>
      {filter
        ? plants.map((plant) => {
            if (
              filter.plants &&
              props.filter.plants.indexOf(String(plant.id)) >= 0
            ) {
              return (
                <div
                  className={styles['planter']}
                  onMouseOver={(e) => {
                    props.handleMouse(e.target.name);
                  }}
                  onMouseOut={() => {
                    props.handleMouse(null);
                  }}
                  onClick={() => {
                    props.setPlant(plant);
                    props.setContent('PlantList');
                  }}
                >
                  <img
                    name={plant.id}
                    src={plant.photourl || props.plantImg}
                    className={styles['plant-image']}
                  />
                </div>
              );
            }
          })
        : plants.map((plant) => (
            <div
              className={styles['planter']}
              onMouseOver={(e) => {
                props.handleMouse(e.target.name);
              }}
              onMouseOut={() => {
                props.handleMouse(null);
              }}
              onClick={() => {
                props.setPlant(plant);
                props.setContent('PlantList');
              }}
            >
              <img
                name={plant.id}
                src={plant.photourl || props.plantImg} // review
                className={styles['plant-image']}
              />
            </div>
          ))}
      <div className={styles['btn-box']}>
        <div className={styles['btn']}>
          <button
            className={styles['add-plant-btn']}
            onClick={() => {
              props.setContent('Form');
              props.setPlant(null);
            }}
          >
            {' '}
            <span>{'...'}</span>{' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plant;
