import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/style.css";
import registerServiceWorker from './registerServiceWorker';
import Routes from './Routes';

ReactDOM.render( <Routes />, document.getElementById('root'));
registerServiceWorker();
