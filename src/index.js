import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Recipes from './render-pouch';
import db from './index-pouch.js';
import registerServiceWorker from './registerServiceWorker';


db.get('mittens2').then(function (doc) {
  console.log("index.js"+doc);

}).catch(function (err) {
  console.log(err);
});


registerServiceWorker();


ReactDOM.render(<App />, document.getElementById('root1'));

ReactDOM.render(<Recipes />, document.getElementById('root3'));

// ReactDOM.render(<Json source={doc.occupation} />, document.getElementById('root4'));
