import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Recipes from './Recipes';
import Notification from './numbers';

import registerServiceWorker from './registerServiceWorker';



registerServiceWorker();


render(<Notification />, document.getElementById('root1'));

render(<Recipes />, document.getElementById('root3'));