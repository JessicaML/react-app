import React, { Component } from 'react';
import logo from './logo.svg';

class Comment extends Component {
  render() {
    return (
      <div className="Comment">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Helllllooooo.
        </p>
      </div>
    );
  }
}

export default Comment;
