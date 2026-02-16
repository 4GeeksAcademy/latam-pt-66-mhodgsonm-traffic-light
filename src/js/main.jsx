import React from 'react'
import ReactDOM from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

import '../styles/index.css'

import TrafficLight from './components/TrafficLight';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<TrafficLight />);
