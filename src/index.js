import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App.js';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

//createRoot - https://github.com/reactwg/react-18/discussions/5
//ReactDOM.render(<App />, document.getElementById('root'));