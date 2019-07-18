import React from 'react';
import './App.css';
import { tsImportEqualsDeclaration } from '@babel/types';
//import { directive } from '@babel/types';

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
];

class DrumPads extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const sound = document.getElementById(this.props.id);
    sound.currentTime = 0;
    sound.play();
  }

  render() {
    return (
      <div className="drum-pads" onClick={this.handleClick}>
        {this.props.value}
        <audio ref={this.props.keyTrigger} src={this.props.url} id={this.props.id}>
        </audio>
      </div>
    );
  }
}

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null
    };        
  }  

  render() {
    return (
      <div id="drum-machine">
        {bankOne.map(item => (
          <DrumPads value={item.keyTrigger} url={item.url} id={item.id}/>
        ))}
      </div>      
    );
  }
}

class App extends React.Component {

  render() {
    return(
      <div>
        <h1>React Drum Machine</h1>
        <DrumMachine />
      </div>
    );
  }
}

export default App;