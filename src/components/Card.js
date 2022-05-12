import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardImage, cardAttr1, cardAttr2,
      cardAttr3, cardRare, cardTrunfo, HandleDelete, btnDelete } = this.props;
    return (
      <div>

        <p data-testid="name-card">{cardName}</p>

        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{cardDescription}</p>
        <p data-testid="attr1-card">{cardAttr1}</p>
        <p data-testid="attr2-card">{cardAttr2}</p>
        <p data-testid="attr3-card">{cardAttr3}</p>
        <p data-testid="rare-card">{cardRare}</p>
        {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
        { (btnDelete) && (
          <button
            type="button"
            onClick={ HandleDelete }
            data-testid="delete-button"

          >
            Excluir
          </button>
        ) }
      </div>
    );
  }
}
Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  HandleDelete: PropTypes.func.isRequired,
  btnDelete: PropTypes.bool.isRequired,
};
export default Card;
