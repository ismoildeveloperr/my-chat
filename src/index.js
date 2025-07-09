import reportWebVitals from './reportWebVitals';
import store from "./Redux/state";

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>
    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();
