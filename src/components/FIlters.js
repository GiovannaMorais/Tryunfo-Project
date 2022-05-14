import React from 'react';
// import AllCards from './AllCards';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    // const { cards } = this.state;
    const { nameFilter, handleChange, rarityFilter, trunfoFilter } = this.props;
    let boolFilter = trunfoFilter;

    if (typeof boolFilter === 'string') {
      boolFilter = boolFilter === 'true';
    }

    return (
      <div>
        <label htmlFor="nameFilter">
          <p>Filtrar por Nome:</p>
          <input
            type="text"
            data-testid="name-filter"
            name="nameFilter"
            value={ nameFilter }
            disabled={ boolFilter }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="rarityFilter">
          <p>Filtrar por Raridade:</p>
          <select
            data-testid="rare-filter"
            name="rarityFilter"
            defaultChecked="todas"
            value={ rarityFilter }
            onChange={ handleChange }
            disabled={ boolFilter }
          >

            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>

        </label>
        <label htmlFor="trunfoFilter">

          <input
            onChange={ handleChange }
            checked={ boolFilter }
            name="trunfoFilter"
            data-testid="trunfo-filter"
            type="checkbox"
            id="trunfoFilter"
          />
          Filtrar por Trunfo:
        </label>

      </div>
    );
  }
}

Filters.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  rarityFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,

};
export default Filters;
