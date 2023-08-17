import React from 'react';
import PropTypes from 'prop-types';
import '../styles/card.css';

class Card extends React.Component {
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
    } = this.props;

    return (
      <div id="card">
        <div className="itemsCard" id="cardTitle">
          <h2 data-testid="name-card">{ cardName }</h2>
        </div>

        <div className="itemsCard" id="cardImage">
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        </div>

        <div className="itemsCard" id="cardDescription">
          <p data-testid="description-card">
            { cardDescription }
          </p>
        </div>
        <div className="itemsCard" id="cardAttr1">
          <p className="attrTitle">Atributo 1: </p>
          <p data-testid="attr1-card" className="attrValue">
            { cardAttr1 }
          </p>
        </div>
        <div className="itemsCard" id="cardAttr2">
          <p className="attrTitle">Atributo 2: </p>
          <p data-testid="attr2-card" className="attrValue">{ cardAttr2 }</p>
        </div>
        <div className="itemsCard" id="cardAttr3">
          <p className="attrTitle">Atributo 3: </p>
          <p data-testid="attr3-card" className="attrValue">{ cardAttr3 }</p>
        </div>
        <div className="itemsCard" id="cardRare">
          <p data-testid="rare-card">
            <strong>{ cardRare }</strong>
          </p>
          {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo!</p>}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
