import React from 'react';
import ReactDOM from 'react-dom';

import Portfolio from './components/Portfolio.jsx';

import './index.css';

ReactDOM.render(
    <Portfolio/>,
    document.getElementById('app')
);

module.hot.accept();
