import React, { Component } from 'react';
import PickerDemo from './Airbnb/PickerDemo';
import AirbnbLogo from './Airbnb/Logo';
import RTLogo from './RTLogo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App--LoveWrapper">
          <AirbnbLogo className="App--AirbnbLogo" />
          <span className="App--Love"> 😍 </span>
          <RTLogo className="App--RTLogo" />
        </div>
        <h1 className="App--title">
          <span className="App--title__strong">React Toolbox Core demo.</span>
          This Date Picker has been built using react-toolbox v2 core.
        </h1>
        <PickerDemo />
      </div>
    );
  }
}

export default App;
