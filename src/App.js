import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const initialState = {
  cards: [],
  name: '',
  description: '',
  attr1: 0,
  attr2: 0,
  attr3: 0,
  image: '',
  rare: '',
  isSaveButtonDisabled: true,
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
    this.setState(() => ({ [name]: value }), this.validateSaveButton);
  }

  onSaveButtonClick = () => {
    const { name, description, image, rare, attr3, attr2, attr1, trunfo } = this.state;
    const objeto = {
      name,
      description,
      image,
      rare,
      attr3,
      attr2,
      attr1,
      trunfo,
    };
    this.setState(
      ({ cards }) => ({ cards: [...cards, objeto] }),
      () => {
        this.setState(() => ({
          name: '',
          description: '',
          image: '',
          rare: 'normal',
          attr1: 0,
          attr2: 0,
          attr3: 0,
        }));
      },
    );
    // console.log('objeto',objeto);
  };

  validateSaveButton = () => {
    const { name, description, attr1, attr2, attr3, image, rare } = this.state;
    let attr = true;

    if (Number((attr1) + (attr2) + (attr3) > ('210'))) {
      attr = false;
    }
    if (Number(attr1 > '90' || attr1 < 0)) attr = false;
    if (Number(attr2 > '90' || attr2 < 0)) attr = false;
    if (Number(attr3 > '90' || attr3 < 0)) attr = false;

    if (name && description && image && rare && attr) {
      this.setState(() => ({ isSaveButtonDisabled: false }));
    } else {
      this.setState(() => ({ isSaveButtonDisabled: true }));
    }
  }

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
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
