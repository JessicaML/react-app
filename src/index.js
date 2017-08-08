import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Notification from './numbers';
import registerServiceWorker from './registerServiceWorker';



registerServiceWorker();


render(<Notification />, document.getElementById('root1'));

// render(<createNewPouchNotif />, document.getElementById('root3'));