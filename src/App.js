import React, { Component } from 'react';

// import logo from './logo.svg';
// import './App.css';

import DisplayContainer from './components/DisplayContainer';
import ButtonsContainer from './components/ButtonsContainer';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentMins: 0,
      minsZeroPlaceholder: 0,
      currentSeconds: 0,
      secondsZeroPlaceholder: 0,
      increaseSecondsIntvlID: ''
    }
    this.startBtnFxn = this.startBtnFxn.bind(this);
    this.stopBtnFxn = this.stopBtnFxn.bind(this);
    this.resetBtnFxn = this.resetBtnFxn.bind(this);
  }

  startBtnFxn(event){
    console.log("startBtnFxn");

    let appComponent = this;

    // the return of setInt.
    let theID;

    function increaseSecondsFxn(){
      theID = setInterval(function() {

        // when seconds reach 60, increase mins
        if (appComponent.state.currentSeconds >= 59) {
          console.log("seconds greater than threshold, reset seconds, add 1 to mins");

          // if mins reach 10s, remove the placeholder 0
          if ( appComponent.state.currentMins >= 9 ){
            appComponent.setState({
              minsZeroPlaceholder: ''
            });
          }

          appComponent.setState({
            currentSeconds: 0,
            secondsZeroPlaceholder: 0,
            currentMins: appComponent.state.currentMins + 1
          });
        } else {
          console.log("seconds less than threshold; add one to seconds");

          // if seconds reach 10s, remove the placeholder 0
          if ( appComponent.state.currentSeconds >= 9 ){
            appComponent.setState({
              secondsZeroPlaceholder: ''
            });
          }

          appComponent.setState({
            currentSeconds: appComponent.state.currentSeconds + 1
          });
        }

      }, 1000);

    } // end increaseSecondsFxn

    increaseSecondsFxn();

    // set it once per start btn click
    this.setState({
      increaseSecondsIntvlID: theID
    });

  } // end startBtnFxn


  stopBtnFxn(event){
    clearInterval(this.state.increaseSecondsIntvlID);
  }

  resetBtnFxn(event){
    console.log("resetBtnFxn");
    this.setState({
      currentMins: 0,
      minsZeroPlaceholder: 0,
      currentSeconds: 0,
      secondsZeroPlaceholder: 0,
      increaseSecondsIntvlID: ''
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React Stopwatch</h1>
        <hr />
        <DisplayContainer
          theMins={this.state.currentMins}
          theMinsZeroPlaceholder={this.state.minsZeroPlaceholder}
          theSeconds={this.state.currentSeconds}
          theSecondsZeroPlaceholder={this.state.secondsZeroPlaceholder}
        />
        <hr />
        <ButtonsContainer
          startBtnFxn={this.startBtnFxn}
          stopBtnFxn={this.stopBtnFxn}
          resetBtnFxn={this.resetBtnFxn}
        />
      </div>
    );
  }
}

export default App;
