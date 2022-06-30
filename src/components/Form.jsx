import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    /* const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo
      isSavedButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props; */
    return (
      <form id="formulario">
        <div className="itemsForm">
          <label htmlFor="name">
            Nome:
            <input
              id="name"
              type="text"
              data-testid="name-input"
              className="input"
              /* value={ cardName }
              onChange={ onInputChange } */
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
              className="input"
              /* value={ cardDescription }
              onChange={ onInputChange } */
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
              className="input"
              id="attr1"
              /* value={ cardAttr1 }
              onChange={ onInputChange } */
            />
          </label>
          <label htmlFor="attr2">
            2:
            <input
              type="number"
              data-testid="attr2-input"
              className="input"
              id="attr2"
              /* value={ cardAttr2 }
              onChange={ onInputChange } */
            />
          </label>
          <label label htmlFor="attr3">
            3:
            <input
              type="number"
              data-testid="attr3-input"
              className="input"
              id="attr3"
              /* value={ cardAttr3 }
              onChange={ onInputChange } */
            />
          </label>
        </div>
        <div className="itemsForm">
          <label htmlFor="image">
            Imagem:
            <input
              type="text"
              data-testid="image-input"
              className="input"
              /* value={ cardImage }
              onChange={ onInputChange } */
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
              /* value={ cardRare }
              onChange={ onInputChange } */
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
        </div>
        <div className="itemsForm">
          <label htmlFor="trunfo">
            Super Trunfo:
            <input
              type="checkbox"
              data-testid="trunfo-input"
              id="trunfo"
              className="input"
              /* checked={ cardTrunfo }
              onChange={ onInputChange } */
            />
          </label>
        </div>
        <button
          /* disabled={ isSavedButtonDisabled }
          onClick={ onSaveButtonClick } */
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

/* Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSavedButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
}; */
export default Form;
