import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    };
  }

  onInputChange = ({ target }) => {
    this.setState({ [target.name]: target.type === 'checkbox'
      ? target.checked : target.value });
  };

  isSaveButtonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const maxAtrr = 90;
    const minAtrr = 0;
    const sumAtrr = 210;

    if (cardName.length === 0 || cardDescription.length === 0 || cardImage.length === 0) {
      return true;
    }
    if (Number(cardAttr1) < minAtrr || Number(cardAttr1) > maxAtrr) { return true; }
    if (Number(cardAttr2) < minAtrr || Number(cardAttr2) > maxAtrr) { return true; }
    if (Number(cardAttr3) < minAtrr || Number(cardAttr3) > maxAtrr) { return true; }
    if (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > sumAtrr) {
      return true;
    }

    return false;
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    return (
      <div>
        <div id="left">
          <h1>Tryunfo!</h1>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ this.isSaveButtonDisabled() }
          />
        </div>
        <div id="right">
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
      </div>
    );
  }
}

export default App;
