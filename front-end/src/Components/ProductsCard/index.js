import PropTypes from 'prop-types';
import { CardBody, TitleDiv } from './styles';

function ProductCard({ name }) {
  return (
    <CardBody>
      <TitleDiv>
        { name }
      </TitleDiv>
    </CardBody>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string,
}.isRequired;

export default ProductCard;
