import React from 'react';
import moment from 'moment';
import styles from './css/Water.css';

const Water = (props) => {
  const plants = props.plants;

  const formatDisplayDate = (date) => {
    let d = date.split('T')[0].split('-');
    return `${d[1]}/${d[2]}/${d[0]}`;
  };

  const getDaysDiff = (today, lastDate) => {
    let lastArr = moment(lastDate.split('T')[0].split('-'));
    let todayArr = moment(today.split('T')[0].split('-'));
    return todayArr.diff(lastArr, 'days');
  };

  const needWater = (p) => {
    var days = Math.floor(p['watering_days'] / p['watering_times']);
    var difference = getDaysDiff(props.date, p['last_watered']);
    return difference >= days ? true : false;
  };

  return (
    <div className={styles['plants-container']}>
      <div>
        <h3>Check for water:</h3>
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
                  <div className={styles['water-info']}>
                    <h5>{`Watered ${formatDisplayDate(
                      plant['last_watered']
                    )}`}</h5>
                  </div>
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
                  <div className={styles['water-info']}>
                    <h5>{`Watered ${formatDisplayDate(
                      plant['last_watered']
                    )}`}</h5>
                  </div>
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
