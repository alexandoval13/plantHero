import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import { getUser, getCategories, getPlants } from './api_helpers/helpers.js';

import Form from './components/Form.jsx';
import PlantList from './components/PlantList.jsx';
import Info from './components/Info.jsx';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Confirmation from './components/Confirmation.jsx';
import QuickDisplay from './components/QuickDisplay.jsx';

import styles from './css/App.css';

const plants = require('./dummy_plant_data.js');
const categoryList = require('./category_presets.js');

import moment from 'moment';
const today = moment().format().split('T')[0];
console.log(today, typeof today);

const App = () => {
  const [plantsData, setData] = useState(plants);
  const [categories, setCategories] = useState(categoryList);
  const [date, setDate] = useState(today);

  const [selectedPlant, setPlant] = useState(null);
  const [newPlant, setNewPlant] = useState(null);
  const [filter, setFilter] = useState(null);

  const [content, setContent] = useState('PlantList');
  const [quickDisplay, setQuickDisplay] = useState(null);
  const [image, setImage] = useState('');

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const today = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
    // console.log(today);

    // axios.get('/plant')
    //   .then(res => {
    //     // setData(res.data) // to reset the state of that hook
    //     console.log('successful request');
    //   })
    //   .catch(err => {
    //     console.log('error')
    //   })
    var pathArr = window.location.pathname.split('/');
    var id = pathArr[pathArr.length - 1];

    console.log('path:', window.location.pathname, id);
  }, []);

  const handleSubmitPlant = (e) => {
    e.preventDefault();

    var getCategories = (input) => {
      var selectedCategories = [];
      for (var i = 0; i < input.length; i++) {
        selectedCategories.push(input[i].value);
      }
      return selectedCategories;
    };

    var id = plantsData.length + 1;
    var name = e.target['plant-name'].value;
    var nickname = e.target['nickname'].value;
    var lightLevel = e.target['light-level'].value;
    var lightSource = e.target['light-source'].value;
    var light =
      lightLevel && lightSource
        ? lightLevel + ', ' + lightSource
        : lightLevel || lightSource
        ? lightLevel || lightSource
        : null;
    var wateringCycleAmount =
      e.target['watering-cycle-amount'].value > 0
        ? e.target['watering-cycle-amount'].value
        : null;
    var wateringCyclePeriod = e.target['watering-cycle-period'].value;
    var wateringCycle = [Number(wateringCycleAmount), wateringCyclePeriod];
    console.log('watering cycle:', wateringCycle);
    var humidity = e.target['humidity'].value;
    var categories = getCategories(e.target['categories']);
    var photoURL = image;

    if (id && name && wateringCycleAmount && wateringCyclePeriod) {
      const newPlantObj = {
        id: id,
        name: name,
        nickname: nickname,
        light: [light],
        watering: wateringCycle,
        humidity: humidity,
        categories: categories,
        photoURL: photoURL,
        lastWatered: today,
      };
      var newDataSet = plantsData.concat([newPlantObj]);
      setImage('');
      setData(newDataSet);
      setNewPlant(newPlantObj);
      setContent('Confirmation');
    } else {
      alert('Valid Name and Watering Cycle are required.');
    }
  };

  const uploadImage = (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'mvp-planterimages');
    setLoading(true);

    axios
      .post('https://api.cloudinary.com/v1_1/dpbieru1u/image/upload', data)
      .then((res) => {
        setImage(res.data.url);
      })
      .catch((err) => {
        setImage('Error');
      });
  };

  const handleMouse = (id) => {
    if (id) {
      for (var x = 0; x < plantsData.length && quickDisplay === null; x++) {
        if (plantsData[x].id === Number(id)) {
          setQuickDisplay(plantsData[x]);
        }
      }
    } else {
      setQuickDisplay(null);
    }
  };

  const handleWater = (e) => {
    e.preventDefault();

    console.log('handling water', e.target.name);
    var plant = e.target.name;

    var newDataSet = plantsData;

    for (var i = 0; i < plantsData.length; i++) {
      console.log('ID', plantsData[i].id);
      if (plantsData[i].id === Number(plant)) {
        plantsData[i].lastWatered = today;
        console.log('date changed to ', today);
        setData(newDataSet);
        console.log(plantsData);
        return;
      }
    }
  };

  return (
    <div className={styles['app-container']}>
      <div className={styles['header']}>
        <Header />
      </div>
      <div className={styles['sidebar']}>
        <Sidebar
          setContent={setContent}
          setFilter={setFilter}
          categories={categories}
          setPlant={setPlant}
        />
      </div>
      <div className={styles['quick-viewer']}>
        <QuickDisplay quickDisplay={quickDisplay} />
      </div>
      <div className={styles.content}>
        {content === 'PlantList' ? (
          <PlantList
            date={date}
            handleWater={handleWater}
            plants={plantsData}
            filter={filter}
            setPlant={setPlant}
            setContent={setContent}
            handleMouse={handleMouse}
          />
        ) : null}

        <Info
          selectedPlant={selectedPlant}
          setPlant={setPlant}
          content={content}
        />

        {content === 'Form' ? (
          <Form
            handleSubmitPlant={handleSubmitPlant}
            uploadImage={uploadImage}
            setImage={setImage}
            setContent={setContent}
            image={image}
            categories={categories}
          />
        ) : null}
        {content === 'Confirmation' ? (
          <Confirmation
            setContent={setContent}
            newPlant={newPlant}
            setPlant={setPlant}
            setFilter={setFilter}
          />
        ) : null}
      </div>
    </div>
  );
};

export default App;
