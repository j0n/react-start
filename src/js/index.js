import "@babel/polyfill";
import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Index extends Component {
  render() {
    return (
      <div>hej hej</div>
    );
  }
}
render(<Index />, document.getElementById('app'));
