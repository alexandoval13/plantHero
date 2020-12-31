import React from 'react';
import styles from './css/Plant.css';


const plantImg = 'https://www.pngkey.com/png/detail/167-1679820_cartoon-characters-animals-and-plants-plants-in-the.png';


const Plant = (props) => {

  const plants = props.plants;

  return (
    <div className={styles["plants-container"]}>

      {
        props.filter ? (
          plants.map( plant => {
            if (plant.categories.indexOf(props.filter) >= 0) {
              return (
                <div className={styles["planter"]} onMouseOver={(e)=>{props.handleMouse(e.target.name)}} onMouseOut={()=>{props.handleMouse(null)}} onClick={()=>{props.setPlant(plant); props.setContent('PlantList')}}>
                  <img name={plant.id} src={( plant.photoFile || plant.photoURL ) || plantImg} className={styles["plant-image"]}/>
                </div>
              )
            }
          })
        ) : (
          plants.map( plant =>
              <div className={styles["planter"]} onMouseOver={(e)=>{props.handleMouse(e.target.name)}} onMouseOut={()=>{props.handleMouse(null)}} onClick={()=>{props.setPlant(plant); props.setContent('PlantList')}}>
                <img name={plant.id} src={( plant.photoFile || plant.photoURL ) || plantImg} className={styles["plant-image"]}/>
              </div>
          )
        )
      }
      <div className={styles["btn-box"]}>
        <div className={styles["btn"]}>
          <button className={styles["add-plant-btn"]} onClick={()=>{props.setContent('Form'); props.setPlant(null)}} > <span>{'...'}</span> </button>
        </div>
      </div>

    </div>
  )
}

export default Plant;