import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import AllCards from './components/AllCards';

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
  trunfo: false,
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
        if (trunfo) this.setState(() => ({ hasTrunfo: true, trunfo: false }));
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

HandleDelete =(index) => {
  const { cards } = this.state;
  const filtrarCard = cards.filter((_, i) => i !== index);
  const card = cards.find((_, i) => i === index);
  if (card.trunfo) this.setState(() => ({ hasTrunfo: false }));
  this.setState(() => ({ cards: filtrarCard }));
}

render() {
  const { name, description, attr1, attr2, attr3, image, rare,
    hasTrunfo, trunfo, isSaveButtonDisabled, cards } = this.state;
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
        cardTrunfo={ trunfo }
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
        cardTrunfo={ trunfo }
      />
      {/* {cards.map((card, index) => <Card key={ index } { ...card } />)} */}
      <AllCards cards={ cards } HandleDelete={ this.HandleDelete } />
    </div>
  );
}
}

export default App;
