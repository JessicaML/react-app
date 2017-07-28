import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Child extends React.Component {
  render() {
    return (<div>I'm the child</div>);
  }
}

class ShowHide extends React.Component {
  constructor() {
    super();
    this.state = {
      childVisible: false
    }
  }
  
  render() {
    return(
      <div>
        <div onClick={() => this.onClick()}>
          Parent - click me to show/hide my child
        </div>
        {
          this.state.childVisible
            ? <Child />
            : null
        }
      </div>
    )
  }
  
  onClick() {
    this.setState({childVisible: !this.state.childVisible});
  }
};
 
export default ShowHide;
