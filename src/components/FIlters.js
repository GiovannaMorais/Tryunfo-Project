import React from 'react';
// import AllCards from './AllCards';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    // const { cards } = this.state;
    const { nameFilter, handleChange, rarityFilter, trunfoFilter } = this.props;
    return (
      <div>
        <label htmlFor="nameFilter">
          <p>Filtrar por Nome:</p>
          <input
            type="text"
            data-testid="name-filter"
            name="nameFilter"
            value={ nameFilter }
            disabled={ trunfoFilter }
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
            disabled={ trunfoFilter }
          >

            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>

        </label>
        <label htmlFor="trunfoFilter">
          <p>Filtrar por Trunfo:</p>
          <input
            onChange={ handleChange }
            checked={ trunfoFilter }
            name="trunfoFilter"
            data-testid="trunfo-filter"
            type="checkbox"
          />
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
