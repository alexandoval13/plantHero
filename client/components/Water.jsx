import React from 'react';
import styles from './css/Water.css';

const Water = (props) => {
  const plants = props.plants;

  const joinDate = (date) => {
    let lastArr = date.split('T')[0].split('-');
    return lastArr[0] + lastArr[1] + lastArr[2];
  };

  const formatDisplayDate = (date) => {
    let d = date.split('T')[0].split('-');
    return `${d[1]}/${d[2]}/${d[0]}`;
  };

  const needWater = (p) => {
    var num = p['watering_times'];
    var period = p['watering_days'] / 7;
    var days = Math.floor(period / num);
    var today = joinDate(props.date);
    var last = joinDate(p['last_watered']);
    return today - last >= days ? true : false;
  };

  return (
    <div className={styles['plants-container']}>
      <div>
        <h4>Psst... click if you're watering today right now.</h4>
        <h3>Probably Need Water:</h3>
        <div className={styles['need-water']}>
          {plants.map((plant) => {
            if (needWater(plant)) {
              return (
                <div>
                  <div
                    className={styles['planter']}
                    onMouseOver={(e) => {
                      props.handleMouse(e.target.name);
                    }}
                    onMouseOut={() => {
                      props.handleMouse(null);
                    }}
                    onClick={(e) => {
                      props.handleWater(e);
                    }}
                  >
                    <img
                      name={plant.id}
                      src={plant.photourl || props.plantImg}
                      className={styles['plant-image']}
                    />
                  </div>
                  <text>{`Last watered: ${formatDisplayDate(
                    plant['last_watered']
                  )}`}</text>
                </div>
              );
            }
          })}
        </div>
        <h3>Likely Good to Go:</h3>
        <div className={styles['gtg']}>
          {plants.map((plant) => {
            if (!needWater(plant)) {
              return (
                <div>
                  <div
                    className={styles['planter']}
                    onMouseOver={(e) => {
                      props.handleMouse(e.target.name);
                    }}
                    onMouseOut={() => {
                      props.handleMouse(null);
                    }}
                    onClick={(e) => {
                      props.handleWater(e);
                    }}
                  >
                    <img
                      name={plant.id}
                      src={plant.photourl || props.plantImg}
                      className={styles['plant-image']}
                    />
                  </div>
                  <text>{`Last watered: ${formatDisplayDate(
                    plant['last_watered']
                  )}`}</text>
                </div>
              );
            }
          })}
        </div>
      </div>

      {/* {
        props.filter ? (
          plants.map( plant => {
            if (plant.categories.indexOf(props.filter) >= 0) {
              return (
                <div className={styles["planter"]} onMouseOver={(e)=>{props.handleMouse(e.target.name)}} onMouseOut={()=>{props.handleMouse(null)}} onClick={()=>{}}>
                  <img name={plant.id} src={( plant.photoFile || plant.photoURL ) || props.plantImg} className={styles["plant-image"]}/>
                </div>
              )
            }
          })
        ) : (
          plants.map( plant =>
              <div className={styles["planter"]} onMouseOver={(e)=>{props.handleMouse(e.target.name)}} onMouseOut={()=>{props.handleMouse(null)}} onClick={()=>{}}>
                <img name={plant.id} src={( plant.photoFile || plant.photoURL ) || props.plantImg} className={styles["plant-image"]}/>
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
  );
};

export default Water;
