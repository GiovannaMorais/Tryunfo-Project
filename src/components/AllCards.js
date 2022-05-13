import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class AllCards extends React.Component {
  RarityAndTrunfoFilter=() => {
    const { cards, nameFilter, rarityFilter, trunfoFilter } = this.props;
    if (trunfoFilter) return cards.filter(({ Supertrunfo }) => Supertrunfo);
    const filterByNameAndRarity = cards
      .filter(({ name, rare }) => name.includes(nameFilter) && rare === rarityFilter);
    const filterByName = cards.filter(({ name }) => name.includes(nameFilter));
    const raridade = filterByName.filter(({ rare }) => rare === rarityFilter);
    if (nameFilter && rarityFilter) return filterByNameAndRarity;
    if (rarityFilter === 'todas') return filterByName;
    if (rarityFilter) return raridade;
  }

  render() {
    const { cards, HandleDelete } = this.props;

    return (
      <div>
        {cards
          && cards.length !== 0
          && this.RarityAndTrunfoFilter()
            .map(
              (
                {
                  name,
                  description,
                  attr1,
                  attr2,
                  attr3,
                  image,
                  rare,
                  Supertrunfo,
                },
                index,
              ) => (
                <Card
                  key={ `${index}-${name}` }
                  cardName={ name }
                  cardDescription={ description }
                  cardAttr1={ attr1 }
                  cardAttr2={ attr2 }
                  cardAttr3={ attr3 }
                  cardImage={ image }
                  cardRare={ rare }
                  cardTrunfo={ Supertrunfo }
                  btnDelete
                  HandleDelete={ () => HandleDelete(index) }
                />
              ),
            )}
      </div>
    );
  }
}
AllCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  HandleDelete: PropTypes.func.isRequired,
  nameFilter: PropTypes.string.isRequired,
  rarityFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
};
export default AllCards;
