import React from 'react';
import { render } from 'react-dom';
import './index.css';
import url from './create-pouch';
import Notification from './numbers';

import registerServiceWorker from './registerServiceWorker';



registerServiceWorker();


render(<Notification />, document.getElementById('root1'));

render(<url />, document.getElementById('root3'));