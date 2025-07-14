import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Provider from "./StoreContext";
const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
            <App  />
                </Provider>
            </React.StrictMode>
    );
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});



reportWebVitals();
