
import React, { Component } from 'react';

class DisplayContainer extends Component {
  render(){
    return(
      <div>
        <h3>DisplayContainer</h3>
        <span>{this.props.theMinsZeroPlaceholder}</span>
        <span>{this.props.theMins}</span>:
        <span>{this.props.theSecondsZeroPlaceholder}</span>
        <span>{this.props.theSeconds}</span>
      </div>
    )
  }
}


export default DisplayContainer;
