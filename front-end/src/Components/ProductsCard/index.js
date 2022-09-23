import PropTypes from 'prop-types';
import { CardBody, TitleDiv, Title, ImageDiv, Img, PriceDiv, Price } from './styles';

function ProductCard({ product }) {
  return (
    <CardBody>
      <TitleDiv>
        <Title
          data-testid={ `customer_products__element-card-title-${product.id}` }
        >
          { product.name }

        </Title>
      </TitleDiv>
      <PriceDiv>
        <Price
          data-testid={ `customer_products__element-card-price-${product.id}` }
        >
          { product.price }

        </Price>
      </PriceDiv>
      <ImageDiv>
        <Img
          data-testid={ `customer_products__img-card-bg-image-${product.id}` }
          src={ product.urlImage }
          alt="imagem do produto"
        />
      </ImageDiv>
      <button
        data-testid={ `customer_products__button-card-rm-item-${product.id}` }
        type="button"
      >
        -

      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${product.id}` }
        type="text"
      />
      <button
        data-testid={ `customer_products__button-card-add-item-${product.id}` }
        type="button"
      >
        +

      </button>
    </CardBody>
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
