import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header'
import Footer from './Footer'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
    <Header /> 
    <App />
    <Footer />
    </div>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
