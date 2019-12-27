import "@babel/polyfill";
import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './app';
import { StateProvider } from './store.js';
import './index.css';

export default class Index extends Component {

  render() {
    return (
      <StateProvider>
        <App />
      </StateProvider>
    );
  }
}
render(<Index />, document.getElementById('app'));
