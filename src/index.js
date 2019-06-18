import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

const container = document.getElementById('root');
ReactDOM.render(<App className="width-total" />, container);

serviceWorker.register();
