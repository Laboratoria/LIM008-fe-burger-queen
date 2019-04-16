import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import BadgeNew from './pages/BadgeNew';
import 'bootstrap/dist/css/bootstrap.css';

const container = document.getElementById('root');
ReactDOM.render(<BadgeNew />, container);

serviceWorker.register();
