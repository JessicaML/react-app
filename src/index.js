import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Comment from './Comment';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Comment />, document.getElementById('root1'));

ReactDOM.render(<App />, document.getElementById('root2'));
registerServiceWorker();
