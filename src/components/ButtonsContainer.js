
import React, { Component } from 'react';

class ButtonsContainer extends Component {
  render() {
    return(
      <div>
        <h3>ButtonsContainer</h3>
        <button onClick={this.props.startBtnFxn}>Start</button>
        <button onClick={this.props.stopBtnFxn}>Stop</button>
        <button onClick={this.props.resetBtnFxn}>Reset</button>
      </div>
    )
  }
}


export default ButtonsContainer;
