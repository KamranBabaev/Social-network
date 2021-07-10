import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import AppWithRedux from "./AppWithRedux";
import {Provider} from "react-redux";
import {store} from "./state/store";

ReactDOM.render(
    <Provider store={store}>
        <AppWithRedux/>
    </Provider>,
=======
import App from './App';

ReactDOM.render(
    <App/>,
>>>>>>> parent of 5dd0909 (add reducer all functions in App)
    document.getElementById('root')
);