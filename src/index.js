import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Recipes from './recipes';
import PouchDB from 'pouchdb';


import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();


ReactDOM.render(<App />, document.getElementById('root1'));

ReactDOM.render(<Recipes />, document.getElementById('root3'));
