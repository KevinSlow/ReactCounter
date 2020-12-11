import React, {useState} from 'react';
import './App.css';
import {SettingCounterContainer} from "./Containers/SettingCounter/SettingCounterContainer";
import {Counter} from "./Components/Counter/Counter";



function App() {
  return (
    <div className="App">
      <SettingCounterContainer />
    </div>
  );
}

export default App;
