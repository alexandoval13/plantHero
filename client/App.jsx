import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PlantList from './components/PlantList.jsx';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';


import axios from 'axios';



const App = () => {

  useEffect( () => {

  }, [])

  return (
    <div >
      APP CONTAINER
      <Header />
      <Sidebar />
      <PlantList />
    </div>
  )
}

export default App;
