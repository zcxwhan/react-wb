import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from "./store";
import {Provider} from "react-redux";
import "./stylesheets/main.scss";

import "../node_modules/swiper/dist/css/swiper.min.css";

import 'antd-mobile/dist/antd-mobile.css';

import "./modules/rem";
import {
    BrowserRouter as Router
} from 'react-router-dom'



ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
