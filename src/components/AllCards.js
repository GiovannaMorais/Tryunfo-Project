import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class AllCards extends React.Component {
  render() {
    const { cards, HandleDelete } = this.props;
    return (
      <div>
        { (cards && cards.length !== 0) && cards.map(
          ({ name, description, attr1, attr2, attr3, image, rare, trunfo }, index) => (
            <Card
              key={ `${index}-${name}` }
              btnDelete
              HandleDelete={ () => HandleDelete(index) }
              cardName={ name }
              cardDescription={ description }
              cardAttr1={ attr1 }
              cardAttr2={ attr2 }
              cardAttr3={ attr3 }
              cardImage={ image }
              cardRare={ rare }
              cardTrunfo={ trunfo }
            />
          ),
        ) }
      </div>
    );
  }
}
AllCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  HandleDelete: PropTypes.func.isRequired,
};
export default AllCards;
