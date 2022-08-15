import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './component/Board.js';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Board/>);

//createRoot - https://github.com/reactwg/react-18/discussions/5
//ReactDOM.render(<App />, document.getElementById('root'));