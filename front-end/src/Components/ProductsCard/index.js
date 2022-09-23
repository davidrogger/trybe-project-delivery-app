import PropTypes from 'prop-types';
import { CardBody, TitleDiv } from './styles';

function ProductCard({ product }) {
  return (
    <CardBody>
      <TitleDiv>
        { product.name }
      </TitleDiv>
    </CardBody>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
