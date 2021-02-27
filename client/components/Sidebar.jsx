import React from 'react';
import styles from './css/Sidebar.css';

const Sidebar = (props) => {
  return (
    <div className={styles['sidebar-container']}>
      <div>
        <button
          className={styles['sidebar-btn']}
          onClick={() => {
            props.setContent('PlantList');
            props.setPlant(null);
            props.setFilter(null);
          }}
        >
          Go to All Plants
        </button>
      </div>
      <button
        className={styles['sidebar-btn']}
        onClick={() => {
          props.setContent('Form');
          props.setPlant(null);
        }}
      >
        Add a New Plant
      </button>
      <div className={styles['category-sct']}>
        <h4 className={styles['group-txt']}>Group By...</h4>
        {props.categories.map((category) => {
          return (
            <div
              className={styles['category']}
              onClick={() => {
                console.log('clicked', category);
                props.setContent('PlantList');
                props.setFilter(category);
                props.setPlant(null);
              }}
            >
              {category['category_label']}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
