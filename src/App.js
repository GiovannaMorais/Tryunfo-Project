import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import AllCards from './components/AllCards';
import Filters from './components/FIlters';

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
  Supertrunfo: false,
  nameFilter: '',
  rarityFilter: 'todas',
  trunfoFilter: 'false',
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChange = ({ target }) => {
    const { name } = target;

    const value = target.type === 'checkbox' ? target.checked : target.value;

    if (target.type === 'checkbox') {
      // console.log(target);
      // console.log('value', value);
      // console.log('name', name);
    }
    this.setState(() => ({ [name]: value }), this.validateSaveButton);
  };

  onSaveButtonClick = () => {
    const { name, description, image, rare, attr3,
      attr2, attr1, Supertrunfo } = this.state;
    const objeto = {
      name,
      description,
      image,
      rare,
      attr3,
      attr2,
      attr1,
      Supertrunfo,
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
        if (Supertrunfo) {
          this.setState(() => ({ hasTrunfo: true, Supertrunfo: false }));
        }
      },
    );
    // console.log('objeto',objeto);
  };

  validateSaveButton = () => {
    const { name, description, attr1, attr2, attr3, image, rare } = this.state;
    let attr = true;
    const atr1 = Number(attr1);
    const atr2 = Number(attr2);
    const atr3 = Number(attr3);

    const totalSoma = 210;
    const min = 0;
    const max = 90;

    if (atr1 + atr2 + atr3 > totalSoma) {
      attr = false;
    }
    if (atr1 > max || attr1 < min) attr = false;
    if (atr2 > max || attr2 < min) attr = false;
    if (atr3 > max || attr3 < min) attr = false;

    if (name && description && image && rare && attr) {
      this.setState(() => ({ isSaveButtonDisabled: false }));
    } else {
      this.setState(() => ({ isSaveButtonDisabled: true }));
    }
  };

  HandleDelete = (index) => {
    const { cards } = this.state;
    const filtrarCard = cards.filter((_, i) => i !== index);
    const card = cards.find((_, i) => i === index);
    if (card.Supertrunfo) this.setState(() => ({ hasTrunfo: false }));
    this.setState(() => ({ cards: filtrarCard }));
  };

  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      hasTrunfo,
      Supertrunfo,
      isSaveButtonDisabled,
      cards,
      nameFilter,
      rarityFilter,
      trunfoFilter,
    } = this.state;
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
          cardTrunfo={ Supertrunfo }
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
          cardTrunfo={ Supertrunfo }
        />
        {/* {cards.map((card, index) => <Card key={ index } { ...card } />)} */}
        <AllCards
          nameFilter={ nameFilter }
          rarityFilter={ rarityFilter }
          trunfoFilter={ trunfoFilter }
          HandleDelete={ this.HandleDelete }
          cards={ cards }
        />
        <Filters
          nameFilter={ nameFilter }
          handleChange={ this.handleChange }
          rarityFilter={ rarityFilter }
          trunfoFilter={ trunfoFilter }
        />
      </div>
    );
  }
}

export default App;
