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
      cardsArray: [],
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

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const saveCard = this.state;

    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      cardsArray: [...prevState.cardsArray, saveCard],
    }));
  }

  hasTrunfo = () => {
    const { cardsArray } = this.state;
    const search = cardsArray.some((card) => card.cardTrunfo === true);
    return search;
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

    const { cardsArray } = this.state;

    return (
      <div>
        <h1 id="title">Tryunfo!</h1>
        <div id="left">
          <h3>Adicionar Carta: </h3>
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
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ this.hasTrunfo() }
          />
        </div>
        <div id="right">
          <h3>Pré visualização: </h3>
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
        <h2 id="cardsTitle"> Cartas </h2>
        <div id="bottom">
          {
            cardsArray.map((card) => (
              <Card
                key={ card.cardName }
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
