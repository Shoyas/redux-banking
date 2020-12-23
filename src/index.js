import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import { bankingReducer } from './components/reducers/bankingReducers';
import { rootReducer } from './components/reducers/combineReducer';


const store = createStore(rootReducer);



ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById("root")
    );