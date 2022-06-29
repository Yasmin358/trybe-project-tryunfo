import React from 'react';

class Form extends React.Component {
  render() {
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
            />
          </label>
        </div>
        <hr />
        <div className="itemsForm2">
          <h2>Atributos</h2>
          <label htmlFor="attr1">
            1:
            <input type="number" data-testid="attr1-input" className="input" id="attr1" />
          </label>
          <label htmlFor="attr2">
            2:
            <input type="number" data-testid="attr2-input" className="input" id="attr2" />
          </label>
          <label label htmlFor="attr3">
            3:
            <input type="number" data-testid="attr3-input" className="input" id="attr3" />
          </label>
        </div>
        <div className="itemsForm">
          <label htmlFor="image">
            Imagem:
            <input type="text" data-testid="image-input" className="input" />
          </label>
        </div>
        <div className="itemsForm">
          <label htmlFor="rare">
            Raridade:
            <select data-testid="rare-input" id="rare" className="input">
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
            />
          </label>
        </div>
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
