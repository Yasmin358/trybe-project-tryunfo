import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const noHasTrunfo = (
      <label htmlFor="trunfo">
        Super Trunfo:
        <input
          type="checkbox"
          data-testid="trunfo-input"
          id="trunfo"
          name="cardTrunfo"
          className="input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>
    );

    return (
      <form id="formulario">
        <div className="itemsForm">
          <label htmlFor="name">
            Nome:
            <input
              id="name"
              type="text"
              data-testid="name-input"
              name="cardName"
              className="input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="itemsForm">
          <label htmlFor="description">
            Descrição:
            <textarea
              rows="6"
              data-testid="description-input"
              id="description"
              name="cardDescription"
              className="input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <hr />

        <div className="itemsForm2">
          <h2>Atributos</h2>
          <label htmlFor="attr1">
            1:
            <input
              type="number"
              data-testid="attr1-input"
              name="cardAttr1"
              className="input"
              id="attr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr2">
            2:
            <input
              type="number"
              data-testid="attr2-input"
              className="input"
              name="cardAttr2"
              id="attr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr3">
            3:
            <input
              type="number"
              data-testid="attr3-input"
              className="input"
              name="cardAttr3"
              id="attr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="itemsForm">
          <label htmlFor="image">
            Imagem:
            <input
              type="text"
              data-testid="image-input"
              id="image"
              name="cardImage"
              className="input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="itemsForm">
          <label htmlFor="rare">
            Raridade:
            <select
              data-testid="rare-input"
              id="rare"
              className="input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
        </div>

        <div className="itemsForm">
          { hasTrunfo ? <span>Você já tem um Super Trunfo em seu baralho</span>
            : noHasTrunfo }
        </div>

        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="submit"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;
