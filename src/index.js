import React from 'react';
import { render } from 'react-dom';
import './index.css';
import script from './create-pouch';
import Notification from './numbers';

import registerServiceWorker from './registerServiceWorker';



registerServiceWorker();


render(<Notification />, document.getElementById('root1'));

render(<script />, document.getElementById('root3'));