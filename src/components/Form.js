import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            data-testid="name-input"
            name="name"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea
            type="text"
            data-testid="description-input"
            name="description"
          />
        </label>
        <label htmlFor="attr1">
          Atributo 1
          <input
            type="number"
            data-testid="attr1-input"
            name="attr1"
          />
        </label>
        <label htmlFor="attr1">
          Atributo 2
          <input
            type="number"
            data-testid="attr2-input"
            name="attr2"
          />
        </label>

        <label htmlFor="attr1">
          Atributo 3
          <input
            type="number"
            data-testid="attr3-input"
            name="attr3"
          />
        </label>
        <label htmlFor="image">
          Image
          <input
            type="text"
            data-testid="image-input"
            name="image"
          />
        </label>
        <label htmlFor="rare">
          Rarity:
          <select
            data-testid="rare-input"
            name="rare"
          >

            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Trunfo:
          <input
            type="checkbox"
            data-testid="trunfo-input"
            name="trunfo"
          />
        </label>

        <button
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}
export default Form;
