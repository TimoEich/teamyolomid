import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
    apiKey: 'AIzaSyBKGpTL1auht_KbnicaOpFLGsqfGufghcs',
    authDomain: 'teamyolomid-73eca.firebaseapp.com',
    projectId: 'teamyolomid-73eca',
    databaseURL: 'https://teamyolomid-73eca.firebaseio.com'
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
