import React from 'react';
// import AllCards from './AllCards';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    // const { cards } = this.state;
    const { nameFilter, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="nameFilter">
          <p>Filtrar por Nome:</p>
          <input
            type="text"
            data-testid="name-filter"
            name="nameFilter"
            value={ nameFilter }
            onChange={ handleChange }
          />
          {/* {cards.filter((name) => name.includes(nameFilter)) } */}
        </label>
      </div>
    );
  }
}

Filters.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  //   cards: PropTypes.arrayOf.isRequired,
  //   name: propTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,

};
export default Filters;
