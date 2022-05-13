import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class AllCards extends React.Component {
  render() {
    const { cards, HandleDelete, nameFilter } = this.props;

    return (
      <div>
        { (cards && cards.length !== 0) && cards
          .filter(({ name }) => name.includes(nameFilter))

          .map(
            (
              { name,
                description,
                attr1,
                attr2,
                attr3,
                image,
                rare,
                Supertrunfo },
              index,
            ) => (
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
                cardTrunfo={ Supertrunfo }
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
  nameFilter: PropTypes.string.isRequired,
};
export default AllCards;
