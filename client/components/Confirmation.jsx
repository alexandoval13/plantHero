import React from 'react';
import Info from './Info.jsx';
import styles from './css/Confirmation.css';

const Confirmation = (props) => {

  return (
    <div className={styles['confirmation-container']} >
      <h1 className={styles['confirmation-txt']}> Plant added to the collection! </h1>
      <h5 classname={styles['confirmation-subtxt']} >We're going to assume it's freshly watered. Let's keep it alive, now.</h5>

      <Info selectedPlant={props.newPlant} setPlant={props.setPlant}/>

      <div>
        <button onClick={ () => {props.setContent('PlantList'); props.setFilter(null) }}> View collection </button>
        <button onClick={ () => {props.setContent('Form'); props.setFilter(null) } }> Add another plant </button>
      </div>
    </div>
  )

}

export default Confirmation;