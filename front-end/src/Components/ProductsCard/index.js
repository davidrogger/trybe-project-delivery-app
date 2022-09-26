import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../../context/MyContext';

import {
  Card,
  Up,
  PriceContainer,
  Price,
  Img,
  Down,
  Title,
  Counter,
  Btn,
  Display,
} from './styles';

function ProductCard({ product: { id, name, price, urlImage } }) {
  const { counter, setCounter } = useContext(MyContext);

  const productPrice = () => {
    const test = `customer_products__element-card-price-${id}`;
    return (
      <Price>
        R$
        <span data-testid={ test }>
          {price.replace('.', ',')}
        </span>
      </Price>
    );
  };

  const img = () => {
    const test = `customer_products__img-card-bg-image-${id}`;
    return (<Img data-testid={ test } src={ urlImage } alt={ `Imagem ${name}` } />);
  };

  const btn = (p) => {
    const test = `customer_products__button-card-${p === '-' ? 'rm' : 'add'}-item-${id}`;
    const click = () => setCounter(p === '-' ? counter - 1 : counter + 1);
    return (<Btn onClick={ click } data-testid={ test } type="button">{ p }</Btn>);
  };

  const display = () => {
    const test = `customer_products__input-card-quantity-${id}`;
    return (<Display data-testid={ test } type="text" value={ counter } />);
  };

  return (
    <Card>
      <Up>
        <PriceContainer>
          { productPrice() }
        </PriceContainer>
        { img() }
      </Up>
      <Down>
        <Title data-testid={ `customer_products__element-card-title-${id}` }>
          <h4>{ name }</h4>
        </Title>
        <Counter>
          { btn('-') }
          { display() }
          { btn('+') }
        </Counter>
      </Down>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
