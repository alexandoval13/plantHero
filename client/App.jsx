import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { getUser, getPlants, getCategories } from './api_helpers/read.js';
import { addPlant, updateWaterDate } from './api_helpers/write.js';
import { plantImg } from './assets/plantImg.js';

import Form from './components/Form.jsx';
import PlantList from './components/PlantList.jsx';
import Info from './components/Info.jsx';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Confirmation from './components/Confirmation.jsx';
import QuickDisplay from './components/QuickDisplay.jsx';

import styles from './css/App.css';
import moment from 'moment';

const today = moment().format().split('T')[0];

const App = () => {
  // const [status, setStatus] = useState(0);
  const [plantsData, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [date, setDate] = useState(today);
  const [selectedPlant, setPlant] = useState(null);
  const [newPlant, setNewPlant] = useState(null);
  const [filter, setFilter] = useState(null);
  const [content, setContent] = useState('PlantList');
  const [quickDisplay, setQuickDisplay] = useState(null);
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    var pathArr = window.location.pathname.split('/');
    var id = pathArr[pathArr.length - 1] || 1;

    getUser(id).then((user) => {
      console.log('USER INFO:', user);
      setUser(user);
    });
    getPlants(id).then((plants) => {
      setData(plants);
    });

    getCategories(id).then((cats) => {
      setCategories(cats);
    });
  }, []);

  const convertToDays = (value) => {
    if (value === 'daily') return 1;
    if (value === 'weekly') return 7;
    if (value === 'bi-weekly') return 14;
    if (value === 'monthly') return 28;
    console.log('failed');
  };

  const handleSubmitPlant = (e) => {
    e.preventDefault();

    var getCategories = (input) => {
      var selectedCategories = [];
      for (var i = 0; i < input.length; i++) {
        selectedCategories.push(input[i].value);
      }
      return selectedCategories;
    };

    var name = e.target['plant-name'].value;
    var nickname = e.target['nickname'].value;
    var light = e.target['light-level'].value;
    var exposure = e.target['light-source'].value;
    var wateringTimes =
      e.target['watering-cycle-amount'].value > 0
        ? e.target['watering-cycle-amount'].value
        : null;
    var wateringDays = convertToDays(e.target['watering-cycle-period'].value);
    var humidity = e.target['humidity'].value;
    var categories = getCategories(e.target['categories']);
    var photoURL = image;

    if (name && wateringTimes && wateringDays) {
      console.log(user, user.id);
      const newPlantObj = {
        plant_name: name,
        nickname: nickname,
        light: light,
        exposure: exposure,
        watering_times: Number(wateringTimes),
        watering_days: wateringDays,
        last_watered: moment().format(),
        humidity: humidity,
        photourl: photoURL,
        added: moment().format(),
        user_id: user[0].id,
      };

      var newDataSet = plantsData.concat([newPlantObj]);
      setImage('');
      setData(newDataSet);
      setNewPlant(newPlantObj);
      setContent('Confirmation');

      addPlant(newPlantObj);
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

  // NEEDS REFACTORING TO UPDATE DATABASE
  const handleWater = (e) => {
    e.preventDefault();
    var plantId = e.target.name;
    console.log('plant id:', plantId, '|| todays date:,', today);

    // invoke update last watered date via API
    updateWaterDate({ id: plantId, date: today }).then((result) => {
      var pathArr = window.location.pathname.split('/');
      var id = pathArr[pathArr.length - 1] || 1;
      getPlants(id).then((plants) => {
        setData(plants);
        console.log(plantsData);
      });
    });
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
            categories={categories}
            setPlant={setPlant}
            setContent={setContent}
            handleMouse={handleMouse}
            plantImg={plantImg}
          />
        ) : null}

        <Info
          selectedPlant={selectedPlant}
          setPlant={setPlant}
          content={content}
          plantImg={plantImg}
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
