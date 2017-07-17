import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NumberList from './numbers';
import Recipes from './recipes';
import Comment from './Comment';
// import PouchDB from 'pouchdb';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Recipes />, document.getElementById('root4'));
ReactDOM.render(<App />, document.getElementById('root2'));
registerServiceWorker();


ReactDOM.render(<Comment name="Handsome" />, document.getElementById('root1'));


const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root3')
);

