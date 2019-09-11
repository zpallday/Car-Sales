import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { reducer } from './reducer';
import { Provider } from 'react-redux';
import 'bulma/css/bulma.css';
import './styles.scss';

export const store = createStore(reducer);
console.log('store');


const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}>
<App /> 
</Provider>, rootElement);
