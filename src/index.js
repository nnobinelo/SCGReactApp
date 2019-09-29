import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'materialize-css/dist/css/materialize.min.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore,applyMiddleware } from 'redux'
import rootReducer from './redux/reducers/rootReducer'
import { Provider } from 'react-redux'
import preloadFirebaseData from './firebasePreloader'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import thunk from 'redux-thunk'
import InitializeScrollTriggers from './components/helpers/InitializeScrollTriggers'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCzLXRKj4wcAF1jIJOg5EBfRGgoZ2qBij4",
    authDomain: "simplyconnectedgames-website.firebaseapp.com",
    databaseURL: "https://simplyconnectedgames-website.firebaseio.com",
    projectId: "simplyconnectedgames-website",
    storageBucket: "simplyconnectedgames-website.appspot.com",
    messagingSenderId: "74831675325",
    appId: "1:74831675325:web:64da7592fb387e95"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Initialize other services on firebase instance
var database = firebase.firestore() // <- needed if using firestore

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

InitializeScrollTriggers()

// Render the react app after wanted data is retrieved from firebase
preloadFirebaseData(database).then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    )
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()