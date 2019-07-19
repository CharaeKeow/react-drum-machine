import React from 'react';
import './App.css';
import ReactFCCtest from 'react-fcctest';


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
    this.playSound = this.playSound.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  playSound(event) {
    const sound = document.getElementById(this.props.id);    
    //sound.currentTime = 0;
    sound.play();
    sound.volume = 0.2; //Will work on this later       
  }

  /*
    Can't be used directly even with onKeyClick, as it needs
    an event listener (which, I presume, will listen for event globally).
    So how do I handle that? Using componetDidMount() :)
  */
  keyPress(event) {
    if (event.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }

  /*
    As stated before, we will add an event listener, for keydown event, 
    once the component are mounted.
  */
  componentDidMount() {
    document.addEventListener("keydown", this.keyPress);
  }

  /*
    Seems like I also need this method to perform necessary clean up (or "unsubscribe", per React docs words)
    for the event listener created in componentDidMount().
    Without this, keydown will work once, any additional keydown after
    that won't work. 
    So what happens here is like we mount and unmount, thus rerendervaluein the
    components.
  */
  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPress)
  }
  
  render() {
    return (
      <div className="drum-pad" onClick={this.playSound}>
        {this.props.value}
        <audio value={this.props.keyTrigger} id={this.props.id} src={this.props.url}>
        </audio>
      </div>
    );
  }
}

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ''      
    };    
  }

  render() {
    return (
      <div id="drum-machine">
        {bankOne.map(item => (
          <DrumPads 
            value={item.keyTrigger} 
            url={item.url} 
            id={item.id} 
            keyCode={item.keyCode}            
            />
        ))}            
        <p id="display">
          {this.state.display}
        </p>
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
        <ReactFCCtest />
      </div>
    );
  }
}

export default App;