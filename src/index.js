import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './Redux/redux-store';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// let h1 = document.createElement("h1");
// h1.innerHTML = "Hello World!";
// document.body.appendChild(h1);
//
// React.createElement("h1", [React.createElement("h1", {})])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
    </React.StrictMode>
);

reportWebVitals();
