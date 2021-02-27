import React from 'react';
import styles from './css/Plant.css';

const Plant = (props) => {
  const plants = props.plants;
  console.log(plants);

  return (
    <div className={styles['plants-container']}>
      {props.filter
        ? plants.map((plant) => {
            console.log('FILTER:', props.filter);
            if (
              props.filter.plants &&
              props.filter.plants.indexOf(plant.id) >= 0
            ) {
              // refactor to work with categories plants array: categories.plants.indexOf(plant.id) >= 0... will need to pass down category and its plants array

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
