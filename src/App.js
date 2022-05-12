import React from 'react';
import Form from './components/Form';

const initialState = {
  name: '',
  description: '',
  attr1: 0,
  attr2: 0,
  attr3: 0,
  image: '',
  rare: '',
  isSaveButtonDisabled: false,
  hasTrunfo: false,
  cardTrunfo: true,
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChange =({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
    );
  }

  onSaveButtonClick = () => {}

  render() {
    const { name, description, attr1, attr2, attr3, image, rare,
      hasTrunfo, cardTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.onSaveButtonClick }

        />
      </div>
    );
  }
}

export default App;
