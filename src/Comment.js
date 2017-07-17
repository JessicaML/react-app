import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';

class Comment extends Component {
  render() {
    return (
            <h1>Hello, {this.props.name}!</h1>

    );
  }
}

export default Comment;

