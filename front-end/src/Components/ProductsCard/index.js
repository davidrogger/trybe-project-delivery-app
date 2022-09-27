import React, { useContext, useEffect, useState } from 'react';
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
import formatPrice from '../../utils/formatPrice';

function ProductCard({ id, name, price, urlImage }) {
  const {
    getProductQuantity,
    cartProducts,
    handlerCartProducts,
  } = useContext(MyContext);

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(getProductQuantity(id));
  }, [getProductQuantity, cartProducts, id]);

  const productPrice = () => {
    const test = `customer_products__element-card-price-${id}`;
    return (
      <Price>
        R$
        <span data-testid={ test }>
          {formatPrice(Number(price))}
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
    const click = () => {
      let quantityUpdate;
      if (p === '-') {
        quantityUpdate = quantity !== 0 ? quantity - 1 : 0;
      } else {
        quantityUpdate = quantity + 1;
      }

      setQuantity(quantityUpdate);
      handlerCartProducts(id, quantityUpdate);
    };
    return (<Btn onClick={ click } data-testid={ test } type="button">{ p }</Btn>);
  };

  const productQuantityDisplay = () => {
    const test = `customer_products__input-card-quantity-${id}`;
    const change = ({ target }) => {
      setQuantity(target.value < 1 ? 0 : target.value);
      handlerCartProducts(id, Number(target.value));
    };
    return (
      <Display
        data-testid={ test }
        onChange={ change }
        type="text"
        value={ quantity }
      />
    );
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
          { productQuantityDisplay() }
          { btn('+') }
        </Counter>
      </Down>
    </Card>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  urlImage: PropTypes.string,
  id: PropTypes.number,
}.isRequired;

export default ProductCard;
