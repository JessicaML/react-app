import React from 'react';
import { render } from 'react-dom';
import './index.css';
// import App from './App';
import Recipes from './Recipes';
// import db from './index-pouch.js';
// import getNotifs from './export-prom.js';

import registerServiceWorker from './registerServiceWorker';


// db.get('mittens2').then(function (doc) {
//   console.log("index.js"+doc);

// }).catch(function (err) {
//   console.log(err);
// });



registerServiceWorker();


// ReactDOM.render(<App />, document.getElementById('root1'));

render(<Recipes />, document.getElementById('root3'));

// ReactDOM.render(<Json source={doc.occupation} />, document.getElementById('root4'));
