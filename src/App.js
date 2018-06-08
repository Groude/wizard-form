import React, { Component } from 'react';

import './styles/style.scss';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">Заполните форму</h1>
          <div className="row">
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
