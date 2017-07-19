import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Recipes from './recipes';
import doc from './index-pouch.js';
import registerServiceWorker from './registerServiceWorker';


console.log("doc");

console.log(doc);


registerServiceWorker();


ReactDOM.render(<App />, document.getElementById('root1'));

ReactDOM.render(<Recipes />, document.getElementById('root3'));

// ReactDOM.render(<Json source={doc.occupation} />, document.getElementById('root4'));
