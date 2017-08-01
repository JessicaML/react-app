import React from 'react';
import { render } from 'react-dom';
import './index.css';
// import ShowHide from './hide';
import Notification from './numbers';

import registerServiceWorker from './registerServiceWorker';



registerServiceWorker();


render(<Notification />, document.getElementById('root1'));

// render(<ShowHide />, document.getElementById('root3'));