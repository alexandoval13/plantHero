import React from 'react';
import styles from './css/Water.css';

const Water = (props) => {

  const plants = props.plants;

  const todayArr = props.date.split('-');
  const todayFormatted = todayArr[0] + todayArr[1] + todayArr[2];
  console.log('today:', todayFormatted);

  const needWater = (p) => {

    var num = p.watering[0];
    var period = null;

    if (p.watering[1] === 'daily') {
      period = 1;
    } else if (p.watering[1] === 'weekly') {
      period = 7;
    } else if (p.watering[1] === 'bi-weekly') {
      period = 14;
    } else if (p.watering[1] === 'monthly') {
      period = 28;
    } else {
      console.log('ERROR WITH WATERING')
    };

    let lastArr = p.lastWatered.split('-');
    let lastFormatted = lastArr[0] + lastArr[1] + lastArr[2];
    // console.log('last water date:', lastFormatted)

    var days = Math.floor(period / num);
    // console.log('amount of days from last water to next water', days);

    var curr = todayFormatted - lastFormatted;
    // console.log('curr', curr);

    return (todayFormatted - lastFormatted) >= days ? true : false
  }


  return (
    <div className={styles["plants-container"]}>
      <div>
        <h4>Psst... click if you're watering today right now.</h4>
        <h3>Probably Need Water:</h3>
        <div className={styles['need-water']}>
          {
            plants.map( plant => {

              if (needWater(plant)) {
                console.log(plant);
                return (
                  <div >
                    <div className={styles["planter"]} onMouseOver={(e)=>{props.handleMouse(e.target.name)}} onMouseOut={()=>{props.handleMouse(null)}} onClick={(e)=>{ props.handleWater(e) }}>
                      <img name={plant.id} src={( plant.photoFile || plant.photoURL ) || plantImg} className={styles["plant-image"]}/>

                    </div>
                    <text>{`Last watered: ${plant.lastWatered}`}</text>
                  </div>
                )
              }
            })
          }
        </div>
        <h3>Likely Good to Go:</h3>
        <div className={styles['gtg']}>
          {
            plants.map( plant => {

              if (!needWater(plant)) {
                console.log(plant);
                return (
                  <div >
                    <div className={styles["planter"]} onMouseOver={(e)=>{props.handleMouse(e.target.name)}} onMouseOut={()=>{props.handleMouse(null)}} onClick={(e)=>{ props.handleWater(e) }}>
                      <img name={plant.id} src={( plant.photoFile || plant.photoURL ) || plantImg} className={styles["plant-image"]}/>

                    </div>
                    <text>{`Last watered: ${plant.lastWatered}`}</text>
                  </div>
                )
              }
            })
          }
        </div>

      </div>

      {/* {
        props.filter ? (
          plants.map( plant => {
            if (plant.categories.indexOf(props.filter) >= 0) {
              return (
                <div className={styles["planter"]} onMouseOver={(e)=>{props.handleMouse(e.target.name)}} onMouseOut={()=>{props.handleMouse(null)}} onClick={()=>{}}>
                  <img name={plant.id} src={( plant.photoFile || plant.photoURL ) || plantImg} className={styles["plant-image"]}/>
                </div>
              )
            }
          })
        ) : (
          plants.map( plant =>
              <div className={styles["planter"]} onMouseOver={(e)=>{props.handleMouse(e.target.name)}} onMouseOut={()=>{props.handleMouse(null)}} onClick={()=>{}}>
                <img name={plant.id} src={( plant.photoFile || plant.photoURL ) || plantImg} className={styles["plant-image"]}/>
              </div>
          )
        )
      } */}


      {/* <div className={styles["btn-box"]}>
        <div className={styles["btn"]}>
          <button className={styles["add-plant-btn"]} onClick={()=>{props.setContent('Form'); props.setPlant(null)}} > <span>{'...'}</span> </button>
        </div>
      </div> */}

    </div>
  )
}

export default Water;