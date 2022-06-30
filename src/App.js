import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <div>
        <div id="left">
          <h1>Tryunfo!</h1>
          <Form />
        </div>
        <div id="right">
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
