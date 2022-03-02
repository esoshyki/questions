import React from 'react'
import reportWebVitals from './reportWebVitals'
import ReactDOM from 'react-dom'
import Questions from './Questions'
import './index.css';
import { Provider } from "react-redux";
import { store } from './store';

ReactDOM.render(
    <Provider store={store}>
        <Questions />
    </Provider>,       
    document.getElementById('root')
);

reportWebVitals()
